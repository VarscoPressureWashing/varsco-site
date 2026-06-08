// Functions 2.0 (ESM) — writes content idea state to Netlify Blobs.
// POST bodies:
//   {action:"seed", ideas:[...]}   -> replace whole list
//   {action:"add", idea:{...}}     -> append one idea
//   {id, status}                   -> update one idea's status
import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") return new Response("POST only", { status: 405 });
  try {
    const store = getStore("varsco-content");
    let body = {};
    try { body = await req.json(); } catch (e) {}
    let ideas = (await store.get("ideas", { type: "json", consistency: "strong" })) || [];

    if (body.action === "seed" && Array.isArray(body.ideas)) {
      ideas = body.ideas;
    } else if (body.action === "add" && body.idea) {
      ideas.push(body.idea);
    } else if (body.id && body.status) {
      ideas = ideas.map((i) => (i.id === body.id ? { ...i, status: body.status } : i));
    } else {
      return new Response("bad request", { status: 400 });
    }

    await store.setJSON("ideas", ideas);
    return new Response(JSON.stringify(ideas), {
      headers: { "content-type": "application/json", "access-control-allow-origin": "*" }
    });
  } catch (e) {
    return new Response("error: " + String(e && e.message), { status: 500 });
  }
};
