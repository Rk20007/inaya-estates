import { connectToDatabase } from "./mongodb";
import MetaLead from "@/models/MetaLead";

const DEFAULT_API_VERSION = "v21.0";

function flattenFieldData(fieldData = []) {
  const fields = {};
  fieldData.forEach((entry) => {
    if (entry?.name) {
      fields[entry.name] = Array.isArray(entry.values) ? entry.values.join(", ") : "";
    }
  });
  return fields;
}

/**
 * Fetches every lead from a Meta (Facebook) Lead Ads form, paging through all
 * results, and upserts them into MongoDB. Existing admin-set `status` and
 * `remarks` are preserved on re-sync — only the Facebook-sourced fields are
 * refreshed.
 */
export async function syncMetaLeads() {
  const accessToken = process.env.META_LEADS_ACCESS_TOKEN;
  const formId = process.env.META_LEAD_FORM_ID;
  const apiVersion = process.env.META_GRAPH_API_VERSION || DEFAULT_API_VERSION;

  if (!accessToken || !formId) {
    throw new Error(
      "META_LEADS_ACCESS_TOKEN and META_LEAD_FORM_ID must be set in your environment to sync Meta leads."
    );
  }

  await connectToDatabase();

  let url = `https://graph.facebook.com/${apiVersion}/${formId}/leads?fields=id,created_time,field_data&limit=100&access_token=${accessToken}`;

  let fetched = 0;
  let created = 0;
  let updated = 0;
  let pages = 0;
  const MAX_PAGES = 50; // safety cap against a runaway pagination loop

  while (url && pages < MAX_PAGES) {
    const response = await fetch(url, { cache: "no-store" });
    const payload = await response.json();

    if (!response.ok) {
      const message = payload?.error?.message || `Meta Graph API request failed (${response.status}).`;
      throw new Error(message);
    }

    const leads = payload?.data ?? [];
    for (const lead of leads) {
      fetched += 1;

      // Checked separately (rather than relying on the upsert result's raw
      // driver metadata, whose shape isn't consistent across Mongoose/MongoDB
      // driver versions) so the created/updated counts are always accurate.
      const alreadyExists = await MetaLead.exists({ metaLeadId: lead.id });

      await MetaLead.findOneAndUpdate(
        { metaLeadId: lead.id },
        {
          $set: {
            formId,
            createdTime: lead.created_time ? new Date(lead.created_time) : undefined,
            fieldData: lead.field_data ?? [],
            fields: flattenFieldData(lead.field_data),
          },
          $setOnInsert: { status: "New", remarks: "" },
        },
        { upsert: true, new: true }
      );

      if (alreadyExists) {
        updated += 1;
      } else {
        created += 1;
      }
    }

    url = payload?.paging?.next || null;
    pages += 1;
  }

  return { fetched, created, updated, pages };
}
