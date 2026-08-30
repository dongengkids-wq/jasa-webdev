async function loadPartial(id, path) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(path);
    if (res.ok) el.innerHTML = await res.text();
  } catch (e) {}
}

(async function() {
  await loadPartial('site-header', '/partials/header.html');
  await loadPartial('site-footer', '/partials/footer.html');
  if (window.initMobileMenu) window.initMobileMenu();
  if (window.initThemeToggle) window.initThemeToggle();
})();
