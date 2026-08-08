import { NextResponse } from "next/server";
import { syncMetaLeads } from "@/lib/metaLeads";

// Called every 5 minutes by Vercel Cron (see vercel.json). Vercel automatically
// sends `Authorization: Bearer <CRON_SECRET>` on cron-triggered requests when
// the CRON_SECRET env var is set on the project — verified below so this
// endpoint can't be hit by anyone who finds the URL.
function isAuthorized(request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = request.headers.get("authorization");
  return header === `Bearer ${secret}`;
}

export async function GET(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await syncMetaLeads();
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("Cron: failed to sync Meta leads:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to sync Meta leads." },
      { status: 500 }
    );
  }
}
