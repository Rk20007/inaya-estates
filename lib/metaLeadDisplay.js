/** Turns a Facebook form field key like "full_name" or "aap_kis_shehar_se_hain?"
 *  into a readable label: "Full name" / "Aap kis shehar se hain?" */
export function prettifyFieldName(name = "") {
  const spaced = name.replace(/_/g, " ").trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

const NAME_KEYS = ["full_name", "name"];
const PHONE_KEYS = ["phone_number", "phone"];
const WHATSAPP_KEYS = ["whatsapp_number", "whatsapp"];

function findField(fields, keys) {
  if (!fields) return "";
  for (const key of keys) {
    if (fields[key]) return fields[key];
  }
  // Fall back to a loose substring match against whatever the ad form actually used.
  const entry = Object.entries(fields).find(([fieldKey]) =>
    keys.some((key) => fieldKey.toLowerCase().includes(key.split("_")[0]))
  );
  return entry ? entry[1] : "";
}

export function getLeadName(fields) {
  return findField(fields, NAME_KEYS) || "Unnamed lead";
}

export function getLeadPhone(fields) {
  return findField(fields, PHONE_KEYS);
}

export function getLeadWhatsapp(fields) {
  return findField(fields, WHATSAPP_KEYS);
}
