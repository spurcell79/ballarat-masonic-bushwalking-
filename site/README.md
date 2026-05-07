# Ballarat Masonic Bushwalking Club Prototype

A polished static founder-demo prototype for the inaugural Ballarat Masonic Bushwalking Club website.

The prototype is intentionally honest about what is verified and what still needs organiser confirmation. It should feel close to launch while avoiding fake contact paths or unverified walk claims.

## View locally

From this directory:

```bash
python3 -m http.server 4173
```

Then open: http://127.0.0.1:4173

## Included

- Mobile-first homepage
- First walk feature: Saturday 9 May 2026, 10:00 AM, Slatey Creek Campground No. 1
- About section with subtle masonic roots and inclusive family/friend language
- Data-driven walk card rendered from `site/script.js`
- FAQ and safety notes
- Prototype-only enquiry form with clear launch placeholder messaging
- Visual direction: Victorian bushland, eucalyptus, sandstone, subtle brass, understated masonic geometry

## Content model

Walk details currently live in `clubData.walks` inside `site/script.js`. This keeps the site static while giving the next build a clean path toward JSON, CMS, SQLite or a framework.

Current walk fields:

- `title`
- `slug`
- `summary`
- `dateLabel`
- `shortDate`
- `day`
- `month`
- `time`
- `status`
- `statusUpdated`
- `location`
- `region`
- `meetingPoint`
- `organiser`
- `mapUrl`
- `suitability`
- `bring`
- `practicalNotes`
- `safetyNotes`

## Before public launch

Do not share this as a live RSVP page until these are resolved:

1. Add the organiser name and real contact method.
2. Decide whether the form should submit by email, form service, or a simple visible contact link.
3. Confirm the route length, expected pace and any parking/toilet/access notes.
4. Confirm cancellation authority and timing, for example who updates the status if weather changes.
5. Replace any remaining prototype-only wording if the site is going public.
6. Review all safety wording with the organiser and keep it practical, not overclaimed.

## Verification

Useful quick checks after editing:

```bash
node --check script.js
python3 -m http.server 4173
```

Then inspect the page on desktop and mobile widths.
