// script.js - logic JS (nav toggle, animasi scroll, dll)
// Toggle menu mobile
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    form.innerHTML = '<p class="text-accent text-center font-semibold">✅ Pesan terkirim! Kami akan segera menghubungi kamu.</p>';
  } else {
    alert('Terjadi kesalahan, coba lagi atau hubungi lewat WhatsApp.');
  }

  return false;
}
// Update nomor WA & email otomatis dari CMS
const REPO_CONTENT = "dongengkids-wq/jasa-webdev";
fetch(`https://raw.githubusercontent.com/${REPO_CONTENT}/main/content/kontak.json?t=${Date.now()}`)
  .then(res => res.ok ? res.json() : null)
  .then(kontak => {
    if (!kontak) return;
    document.querySelectorAll('.js-wa-link').forEach(el => {
      el.href = `https://wa.me/${kontak.whatsapp}`;
    });
    document.querySelectorAll('.js-email-link').forEach(el => {
      el.href = `mailto:${kontak.email}`;
    });
  });