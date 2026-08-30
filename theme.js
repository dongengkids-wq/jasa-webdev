(function() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');

  function updateIcon() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.textContent = root.classList.contains('light') ? '🌙' : '☀️';
  }

  document.addEventListener('DOMContentLoaded', function() {
    updateIcon();
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
      updateIcon();
    });
  });
})();
