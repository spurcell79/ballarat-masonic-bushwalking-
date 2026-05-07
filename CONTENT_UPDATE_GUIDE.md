# Content Update Guide

Use this guide when the organiser supplies real walk details. Keep the site honest: publish confirmed facts, and leave anything uncertain as a clear placeholder.

## Where to edit

Most public walk content lives in `site/data.js`.

- Update `window.BMBC_CONTENT.contact` when a real organiser contact or RSVP process exists.
- Add or edit entries in `window.BMBC_CONTENT.walks` for each walk.
- Keep the fallback card in `site/index.html` broadly aligned with the first walk so the page still makes sense if JavaScript fails.
- Update `LAUNCH_READINESS.md` when a launch blocker is resolved.

## Minimum details for a public walk

Before a walk goes public, try to confirm:

1. Date and start time.
2. Meeting point and region.
3. Organiser name, role or contact channel.
4. RSVP expectation: required, preferred or turn-up welcome.
5. Status update owner and timing for weather or cancellation notices.
6. Suitability notes: family, dogs, terrain, pace, approximate length and duration.
7. Practical notes: water, footwear, parking, toilets, phone coverage or access notes if known.

If any detail is unknown, say so plainly rather than filling the gap.

## Status wording

Use simple statuses visitors understand:

- `Scheduled` — published and expected to proceed.
- `Details being confirmed` — date/place may be known, but operational details are not final.
- `Postponed` — not happening at the listed time; add next update timing if known.
- `Cancelled` — no longer proceeding.
- `Completed` — move to a past-walk section when one exists.

Always update `statusUpdated` when status or important details change.

## Safe copy rules

- Do not call a walk easy, short, accessible or suitable for all ages unless confirmed.
- Phrase dog access per walk; rules vary by trail and conditions.
- Avoid heavy legal wording, but keep responsibility clear: walkers choose routes suitable for their ability, children remain with guardians, and dogs remain under control.
- Keep masonic references warm and understated so friends and family feel included.

## Quick verification

From `site/`:

```bash
node --check data.js
node --check script.js
python3 -m http.server 4173
```

Then inspect the page on a phone-sized viewport and desktop width.
