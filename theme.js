(function() {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  }
})();

function initThemeToggle() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  function updateIcon() {
    if (!btn) return;
    btn.textContent = root.classList.contains('light') ? '🌙' : '☀️';
  }
  updateIcon();

  if (!btn) return;
  btn.addEventListener('click', function() {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    updateIcon();
  });
}
window.initThemeToggle = initThemeToggle;
