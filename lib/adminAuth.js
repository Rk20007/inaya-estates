export const ADMIN_COOKIE_NAME = "admin_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set. Add it to your .env.local file.");
  }
  return secret;
}

function bufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  const base64 = btoa(binary);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(message, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return bufferToBase64Url(signature);
}

function timingSafeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}

export async function createSessionToken(username) {
  const secret = getSecret();
  const expiry = Date.now() + SESSION_TTL_MS;
  const payload = `${username}.${expiry}`;
  const signature = await hmac(payload, secret);
  return `${payload}.${signature}`;
}

export async function verifySessionToken(token) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [username, expiry, signature] = parts;
  if (!Number.isFinite(Number(expiry)) || Date.now() > Number(expiry)) return false;

  const secret = getSecret();
  const expectedSignature = await hmac(`${username}.${expiry}`, secret);
  return timingSafeEqual(signature, expectedSignature);
}
