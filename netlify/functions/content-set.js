// Writes content idea state to Netlify Blobs.
// POST bodies:
//   {action:"seed", ideas:[...]}        -> replace whole list
//   {action:"add", idea:{...}}          -> append one idea
//   {id:"...", status:"approved|passed|pending|scripting|ready|posted"} -> update one idea's status
const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "POST only" };
  try {
    const store = getStore("varsco-content");
    let body = {};
    try { body = JSON.parse(event.body || "{}"); } catch (e) {}
    let ideas = (await store.get("ideas", { type: "json" })) || [];

    if (body.action === "seed" && Array.isArray(body.ideas)) {
      ideas = body.ideas;
    } else if (body.action === "add" && body.idea) {
      ideas.push(body.idea);
    } else if (body.id && body.status) {
      ideas = ideas.map(function (i) { return i.id === body.id ? Object.assign({}, i, { status: body.status }) : i; });
    } else {
      return { statusCode: 400, body: "bad request" };
    }

    await store.setJSON("ideas", ideas);
    return {
      statusCode: 200,
      headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
      body: JSON.stringify(ideas)
    };
  } catch (e) {
    return { statusCode: 500, body: "error: " + String(e && e.message) };
  }
};
