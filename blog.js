const REPO = "dongengkids-wq/jasa-webdev";
const BRANCH = "main";
const API_URL = `https://api.github.com/repos/${REPO}/contents/content/artikel?ref=${BRANCH}`;

// Parse frontmatter sederhana (key: value) dari file markdown
function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const data = {};
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    value = value.replace(/^['"]|['"]$/g, ''); // hapus tanda kutip
    data[key] = value;
  });

  return { data, body: match[2].trim() };
}

async function fetchArticles() {
  const res = await fetch(API_URL);
  if (!res.ok) return [];
  const files = await res.json();

  const articles = await Promise.all(
    files.filter(f => f.name.endsWith('.md')).map(async (f) => {
      const raw = await (await fetch(f.download_url)).text();
      const { data } = parseFrontmatter(raw);
      return { ...data, slug: f.name.replace('.md', '') };
    })
  );

  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// ===== Render halaman daftar (blog.html) =====
async function renderList() {
  const container = document.getElementById('articleList');
  if (!container) return;

  const articles = await fetchArticles();
  if (articles.length === 0) {
    container.innerHTML = '<p class="text-muted">Belum ada artikel.</p>';
    return;
  }

  container.innerHTML = articles.map(a => `
    <a href="/artikel.html?slug=${a.slug}" class="group bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300">
      ${a.thumbnail ? `<img src="${a.thumbnail}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">` : ''}
      <div class="p-6">
        <p class="text-muted text-xs font-mono mb-2">${a.date ? new Date(a.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}</p>
        <h3 class="font-bold mb-2">${a.title || 'Tanpa judul'}</h3>
        <p class="text-muted text-sm">${a.excerpt || ''}</p>
      </div>
    </a>
  `).join('');
}

// ===== Render halaman detail (artikel.html) =====
async function renderDetail() {
  const container = document.getElementById('articleContent');
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get('slug');
  if (!slug) {
    container.innerHTML = '<p class="text-muted">Artikel tidak ditemukan.</p>';
    return;
  }

  const rawUrl = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/content/artikel/${slug}.md`;
  const res = await fetch(rawUrl);
  if (!res.ok) {
    container.innerHTML = '<p class="text-muted">Artikel tidak ditemukan.</p>';
    return;
  }

  const raw = await res.text();
  const { data, body } = parseFrontmatter(raw);

  document.getElementById('pageTitle').textContent = `${data.title || 'Artikel'} — RND Solution`;

  container.innerHTML = `
    <p class="text-accent font-mono text-xs mb-3">${data.date ? new Date(data.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}</p>
    <h1 class="text-3xl md:text-5xl font-extrabold mb-8">${data.title || ''}</h1>
    ${data.thumbnail ? `<img src="${data.thumbnail}" class="w-full rounded-2xl mb-10 border border-white/10">` : ''}
    <div class="prose prose-invert max-w-none text-muted leading-relaxed">
      ${marked.parse(body)}
    </div>
  `;
}

renderList();
renderDetail();