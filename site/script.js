const clubData = window.BMBC_CONTENT || { contact: {}, walks: [] };

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
