# Varsco — Project Progress & Handoff
_Last updated: 2026-06-02. Read this with CLAUDE.md to resume in a new chat._

## TL;DR — where we are
- The **website is fully rebuilt** (faster, local SEO, analytics, real reviews, job videos, mobile booking bar, private dashboard) — all committed to local git, **NOT deployed live yet.**
- The **Command Center dashboard** is built (`command-center.html`) and reads live numbers from a Google Sheet.
- **Higgsfield is connected** and the **AI avatar ("Soul") is trained.** We proved the content workflow.
- Next real work: **deploy the site** + **produce the 3 founder videos.**

## 🚧 THE ONE BLOCKER — getting the site live
Nothing we built is on varscoservices.com yet. Two ways to ship:
1. **Drag-and-drop (no Terminal):** drag the folder **`~/Desktop/varsco-site-deploy`** onto the existing Varsco site's **Deploys** tab at app.netlify.com. (Folder is kept fresh with every change.)
2. **Auto-deploy (better, later):** finish `gh auth login` in Terminal → push to GitHub → connect Netlify. GitHub account **VarscoPressureWashing** exists; `gh` is installed; login not done yet.

## Key assets, IDs & links
| Thing | Value |
|---|---|
| Project folder | `/Users/jacob/Desktop/Claude Code` |
| Deploy folder (drag to Netlify) | `~/Desktop/varsco-site-deploy` |
| Site files | index.html, command-center.html, logo.png, robots.txt, sitemap.xml, media/ |
| Git | ~14 commits, all local, undeployed |
| GA4 Measurement ID | `G-1STB1L37EE` (live in code; data flows after deploy) |
| Command Center | `command-center.html` · password **`Varscotx`** · noindex |
| Control-panel Google Sheet | ID `1rlXl0E00GODofPt5H2CgSATw4YF0Wuo3EoPWRaE8yHY` (in My Drive, owner admin@varscoservices.com) |
| Sheet published CSV (dashboard reads this) | `https://docs.google.com/spreadsheets/d/e/2PACX-1vTdSv0M7_2AL4YzDAvjrLLUQIDzsQ8OUbPcTkfZwWylgSEIBawAvBKP8caUY7VlRmeAkPEq-c_3Kg4w/pub?output=csv` |
| Higgsfield | Connected via MCP · Plus plan · ~976 credits |
| Higgsfield Soul ID ("Jacob") | `bd3b99ed-bf9c-4be3-b741-94b7332845ad` (status: ready) |
| Drive footage folder | "Meta Glasses Media" (id `1eenWqZt0I4vlrp9VBr3UDPwYjFMtUCUj`) — POV cleaning, office/setup clips, selfies, org-chart photo |
| Google Business Profile | **5.0 rating, 7 real reviews** · review link g.page/r/CchDOTehB3EyEBM/review |
| Jobber booking link | clienthub.getjobber.com/.../4811540/new |
| Socials | IG @varscopressurewashing · TikTok @varscopressurewashing · FB profile id 61581823295729 |

## Inbound UTM links (paste into each profile)
- Instagram bio: `https://varscoservices.com/?utm_source=instagram&utm_medium=social&utm_campaign=launch`
- TikTok bio: `https://varscoservices.com/?utm_source=tiktok&utm_medium=social&utm_campaign=launch`
- Facebook: `https://varscoservices.com/?utm_source=facebook&utm_medium=social&utm_campaign=launch`
- Google Business Profile: `https://varscoservices.com/?utm_source=google&utm_medium=gbp&utm_campaign=launch`

## Website — what was done
Recovered live source → local git. Then: optimized logo (189KB→32KB, page 270KB→71KB), LocalBusiness schema + "pressure washing San Antonio" title/H1/meta, favicon, OG tags, robots.txt + sitemap. GA4 + click tracking (booking/call/review). UTMs on all booking buttons. Google review link moved to footer. Sticky mobile Book/Call bar. SVG icons (no emoji). Trust strip (incl. **SAWS-permitted** — Jacob is SAWS-permitted, NOT insured). Featured the **7 real Google reviews** + real 5.0 aggregateRating. "See it in action" section with 2 real job videos (compressed). Honest guarantee framing.

## Content strategy (founder journey)
**Spine:** "I'm a 24-year-old using AI to build a real pressure-washing business — can it generate real leads / make my first $10k?" Build-in-public. Cleaning footage = proof; the AI-build journey = hook.
**Tone:** confident & real with a touch of hype. **Captions-only** (no voiceover yet).
**The 3 launch videos (approved):**
1. "I'm 24 — can I use AI to generate leads for my business?" (founder intro)
2. "Can AI help me make my first $10,000?" (big money hook)
3. "Here's the system I built for my business (with AI)" (Command Center reveal)
**Per-platform:** TikTok = the raw experiment/reach · Instagram = polished founder journey · Facebook = local San Antonio, ready to book.
**DO:** name the services (driveways, house wash, patios, fences). **DON'T:** claim "$0" (false — he invested in truck/trailer/LLC/AI), mention the $49 neighborhood special, or show prices. **Goal: drive to the website and close there.**

## Content production — the proven workflow
- **Identical-you = animate a REAL selfie** with Higgsfield image-to-video (kling3_0, start_image). The face IS his real face → identical. (Text-to-image Soul looks ~95% = reads as "an AI version"; only use it for scenes we have no footage of.)
- **Real office b-roll:** his Drive setup clips (e.g., POV at desk with Claude on screen, RGB keyboard). Grade brighter; don't change the scene.
- **Polish:** color/light grade + bold captions, scene untouched. AI = "professional edit, not drastic change."
- **Assembly:** Higgsfield generates the pieces; it is NOT a timeline editor. Final stitch + captions = **CapCut** (free, phone, ~15 min). Alternative = fully-AI Higgsfield multi-shot video (loses real footage + reliable captions).
- Orientation note: rotate selfie sources upright before image-to-video (a test came out sideways).
- Higgsfield costs: Soul train 25 cr · image 1 cr · 5s image-to-video ~7 cr. Always preflight with `get_cost` before generating.

## Open decisions / next steps
1. **Deploy the site** (drag `~/Desktop/varsco-site-deploy` to Netlify) — highest leverage.
2. **Build Video #1**: CapCut assembly (recipe from me) vs. fully-AI Higgsfield cut — Jacob to choose.
3. Paste the 4 UTM links into the social profiles.
4. GBP: build NAP citations (Yelp/Nextdoor/BBB) so "Velasco" stops outranking; keep posting + collecting reviews.
5. Optional later: voice clone (ElevenLabs) for talking videos; auto-fill website stats into the dashboard from GA4.
