// Functions 2.0 (ESM) — Netlify Blobs auto-configures in this format.
// Returns the content idea list.
import { getStore } from "@netlify/blobs";

export default async () => {
  try {
    const store = getStore("varsco-content");
    const ideas = (await store.get("ideas", { type: "json" })) || [];
    return new Response(JSON.stringify(ideas), {
      headers: { "content-type": "application/json", "cache-control": "no-store", "access-control-allow-origin": "*" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e && e.message), ideas: [] }), {
      headers: { "content-type": "application/json" }
    });
  }
};
