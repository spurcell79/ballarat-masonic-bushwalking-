# Launch Readiness Notes

This prototype is strong enough for a founder demo, but it should not be treated as a public RSVP site until the operational gaps below are closed.

## Current status

| Area | Status | Notes |
| --- | --- | --- |
| Visual identity | Demo-ready | Warm Ballarat bushwalking feel with restrained masonic cues. |
| First walk date/time/place | Partly verified | Uses only the supplied details: Saturday 9 May 2026, 10:00 AM, Slatey Creek Campground No. 1. |
| Route length and pace | Needs confirmation | The site avoids claiming distance, duration or difficulty. |
| Organiser/contact | Needs confirmation | The site names the organiser role but not a person, email or phone. |
| RSVP/enquiry flow | Prototype only | The form is intentionally labelled as a non-public prototype. |
| Weather/cancellation process | Needs confirmation | The site prompts for a real status-update owner and timing. |
| Dog/family guidance | Careful placeholder | Dogs and families are welcome where suitable; per-walk confirmation is still needed. |

## Must-do before public launch

1. Confirm the organiser name or public-facing role.
2. Add a real contact method and decide where enquiries go.
3. Confirm whether people can simply turn up or need to RSVP.
4. Confirm route length, approximate duration, terrain and expected pace.
5. Confirm any parking, toilets, access or phone-coverage notes that are safe to publish.
6. Decide who can cancel/postpone and when the status should be updated.
7. Remove or rewrite prototype-only copy once the contact flow is real.

## Safe wording rules

- Do not claim the walk is easy, short, accessible, shaded or suitable for all ages unless the organiser confirms it.
- Phrase dog access per walk, not as a blanket club promise.
- Keep safety wording practical and caring rather than heavy legal language.
- Treat unverified details as organiser-confirmation placeholders.

## Recommended next build step

Keep the static site for now. Once the organiser supplies real details, update `site/script.js` and the fallback card in `site/index.html`, then replace the prototype form with either:

- a visible `mailto:` link,
- a small form service endpoint, or
- a plain phone/email contact block.

Avoid adding a CMS or member portal until the club has a repeatable walk-publishing workflow.
