// Server-side proxy for the Command Center's Google Sheet.
// Fetches the published CSV (following Google's redirect server-side) and
// returns it same-origin, so the browser never talks to Google directly
// (no CORS, no cross-domain redirect, no extension blocking).
exports.handler = async () => {
  const SHEET = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdSv0M7_2AL4YzDAvjrLLUQIDzsQ8OUbPcTkfZwWylgSEIBawAvBKP8caUY7VlRmeAkPEq-c_3Kg4w/pub?output=csv";
  try {
    const r = await fetch(SHEET, { redirect: "follow" });
    const body = await r.text();
    return {
      statusCode: 200,
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "cache-control": "public, max-age=120",
        "access-control-allow-origin": "*"
      },
      body
    };
  } catch (e) {
    return { statusCode: 502, body: "sheet fetch failed: " + (e && e.message) };
  }
};
