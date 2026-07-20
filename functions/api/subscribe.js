/**
 * POST /api/subscribe — Cloudflare Pages Function.
 * Adds a contact to the SendFox list for the given silo ("es" | "en").
 * Token comes from the SENDFOX_API_TOKEN secret; never logged or returned.
 */

const LIST_IDS = { es: 663144, en: 663145 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return json({ ok: false, error: "method" }, 405);
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ ok: false, error: "invalid" }, 400);
  }

  const { email, firstName, silo, website } = body || {};

  // Honeypot: real users never fill this field. Silently accept bots.
  if (website) {
    return json({ ok: true });
  }

  const listId = silo === "es" || silo === "en" ? LIST_IDS[silo] : null;
  if (typeof email !== "string" || !EMAIL_RE.test(email) || !listId) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  try {
    const res = await fetch("https://api.sendfox.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.SENDFOX_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        first_name: firstName || "",
        lists: [listId],
      }),
    });
    if (!res.ok) {
      console.error(`[subscribe] SendFox responded ${res.status}`);
      return json({ ok: false, error: "upstream" }, 502);
    }
  } catch (err) {
    console.error("[subscribe] SendFox request failed");
    return json({ ok: false, error: "upstream" }, 502);
  }

  return json({ ok: true });
}
