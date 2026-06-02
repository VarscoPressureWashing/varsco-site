# Varsco — Project Progress & Handoff
_Last updated: 2026-06-02 (evening). Read this with CLAUDE.md to resume in a new chat._

## TL;DR — where we are
- **Website**: fully rebuilt + a **cinematic "Phase 1" pass** (AI hero image, AI service images, motion). All committed to local git, **NOT deployed live yet.**
- **Command Center dashboard** (`command-center.html`): built, live activity board, reads numbers from a Google Sheet.
- **Higgsfield**: connected via MCP; AI avatar ("Soul") trained; content workflow proven.
- **Content**: 3 founder videos scripted; a **CapCut web-agent** was mid-run assembling Video #1.
- Next: nail the website's cinematic *direction* (see warning below), produce the videos, and **deploy.**

## ⚠️ READ THIS FIRST — open creative question on the website
Jacob's reference for the look is the **@weblift_agency** Instagram reel: premium, *scroll-based motion, AI-generated visuals, cinematic detail.* He wants that vibe. But two specific attempts were **rejected**, so DON'T repeat them blindly:
- ❌ **Glossy AI avatar** of him → "looks like an AI version of me." He wants **realism** (real footage, or identical-you made by *animating a real selfie*, not text-to-image).
- ❌ **Horizontal scroll** service selector ("scroll through, not down") → "No, not what I am looking for."
**Action for next session:** before another big website build, get a *clearer, specific* reference from Jacob (exact section/interaction he likes). The cinematic *assets* are good; the *interaction model* is unsettled. To revert the horizontal service rail back to the vertical grid, it lived at commit `6e52d6a` (horizontal = `32c02aa`).

## 🚧 THE BLOCKER — getting the site live
Nothing is on varscoservices.com yet. Two ways:
1. **Drag-and-drop (no Terminal):** drag `~/Desktop/varsco-site-deploy` onto the existing Varsco site's **Deploys** tab at app.netlify.com.
2. **Auto-deploy (better, later):** finish `gh auth login` in Terminal → push to GitHub (account **VarscoPressureWashing**) → connect Netlify.

