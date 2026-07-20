/**
 * POST /api/subscribe — Astro API route, served by the Cloudflare Worker.
 * Adds a contact to the SendFox list for the given silo ("es" | "en").
 * Token comes from the SENDFOX_API_TOKEN secret; never logged or returned.
 */

export const prerender = false;

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

export async function POST(context) {
  const token = context.locals.runtime?.env?.SENDFOX_API_TOKEN;
  if (!token) {
    console.error("[subscribe] SENDFOX_API_TOKEN is not set");
    return json({ ok: false, error: "config" }, 500);
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
        Authorization: `Bearer ${token}`,
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
  } catch {
    console.error("[subscribe] SendFox request failed");
    return json({ ok: false, error: "upstream" }, 502);
  }

  return json({ ok: true });
}

// Any non-POST method lands here (POST above takes precedence).
export function ALL() {
  return json({ ok: false, error: "method" }, 405);
}
