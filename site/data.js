// Ballarat Masonic Bushwalking Club prototype content.
//
// Keep this file factual and organiser-confirmed. If a detail is not verified,
// use clear placeholder language instead of inventing route, access or safety facts.
// The structure is deliberately plain JavaScript so the static prototype can later
// move to JSON, a CMS, SQLite or a framework without rewriting the page logic.

window.BMBC_CONTENT = {
  contact: {
    status: 'Prototype only',
    organiserRole: 'Walk organiser',
    publicContact: 'To be confirmed before public launch',
    enquiryFallback: 'Add organiser email or phone here before sharing publicly.',
    rsvpGuidance:
      'Before launch, confirm whether people can turn up on the day or should RSVP first.',
  },
  walks: [
    {
      title: 'Inaugural Walk — Slatey Creek Campground',
      slug: 'slatey-creek-campground-first-walk',
      summary:
        'A friendly first outing from Slatey Creek Campground No. 1 for Freemasons, family, friends and well-behaved dogs.',
      dateLabel: 'Saturday 9 May 2026',
      shortDate: 'Sat 9 May 2026',
      day: '09',
      month: 'May',
      time: '10:00 AM',
      status: 'Scheduled',
      statusUpdated: '8 May 2026',
      location: 'Slatey Creek Campground No. 1',
      region: 'Ballarat region, Victoria',
      meetingPoint: 'Slatey Creek Campground No. 1',
      organiser: 'Walk organiser — name/contact to confirm',
      mapLabel: 'Open meeting point in Google Maps',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=Slatey%20Creek%20Campground%20No.%201%20Victoria',
      suitability: ['Family friendly', 'Dogs welcome where permitted', 'Relaxed first walk'],
      bring: ['Water', 'Comfortable walking shoes', 'Weather-suitable clothing', 'Lead for dogs'],
      practicalNotes: [
        'Arrive a little early so the group can depart at 10:00 AM.',
        'Route length, pace and any parking/toilet notes should be confirmed by the organiser before public launch.',
        'Dogs should be on lead or under close control, and must follow local rules and conditions.',
      ],
      safetyNotes:
        'Choose walks suitable for your own ability. Children remain under guardian supervision. Check weather and local conditions before heading out.',
    },
  ],
};
