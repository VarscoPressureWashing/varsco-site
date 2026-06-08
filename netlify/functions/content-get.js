// Returns the content idea list from Netlify Blobs (same-origin, no auth needed for read).
const { getStore } = require("@netlify/blobs");

exports.handler = async () => {
  try {
    const store = getStore("varsco-content");
    const ideas = (await store.get("ideas", { type: "json" })) || [];
    return {
      statusCode: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store", "access-control-allow-origin": "*" },
      body: JSON.stringify(ideas)
    };
  } catch (e) {
    return { statusCode: 200, headers: { "content-type": "application/json" }, body: JSON.stringify({ error: String(e && e.message), ideas: [] }) };
  }
};
