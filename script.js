function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!menuBtn || !mobileMenu) return;
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });
}
window.initMobileMenu = initMobileMenu;

// Update nomor WA & email otomatis dari CMS (hanya berlaku di halaman yang punya elemen ini)
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
