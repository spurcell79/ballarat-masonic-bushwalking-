window.BMBC = {
  showThanks() {
    const note = document.getElementById('form-note');
    if (!note) return;
    note.textContent = 'Thanks — enquiry captured in the prototype. We can wire this to email when ready.';
  }
};

const header = document.querySelector('.site-header');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (!header) return;
  header.style.boxShadow = y > 16 ? '0 12px 36px rgba(47,69,56,.12)' : 'none';
  lastY = y;
}, { passive: true });
