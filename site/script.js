const clubData = {
  contact: {
    status: 'Prototype only',
    organiserRole: 'Walk organiser',
    publicContact: 'To be confirmed before public launch',
    enquiryFallback: 'Add organiser email or phone here before sharing publicly.',
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
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Slatey%20Creek%20Campground%20No.%201%20Victoria',
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

window.BMBC = {
  data: clubData,
  showThanks() {
    const note = document.getElementById('form-note');
    if (!note) return;
    note.textContent =
      'Prototype only — add the organiser contact before using this as a public RSVP form.';
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderWalkCard(walk) {
  const suitability = walk.suitability
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join('');
  const bring = walk.bring.map((item) => escapeHtml(item)).join(', ');
  const practicalNotes = walk.practicalNotes
    .map((note) => `<li>${escapeHtml(note)}</li>`)
    .join('');

  return `
    <article id="walk-${escapeHtml(walk.slug)}" class="walk-card featured">
      <div class="walk-date" aria-hidden="true"><span>${escapeHtml(walk.day)}</span><small>${escapeHtml(walk.month)}</small></div>
      <div class="walk-body">
        <p class="card-kicker">First club walk • ${escapeHtml(walk.time)}</p>
        <h3>${escapeHtml(walk.title)}</h3>
        <p>${escapeHtml(walk.summary)}</p>
        <ul class="walk-meta">
          <li><strong>Date:</strong> ${escapeHtml(walk.dateLabel)}</li>
          <li><strong>Meeting point:</strong> ${escapeHtml(walk.meetingPoint)}</li>
          <li><strong>Region:</strong> ${escapeHtml(walk.region)}</li>
          <li><strong>Organiser:</strong> ${escapeHtml(walk.organiser)}</li>
          <li><strong>Status:</strong> ${escapeHtml(walk.status)} <span class="meta-note">(updated ${escapeHtml(walk.statusUpdated)})</span></li>
          <li><strong>Bring:</strong> ${bring}</li>
        </ul>
        <div class="callout soft-callout">
          <strong>Questions before the walk?</strong>
          <span>${escapeHtml(clubData.contact.publicContact)}.</span>
        </div>
        <div class="note-list" aria-label="Practical notes"><strong>Practical notes</strong><ul>${practicalNotes}</ul></div>
        <p class="safety-note">${escapeHtml(walk.safetyNotes)}</p>
        <div class="walk-actions">
          <a class="button secondary" href="${escapeHtml(walk.mapUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(walk.mapLabel)}</a>
          <a class="button primary" href="#join">Ask about this walk</a>
        </div>
        <div class="badge-row">${suitability}</div>
      </div>
    </article>
  `;
}

function hydrateWalkContent() {
  const [walk] = clubData.walks;
  const heroDate = document.querySelector('[data-walk="hero-date"]');
  const heroStatus = document.querySelector('[data-walk="hero-status"]');
  const walkList = document.getElementById('walk-list');
  const contactStatus = document.querySelector('[data-contact="status"]');
  const contactFallback = document.querySelector('[data-contact="fallback"]');

  if (heroDate) heroDate.textContent = walk.shortDate;
  if (heroStatus) heroStatus.textContent = `${walk.status} · updated ${walk.statusUpdated}`;
  if (walkList) walkList.innerHTML = renderWalkCard(walk);
  if (contactStatus) contactStatus.textContent = clubData.contact.status;
  if (contactFallback) contactFallback.textContent = clubData.contact.enquiryFallback;
}

hydrateWalkContent();

const header = document.querySelector('.site-header');
window.addEventListener(
  'scroll',
  () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 16 ? '0 12px 36px rgba(47,69,56,.12)' : 'none';
  },
  { passive: true },
);