## Key assets, IDs & links
| Thing | Value |
|---|---|
| Project folder | `/Users/jacob/Desktop/Claude Code` |
| Deploy folder | `~/Desktop/varsco-site-deploy` (kept fresh) |
| Site files | index.html, command-center.html, logo.png, robots.txt, sitemap.xml, **media/** |
| Website media | hero.jpg, service-{roof,driveway,house,solar,fence,gutters}.jpg, area.jpg, clean-driveway-1/2.mp4+jpg |
| GA4 Measurement ID | `G-1STB1L37EE` (live in code; data after deploy) |
| Command Center | `command-center.html` · password **`Varscotx`** · noindex |
| Control-panel Google Sheet | ID `1rlXl0E00GODofPt5H2CgSATw4YF0Wuo3EoPWRaE8yHY` |
| Sheet published CSV (dashboard reads this) | `https://docs.google.com/spreadsheets/d/e/2PACX-1vTdSv0M7_2AL4YzDAvjrLLUQIDzsQ8OUbPcTkfZwWylgSEIBawAvBKP8caUY7VlRmeAkPEq-c_3Kg4w/pub?output=csv` |
| Higgsfield | MCP connected · Plus plan · ~969 credits |
| Higgsfield Soul ID ("Jacob") | `bd3b99ed-bf9c-4be3-b741-94b7332845ad` (ready) |
| Drive footage folder | "Meta Glasses Media" (id `1eenWqZt0I4vlrp9VBr3UDPwYjFMtUCUj`) — cleaning clips, office/setup clips, selfies, org-chart photo |
| Google Business Profile | **5.0 rating, 7 real reviews** · review link g.page/r/CchDOTehB3EyEBM/review |
| Jobber booking link | clienthub.getjobber.com/.../4811540/new |
| Socials | IG @varscopressurewashing · TikTok @varscopressurewashing · FB id 61581823295729 |

## Website — what's been done
Recovered live source → git. SEO + speed (logo 189KB→32KB), LocalBusiness schema, "pressure washing San Antonio" title/H1/meta, favicon, OG, robots+sitemap, GA4 + click tracking, UTMs on all booking buttons, footer review link, **sticky mobile Book/Call bar**, SVG icons, trust strip (incl. **SAWS-permitted** — Jacob is SAWS-permitted, NOT insured), featured the **7 real Google reviews** + real 5.0 schema, "See it in action" video section. **Phase 1 cinematic:** full-bleed AI hero (media/hero.jpg) + parallax + staggered entrance; **"Pick your service"** selector with 6 AI service images (each routes to Jobber with `utm_medium=svc_<service>`); replaced fake before/after slider + blank area placeholder (media/area.jpg); elevated scroll reveals. **Prices were removed** from the site (services route to booking; close at the quote). All AI images are **swap-ready** for real photos.

## Content strategy (founder journey)
**Spine:** "24-year-old using AI to build a real pressure-washing business — can it generate real leads / make my first $10k?" Cleaning footage = proof; the AI-build = hook.
**Tone:** confident & real, a touch of hype. **Captions-only** (no voiceover yet).
**3 launch videos (approved):** 1) "I'm 24 — can I use AI to generate leads?" 2) "Can AI help me make my first $10,000?" 3) "Here's the system I built (with AI)."
**Platforms:** TikTok = raw experiment/reach · Instagram = polished journey · Facebook = local San Antonio, ready to book.
**DO:** name services (driveways, house wash, patios, fences, roof, gutters, solar). **DON'T:** claim "$0" (false — he invested in truck/trailer/LLC/AI), mention the $49 neighborhood special, or show prices. **Goal: drive to the site, close there.**

## Content production — proven workflow & status
- **Identical-you = animate a REAL selfie** via Higgsfield image-to-video (model `kling3_0`, role start_image). Text-to-image Soul looks ~95% ("an AI version") — only for scenes with no footage.
- **AI stock/cinematic images** = `generate_image` model `nano_banana_2`, cinematic prompts (~1.5 cr each). Used for hero + 6 services + area.
- **Real office b-roll** = his Drive setup clips (POV at desk, Claude on screen). Grade brighter; don't change the scene.
- **Assembly:** Higgsfield generates pieces; it is NOT a timeline editor. Options: **CapCut** (free, manual — a web-agent was mid-test assembling Video #1), **FFmpeg** (free, local, I can drive it — needs install; great for stitch/grade, weak on fancy captions → hybrid with CapCut captions), **Remotion** (free for him, best captions, needs Node), **Shotstack** (paid — skip pre-revenue).
- **Video #1 test assets:** `~/Desktop/varsco-video1/` (01-office-desk.mov, 2 founder selfies, CAPTIONS.txt). Caption script: "I'm 24." / "Let's see if AI can get my business real customers." / "Real pressure washing — driveways, houses, patios." / "I do the cleaning." / "AI runs the marketing." / "Watch if it actually works." / "Everything's on my site."
- Orientation gotcha: rotate selfie sources upright before image-to-video. Always preflight Higgsfield cost with `get_cost`.

## Inbound UTM links (paste into each profile)
- IG: `https://varscoservices.com/?utm_source=instagram&utm_medium=social&utm_campaign=launch`
- TikTok: `https://varscoservices.com/?utm_source=tiktok&utm_medium=social&utm_campaign=launch`
- Facebook: `https://varscoservices.com/?utm_source=facebook&utm_medium=social&utm_campaign=launch`
- GBP: `https://varscoservices.com/?utm_source=google&utm_medium=gbp&utm_campaign=launch`

## Open decisions / next steps
1. **Clarify the website cinematic direction** with Jacob (get a specific reference) — horizontal scroll was rejected; don't rebuild big until the vision is clear.
2. **Deploy the site** (drag `~/Desktop/varsco-site-deploy` to Netlify) — highest leverage.
3. **Finish Video #1** — see how the CapCut web-agent test turned out; decide CapCut vs FFmpeg/Remotion for the pipeline.
4. Paste the 4 UTM links into the social profiles.
5. GBP: build NAP citations (Yelp/Nextdoor/BBB) so "Velasco" stops outranking; keep posting + collecting reviews.
6. Later: voice clone (ElevenLabs) for talking videos; auto-fill website stats into the dashboard from GA4.
