(function() {
  const REPO = "dongengkids-wq/jasa-webdev";
  const BRANCH = "main";

  function createButton(number) {
    const btn = document.createElement('a');
    btn.href = `https://wa.me/${number}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang jasa pembuatan website/aplikasi.')}`;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.setAttribute('aria-label', 'Chat via WhatsApp');
    btn.className = 'fixed bottom-6 right-6 z-50 bg-accent text-bg w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform';
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.85 14.16c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.9-4.28-5.05-4.48-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.06 1.14 1.02 2.1 1.33 2.4 1.48.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.13.07.75-.18 1.45z"/></svg>`;
    document.body.appendChild(btn);
  }

  fetch(`https://raw.githubusercontent.com/${REPO}/${BRANCH}/content/kontak.json?t=${Date.now()}`)
    .then(res => res.ok ? res.json() : null)
    .then(kontak => {
      const number = kontak && kontak.whatsapp ? kontak.whatsapp : '62812xxxxxxx';
      createButton(number);
    })
    .catch(() => createButton('62812xxxxxxx'));
})();