let selectedJenis = null;
let selectedBase = 0;
let selectedNamaJenis = '';

const jenisButtons = document.querySelectorAll('.jenis-btn');
const fiturChecks = document.querySelectorAll('.fitur-check');
const hasilHarga = document.getElementById('hasilHarga');
const ctaWhatsapp = document.getElementById('ctaWhatsapp');

function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID');
}

function hitungTotal() {
  if (!selectedJenis) {
    hasilHarga.textContent = 'Pilih jenis project dulu';
    return;
  }

  let total = selectedBase;
  let fiturDipilih = [];

  fiturChecks.forEach(check => {
    if (check.checked) {
      total += parseInt(check.dataset.harga);
      fiturDipilih.push(check.dataset.nama);
    }
  });

  const totalMin = total;
  const totalMax = Math.round(total * 1.3); // range +30% untuk estimasi kompleksitas

  hasilHarga.textContent = `${formatRupiah(totalMin)} - ${formatRupiah(totalMax)}`;

  // Update pesan WhatsApp otomatis
  const pesan = `Halo, saya tertarik dengan ${selectedNamaJenis}` +
    (fiturDipilih.length ? ` dengan fitur tambahan: ${fiturDipilih.join(', ')}` : '') +
    `. Estimasi yang saya lihat di website: ${formatRupiah(totalMin)} - ${formatRupiah(totalMax)}. Boleh info lebih lanjut?`;

  ctaWhatsapp.href = `https://wa.me/62812xxxxxxx?text=${encodeURIComponent(pesan)}`;
}

jenisButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    jenisButtons.forEach(b => b.classList.remove('border-accent', 'bg-accent/10'));
    btn.classList.add('border-accent', 'bg-accent/10');

    selectedJenis = btn.dataset.jenis;
    selectedBase = parseInt(btn.dataset.base);
    selectedNamaJenis = btn.querySelector('p').textContent;

    hitungTotal();
  });
});

fiturChecks.forEach(check => {
  check.addEventListener('change', hitungTotal);
});