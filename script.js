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