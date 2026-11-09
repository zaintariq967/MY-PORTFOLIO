(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CFG = window.PORTFOLIO_CONFIG || {};
  const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const paras = (t) => String(t || '').split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
  const pair = (l) => { const [a, ...b] = String(l).split('|'); return [a.trim(), b.join('|').trim()]; };
  const arr = (v) => (Array.isArray(v) ? v : []);
  const safeUrl = (u) => (/^(https?:\/\/|\/|\.\/|assets\/|mailto:|tel:)/i.test(u || '') ? u : '#');
  const isHttp = (u) => /^https?:\/\//i.test(u || '');

  let D, state = { cat: 'All', q: '', list: [] };

  /* ---------- data: everything lives in js/data.js ---------- */
  async function loadData() { return window.PortfolioData || { personal: {} }; }

  /* ---------- generated project covers ---------- */
  const hue = (s) => { let x = 0; for (const c of s) x = (x * 31 + c.charCodeAt(0)) % 360; return x; };
  const HUES = { 'Deep Learning': 275, 'Computer Vision': 205, 'GenAI & NLP': 268, 'Machine Learning': 172, 'Embedded & IoT': 28, Networking: 220 };
  function cover(p) {
    if (p.image) return h('img', { src: p.image, alt: p.title, loading: 'lazy' });
    const hu = HUES[p.category] ?? hue(p.category || p.title); const seed = hue(p.title);
    const a = `hsl(${hu} 90% 66%)`, b = `hsl(${(hu + 60) % 360} 85% 62%)`; let art = ''; const c = p.category;
    if (c === 'Computer Vision') art = `<g fill="none" stroke="${a}" stroke-width="3"><path d="M120 100v-30h30M480 100v-30h-30M120 230v30h30M480 230v30h-30"/><rect x="215" y="120" width="170" height="110" rx="6" stroke-dasharray="8 6" stroke="${b}"/><circle cx="300" cy="175" r="26"/><circle cx="300" cy="175" r="8" fill="${a}"/></g><text x="215" y="112" fill="${b}" font-family="monospace" font-size="14">object 0.97</text>`;
    else if (c === 'GenAI & NLP') art = `<g fill="none" stroke="${a}" stroke-width="3"><rect x="150" y="90" width="190" height="70" rx="18"/><rect x="260" y="190" width="190" height="70" rx="18" stroke="${b}"/></g><g fill="${a}"><circle cx="200" cy="125" r="6"/><circle cx="230" cy="125" r="6"/><circle cx="260" cy="125" r="6"/></g><g fill="${b}"><rect x="290" y="218" width="120" height="6" rx="3"/><rect x="290" y="236" width="80" height="6" rx="3"/></g>`;
    else if (c === 'Embedded & IoT') art = `<g fill="none" stroke="${a}" stroke-width="3"><rect x="235" y="115" width="130" height="110" rx="10"/><path d="M235 140h-80v-40M235 200h-100M365 140h70v-50M365 200h90v40M300 115V70M300 225v45"/></g><g fill="${b}"><circle cx="155" cy="100" r="8"/><circle cx="135" cy="200" r="8"/><circle cx="435" cy="90" r="8"/><circle cx="455" cy="240" r="8"/><circle cx="300" cy="70" r="8"/><circle cx="300" cy="270" r="8"/></g>`;
    else if (c === 'Networking') art = `<g fill="none" stroke="${a}" stroke-width="3"><path d="M300 90L170 230M300 90L430 230M170 230h260M300 90v90M300 180L170 230M300 180l130 50"/></g><g fill="${b}"><circle cx="300" cy="90" r="16"/><circle cx="170" cy="230" r="16"/><circle cx="430" cy="230" r="16"/></g><circle cx="300" cy="180" r="12" fill="${a}"/>`;
    else { // neural net (Machine Learning / default)
      const cols = [140, 260, 380, 480], rows = [[110, 175, 240], [90, 140, 200, 250], [100, 170, 240], [150, 200]]; let s = '';
      cols.forEach((x, i) => rows[i].forEach((y, j) => { if (i < 3) rows[i + 1].forEach((y2) => (s += `<line x1="${x}" y1="${y}" x2="${cols[i + 1]}" y2="${y2}" stroke="${a}" stroke-opacity=".3" stroke-width="2"/>`)); s += `<circle cx="${x}" cy="${y}" r="12" fill="${j % 2 ? a : b}"/>`; })); art = s;
    }
    const dots = Array.from({ length: 60 }, (_, i) => `<circle cx="${(i % 12) * 52 + 20}" cy="${Math.floor(i / 12) * 62 + 20}" r="1.6" fill="#fff" fill-opacity=".12"/>`).join('');
    const w = h('div', { style: { width: '100%', height: '100%' } });
    w.innerHTML = `<svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.category} illustration"><defs><radialGradient id="g${seed}" cx="${30 + (seed % 40)}%" cy="30%" r="90%"><stop offset="0" stop-color="hsl(${hu} 60% 24%)"/><stop offset="1" stop-color="hsl(${(hu + 20) % 360} 45% 7%)"/></radialGradient></defs><rect width="600" height="340" fill="url(#g${seed})"/>${dots}${art}</svg>`;
    return w.firstChild;
  }

  /* ---------- helpers ---------- */
  const hidden = () => new Set(arr(D.hidden).map((s) => String(s).toLowerCase()));
  const secHead = (eyebrow, title, lead) => h('div.sec-head.reveal', h('div', h('div.eyebrow', eyebrow), h('h2', title), lead && h('p.lead', lead)));
  const P = () => D.personal;
  const socials = () => { const p = P(); return [['github', p.github, 'GitHub'], ['linkedin', p.linkedin, 'LinkedIn'], ['ext', p.upwork, 'Upwork'], ['ext', p.fiverr, 'Fiverr'], ['kaggle', p.kaggle, 'Kaggle'], ['huggingface', p.huggingface, 'Hugging Face'], ['mail', p.email && 'mailto:' + p.email, 'Email']]
    .filter((x) => x[1]).map(([i, u, t]) => h('a.icon-btn', { href: safeUrl(u), target: isHttp(u) ? '_blank' : null, rel: 'noopener', 'aria-label': t, title: t }, icon(ICONS[i] ? i : 'ext'))); };
  const metricsOf = (p) => arr(p.metrics).map(pair).filter((m) => m[1]);

  /* ---------- nav ---------- */
  function nav() {
    const items = [['services', 'Services'], ['projects', 'Work'], ['process', 'Process'], ['skills', 'Skills'], ['about', 'About'], ['faq', 'FAQ'], ['contact', 'Contact']].filter(([id]) => document.getElementById(id));
    const links = h('nav.links', items.map(([id, t]) => h('a', { href: '#' + id, onclick: () => links.classList.remove('open') }, t)),
      h('a', { href: '#', onclick: (e) => { e.preventDefault(); links.classList.remove('open'); openResumeModal(); } }, 'Download CVs'));
    const theme = h('button.icon-btn', { 'aria-label': 'Toggle theme', onclick: () => { const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = t; try { localStorage.setItem('theme', t); } catch (e) {} draw(); } });
    const draw = () => theme.replaceChildren(icon(document.documentElement.dataset.theme === 'dark' ? 'sun' : 'moon')); draw();
    const initials = P().name.split(' ').filter(Boolean);
    return h('header.nav', h('div.wrap',
      h('a.logo', { href: '#top', 'aria-label': 'Home' }, h('i', initials[0][0] + initials[initials.length - 1][0]), h('span.hide-m', P().name)),
      links,
      h('div.nav-r',
        h('button.mini-cv.hide-m', { onclick: openResumeModal, title: 'View & Download CVs', 'aria-label': 'Download CVs' }, icon('file'), 'CVs'),
        h('button.icon-btn.hide-m', { 'aria-label': 'Search', title: 'Search (Ctrl+K)', onclick: openPalette }, icon('search')), theme,
        h('a.btn.primary.hide-m', { href: '#contact' }, 'Hire me'),
        h('button.icon-btn.burger', { 'aria-label': 'Menu', onclick: () => links.classList.toggle('open') }, icon('menu')))));
  }

  /* ---------- hero ---------- */
  function hero() {
    const p = P(); const roleEl = h('div.role'); typer(roleEl, arr(p.roles).length ? p.roles : [p.title]);
    const nameParts = p.name.split(' '); const cut = Math.ceil(nameParts.length / 2);
    const cv = h('canvas#net', { 'aria-hidden': 'true' });
    const panel = h('div.neural', cv,
      h('div.chips-f', arr(p.heroChips).slice(0, 4).map((c, i) => h('div.float.f' + i, h('i'), c))),
      h('div.nl-label.mono', 'inference · live'));
    return h('section.hero#top', h('div.wrap.hero-grid',
      h('div',
        h('div.avail' + (p.available ? '' : '.off'), h('b'), p.available ? p.availableText || 'Available' : 'Currently booked'),
        h('h1', h('span', nameParts.slice(0, cut).join(' ')), h('span.grad', nameParts.slice(cut).join(' '))),
        roleEl,
        h('p.tag', p.tagline),
        h('div.kw', arr(D.heroKeywords).map((k) => h('span.chip', k))),
        h('div.cta',
          h('a.btn.primary', { href: '#contact' }, 'Hire me for a project', icon('arrow')),
          h('a.btn', { href: '#projects' }, 'See my work'),
          h('button.btn.cv-trigger-btn', { onclick: openResumeModal, 'aria-label': 'Download CV' }, icon('download'), 'Download CV', h('span.mono', '▾')),
          CFG.BOOKING_URL && h('a.btn.ghost', { href: safeUrl(CFG.BOOKING_URL), target: '_blank', rel: 'noopener' }, icon('clock'), 'Book a call')),
        h('div.trust', ['Source code is yours', 'NDA on request', (D.freelance || {}).responseTime].filter(Boolean).map((t) => h('span', icon('shield'), t))),
        h('div.socials', socials())),
      panel));
  }
  function typer(el, words) {
    if (reduce) { el.textContent = words[0]; return; }
    let w = 0, i = 0, del = false;
    const tick = () => { const word = words[w % words.length]; el.firstChild ? (el.firstChild.nodeValue = word.slice(0, i)) : el.append(word.slice(0, i)); let t = del ? 26 : 58;
      if (!del && i === word.length) { del = true; t = 1700; } else if (del && i === 0) { del = false; w++; t = 320; } i += del ? -1 : 1; setTimeout(tick, t); };
    tick();
  }
  function neuralNet() {
    const cv = $('#net'); if (!cv) return; const ctx = cv.getContext('2d'); const layers = [4, 6, 7, 6, 3];
    let W, H, nodes = [], edges = [], sig = [], mx = -1, my = -1;
    const resize = () => {
      const r = devicePixelRatio || 1, b = cv.parentElement.getBoundingClientRect(); W = b.width; H = b.height; cv.width = W * r; cv.height = H * r; ctx.setTransform(r, 0, 0, r, 0, 0);
      nodes = []; layers.forEach((n, li) => { for (let i = 0; i < n; i++) nodes.push({ l: li, x: W * (.1 + li * .8 / (layers.length - 1)), y: H * (.14 + (i + .5) * .72 / n) + (li % 2 ? 0 : 6), a: Math.random() * 6 }); });
      edges = []; nodes.forEach((a, i) => nodes.forEach((b, j) => { if (b.l === a.l + 1) edges.push([i, j]); }));
    };
    resize(); addEventListener('resize', resize);
    cv.parentElement.addEventListener('pointermove', (e) => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
    cv.parentElement.addEventListener('pointerleave', () => { mx = my = -1; });
    const css = () => getComputedStyle(document.documentElement); let vis = true;
    new IntersectionObserver((es) => (vis = es[0].isIntersecting)).observe(cv);
    (function loop(t) {
      if (!vis || document.hidden) return requestAnimationFrame(loop);
      ctx.clearRect(0, 0, W, H); const c1 = css().getPropertyValue('--c1').trim() || '#60a5fa', c2 = css().getPropertyValue('--c2').trim() || '#a78bfa';
      if (!reduce && Math.random() < .12) { const e = edges[(Math.random() * edges.length) | 0]; sig.push({ e, p: 0 }); }
      ctx.lineWidth = 1; edges.forEach(([i, j]) => { const a = nodes[i], b = nodes[j]; ctx.strokeStyle = 'rgba(130,160,255,.13)'; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); });
      sig = sig.filter((s) => (s.p += .016) < 1);
      sig.forEach((s) => { const a = nodes[s.e[0]], b = nodes[s.e[1]]; const x = a.x + (b.x - a.x) * s.p, y = a.y + (b.y - a.y) * s.p; const g = ctx.createRadialGradient(x, y, 0, x, y, 12); g.addColorStop(0, c1); g.addColorStop(1, 'transparent'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 12, 0, 7); ctx.fill(); });
      nodes.forEach((n) => { const d = mx < 0 ? 999 : Math.hypot(n.x - mx, n.y - my); const k = Math.max(0, 1 - d / 120); const pulse = reduce ? 0 : Math.sin(t / 700 + n.a) * .5 + .5;
        ctx.fillStyle = k > .05 ? c2 : c1; ctx.globalAlpha = .55 + pulse * .25 + k * .2; ctx.beginPath(); ctx.arc(n.x, n.y, 4.2 + k * 4 + pulse, 0, 7); ctx.fill(); ctx.globalAlpha = 1; });
      requestAnimationFrame(loop);
    })(0);
  }

  /* ---------- sections ---------- */
  function marquee() {
    const set = new Set(); arr(D.projects).forEach((p) => arr(p.tech).forEach((t) => set.add(t))); const list = [...set].slice(0, 34); if (list.length < 5) return null;
    return h('div.marquee', { 'aria-hidden': 'true' }, h('div.track', list.map((t) => h('span', t)), list.map((t) => h('span', t))));
  }

  function about() {
    const p = P(); const count = arr(D.projects).length;
    const stats = arr(p.stats).map(pair).map(([v, l], i) => { v = v.replace('{projects}', count); return h('div.stat.card.reveal', { style: { '--d': i * .07 + 's' } }, h('b', { 'data-count': v }, v), h('small', l)); });
    const flow = [['Data & EDA', 'Clean, label, explore'], ['Model & Train', 'Baselines → transfer learning'], ['Evaluate', 'AUC · F1 · R² · error analysis'], ['Deploy', 'APIs, apps & edge devices']];
    return h('section#about', h('div.wrap',
      h('div.about-grid',
        h('div', h('div.eyebrow.reveal', 'About'), h('h2.reveal', 'From raw data to deployed intelligence.'),
          h('div.about-text.reveal', { style: { marginTop: '24px' } }, paras(p.about).map((t) => h('p', t))),
          h('div.flow.reveal', flow.map(([t, s], i) => h('div.step', h('em.mono', '0' + (i + 1)), h('b', t), h('small', s))))),
        h('div.about-side',
          p.avatar && h('div.photo.reveal', h('img', { src: p.avatar, alt: p.name, loading: 'lazy' }), h('span.tagline.mono', p.location || '')),
          h('div.stats', stats),
          arr(p.focus).length > 0 && h('div.card.focus.reveal', h('h4', 'Currently focused on'), h('ul', arr(p.focus).map((f) => h('li', f))))))));
  }

  function services() {
    if (!arr(D.services).length) return null;
    const intro = D.servicesIntro || {};
    return h('section#services', h('div.wrap', secHead(intro.eyebrow || 'Services', intro.title || 'Freelance Services & Solutions', intro.lead || 'Practical, reliable freelance engineering for your AI, machine learning, and software tasks. From idea and data to clean, documented code.'),
      h('div.svc-grid', D.services.map((s, i) => { const c = h('article.svc.card.reveal', { style: { '--d': (i % 2) * .08 + 's' } }, h('div.ico', icon(s.icon)), h('h3', s.title), h('p', s.description), arr(s.points).length > 0 && h('ul', s.points.map((x) => h('li', x))));
        c.addEventListener('pointermove', (e) => { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px'); }); return c; }))));
  }

  function projects() {
    const all = arr(D.projects).filter((p) => p.visible !== false); if (!all.length) return null;
    const cats = ['All', ...new Set(all.map((p) => p.category))];
    const grid = h('div.proj-grid'), filters = h('div.filters', { role: 'tablist' });
    const search = h('input', { type: 'search', placeholder: 'Search projects, tech…', 'aria-label': 'Search projects', oninput: (e) => { state.q = e.target.value.toLowerCase(); draw(); } });
    function draw() {
      filters.replaceChildren(...cats.map((c) => h('button' + (state.cat === c ? '.on' : ''), { role: 'tab', 'aria-selected': state.cat === c, onclick: () => { state.cat = c; draw(); } }, c, h('sup', String(c === 'All' ? all.length : all.filter((p) => p.category === c).length)))));
      let list = all.filter((p) => (state.cat === 'All' || p.category === state.cat) && (!state.q || [p.title, p.summary, p.category, arr(p.tech).join(' ')].join(' ').toLowerCase().includes(state.q)));
      const wide = state.cat === 'All' && !state.q;
      if (wide) list = [...list.filter((p) => p.featured), ...list.filter((p) => !p.featured)];
      state.list = list;
      grid.replaceChildren(...(list.length ? list.map((p, i) => card(p, i, false)) : [h('div.empty', { style: { gridColumn: '1/-1' } }, 'No projects match your search.')]));
      observe();
    }
    const sec = h('section#projects', h('div.wrap', secHead('Case studies', 'Work I can show you', `${all.length} projects across AI, vision, embedded systems and networking. Click any card for the full case study.`),
      h('div.tools.reveal', h('div.search', icon('search'), search), filters), grid));
    draw(); return sec;
  }
  function linkBtns(p, compact) {
    const defs = [['github', p.github, 'github', 'Code'], ['demo', p.demo, 'ext', 'Live demo'], ['video', p.video, 'play', 'Video'], ['report', p.report, 'file', 'Report']];
    return defs.filter((d) => d[1]).map(([k, u, ic, label]) => h('a.mini', { href: safeUrl(u), target: '_blank', rel: 'noopener', title: label, onclick: (e) => e.stopPropagation() }, icon(ics(ic)), compact ? null : label));
  }
  const ics = (n) => (ICONS[n] ? n : 'ext');
  function card(p, i, feat) {
    const mets = metricsOf(p).slice(0, 3);
    return h('article.pj.card.reveal' + (feat ? '.feat' : ''), { style: { '--d': (i % 3) * .06 + 's' }, tabindex: 0, role: 'button', 'aria-label': 'Open case study: ' + p.title, onclick: () => openProject(p), onkeydown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(p); } } },
      h('div.cover', cover(p), h('span.badge', p.type || p.category), p.featured && h('span.star', { title: 'Featured' }, '★')),
      h('div.pj-b', h('div.cat.mono', p.category), h('h3', p.title), h('p', p.summary),
        mets.length > 0 && h('div.met', mets.map(([l, v]) => h('div', h('b', v), h('small', l)))),
        h('div.tech', arr(p.tech).slice(0, feat ? 6 : 4).map((t) => h('span.chip', t)), arr(p.tech).length > (feat ? 6 : 4) && h('span.chip', '+' + (arr(p.tech).length - (feat ? 6 : 4)))),
        h('div.pj-f', h('span.more', 'Case study', icon('arrow')), h('div.mini-row', linkBtns(p, true)))));
  }

  const dlg = h('dialog', { 'aria-label': 'Project details' });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => { if (location.hash.startsWith('#project/')) history.replaceState(null, '', location.pathname + location.search); });
  function openProject(p) {
    const idx = state.list.indexOf(p); const step = (d) => { const l = state.list; if (l.length > 1) openProject(l[(idx + d + l.length) % l.length]); };
    const mets = metricsOf(p); const links = linkBtns(p, false);
    const sheet = h('div.sheet', h('button.icon-btn.x', { onclick: () => dlg.close(), 'aria-label': 'Close' }, icon('x')), h('div.cover', cover(p)),
      h('div.sheet-b', h('div.tags', h('span.chip', p.category), p.type && h('span.chip', p.type), p.period && h('span.chip', p.period)), h('h3', p.title),
        h('div.desc', paras(p.description || p.summary).map((t) => h('p', t))),
        mets.length > 0 && h('div.metrics', mets.map(([l, v]) => h('div', h('b', v), h('small', l)))),
        arr(p.highlights).length > 0 && [h('h5', 'Highlights'), h('ul.hl', p.highlights.map((x) => h('li', x)))],
        arr(p.images).length > 0 && [h('h5', 'Gallery'), h('div.gallery', p.images.map((u) => h('a', { href: safeUrl(u), target: '_blank', rel: 'noopener' }, h('img', { src: safeUrl(u), alt: p.title + ' screenshot', loading: 'lazy' }))))],
        arr(p.tech).length > 0 && [h('h5', 'Tech stack'), h('div.tags', p.tech.map((t) => h('span.chip', t)))],
        h('div.acts', links.map((l) => { l.className = 'btn' + (l.title === 'Code' ? ' primary' : ''); return l; }), !links.length && h('a.btn', { href: '#contact', onclick: () => dlg.close() }, 'Ask about this project'),
          h('div.nav2', h('button.icon-btn', { 'aria-label': 'Previous project', onclick: () => step(-1) }, icon('left')), h('button.icon-btn', { 'aria-label': 'Next project', onclick: () => step(1) }, icon('right'))))));
    dlg.replaceChildren(sheet); if (!dlg.open) dlg.showModal(); history.replaceState(null, '', '#project/' + p.id);
  }

  function skills() {
    const groups = arr(D.skills); if (!groups.length) return null;
    return h('section#skills', h('div.wrap', secHead('Toolbox', 'Skills & technologies', 'A deep AI/ML stack on top of a solid computer-engineering foundation.'),
      h('div.skill-grid', groups.map((g, i) => h('div.sk.card.reveal', { style: { '--d': (i % 3) * .07 + 's' } }, h('h3', h('span.si', icon(g.icon)), g.category, h('em', String(arr(g.items).length).padStart(2, '0'))), h('div.chips', arr(g.items).map((s) => h('span.chip.sk-chip', s))))))));
  }

  function experience() {
    const ex = arr(D.experience); if (!ex.length) return null;
    return h('section#experience', h('div.wrap', secHead('Career', 'Experience', 'Industry internships in AI engineering and security operations.'),
      h('div.tl', ex.map((e, i) => h('article.tl-i.card.reveal', { style: { '--d': i * .08 + 's' } },
        h('div.tl-top', h('div', h('h3', e.role), h('div.co', e.company, e.location && ' · ' + e.location)), h('div.when', [e.start, e.end].filter(Boolean).join(' – ') || e.period)),
        arr(e.description).length > 0 && h('ul', e.description.map((d) => h('li', d))), arr(e.tech).length > 0 && h('div.tags', e.tech.map((t) => h('span.chip', t))))))));
  }

  function eduAch() {
    const hid = hidden(); const ed = arr(D.education), ac = arr(D.achievements), ce = arr(D.certificates);
    return h('section#education', h('div.wrap.two',
      ed.length > 0 && h('div', h('div.eyebrow.reveal', 'Education'), h('h3.sub.reveal', 'Academic background'),
        ed.map((e) => h('div.edu.card.reveal', h('h4', e.degree), h('div.in', e.institution), h('div.when.mono', [e.start, e.end].filter(Boolean).join(' – ')), e.grade && h('span.gr', e.grade), arr(e.details).map((d) => h('p', '• ' + d))))),
      (ac.length > 0 || ce.length > 0) && h('div', h('div.eyebrow.reveal', 'Recognition'), h('h3.sub.reveal', 'Achievements & certificates'),
        ac.map((a) => h('div.ach.card.reveal', h('div.tr', a.icon || '🏆'), h('div', h('h4', a.title), a.subtitle && h('small.mono', a.subtitle), a.description && h('p', a.description)))),
        ce.length > 0 && h('div.certs.reveal', ce.map((c) => { const t = [h('span', icon('award')), h('span', c.title), c.issuer && h('small', c.issuer)]; return c.url ? h('a.cert', { href: safeUrl(c.url), target: '_blank', rel: 'noopener' }, t) : h('div.cert', t); })))));
  }

  function contact() {
    const p = P(); const status = h('div'); let busy = false;
    const f = (label, el) => h('label', label, el);
    const form = h('form.form.card.reveal', { novalidate: '' },
      h('div.r2', f('Your name', h('input', { name: 'name', required: true, autocomplete: 'name', maxlength: 120 })), f('Email', h('input', { name: 'email', type: 'email', required: true, autocomplete: 'email', maxlength: 200 }))),
      f('Subject', h('select', { name: 'subject' }, ['AI / ML project', 'Computer vision', 'RAG / LLM chatbot', 'Embedded / IoT', 'Data analysis', 'Something else'].map((o) => h('option', { value: o }, o)))),
      f('Message', h('textarea', { name: 'message', required: true, minlength: 10, maxlength: 4000, placeholder: 'What do you want to build? Goal, data you have, deadline…' })),
      h('input.hp', { name: 'website', tabindex: '-1', autocomplete: 'off', 'aria-hidden': 'true' }), status,
      h('button.btn.primary', { type: 'submit', style: { justifySelf: 'start' } }, 'Send message', icon('arrow')));
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); if (busy) return; const d = Object.fromEntries(new FormData(form)); status.className = ''; status.textContent = '';
      if (d.website) return;
      if (!d.name.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email) || d.message.trim().length < 10) { status.className = 'msg err'; status.textContent = 'Please enter your name, a valid email and a message (10+ characters).'; return; }
      busy = true;
      try {
        if (CFG.FORM_ENDPOINT) {
          const payload = { name: d.name.trim(), email: d.email.trim(), subject: d.subject, message: d.message.trim() };
          if (CFG.FORM_ACCESS_KEY) { payload.access_key = CFG.FORM_ACCESS_KEY; payload.from_name = 'Portfolio contact form'; }
          const r = await fetch(CFG.FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
          if (!r.ok) throw new Error('Could not send right now. Please email me directly.');
          form.reset(); status.className = 'msg ok'; status.textContent = 'Thanks! Your message is in. I will reply by email soon.';
        } else {
          location.href = `mailto:${p.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message + '\n\n— ' + d.name + ' (' + d.email + ')')}`;
          status.className = 'msg ok'; status.textContent = 'Opening your email app…';
        }
      } catch (err) { status.className = 'msg err'; status.textContent = err.message; }
      busy = false;
    });
    const rows = [['mail', p.email, p.email && 'mailto:' + p.email], ['phone', p.phone, p.phone && 'tel:' + p.phone.replace(/[^\d+]/g, '')], ['pin', p.location], ['linkedin', p.linkedin && 'LinkedIn', p.linkedin], ['github', p.github && 'GitHub', p.github], ['ext', p.upwork && 'Upwork profile', p.upwork], ['ext', p.fiverr && 'Fiverr profile', p.fiverr], ['kaggle', p.kaggle && 'Kaggle', p.kaggle], ['huggingface', p.huggingface && 'Hugging Face', p.huggingface]].filter((r) => r[1]);
    return h('section#contact', h('div.wrap', secHead('Contact', "Let's build something that works"),
      h('div.contact-box', h('div.c-info.card.reveal', h('h3', 'Tell me about your project.'), h('div.avail' + (p.available ? '' : '.off'), { style: { alignSelf: 'start' } }, h('b'), p.available ? p.availableText : 'Currently booked'),
        rows.map(([i, t, u]) => (u ? h('a.c-row', { href: safeUrl(u), target: isHttp(u) ? '_blank' : null, rel: 'noopener' }, icon(ics(i)), t) : h('div.c-row', icon(ics(i)), t))),
        CFG.BOOKING_URL && h('a.btn.primary', { href: safeUrl(CFG.BOOKING_URL), target: '_blank', rel: 'noopener', style: { alignSelf: 'start' } }, icon('clock'), 'Book a call'),
        resumesSection(p)), form)));
  }

  function getResumes() {
    const p = P();
    return arr(p.resumes).length ? p.resumes : [
      { id: 'aiml', title: 'AI / ML Engineer CV', track: 'AI & Machine Learning', description: 'Deep Learning, Computer Vision, transfer learning, RAG chatbots, and neural network models.', icon: 'brain', url: p.resume || 'assets/Muhammad-Zain-Tariq-CV-AIML.pdf', fileName: 'Muhammad-Zain-Tariq-AIML-CV.pdf' },
      { id: 'software', title: 'Software Engineer CV', track: 'Software & Core CS', description: 'Python, C++, OOP, Data Structures & Algorithms, REST APIs, and system programming.', icon: 'code', url: p.resume || 'assets/Muhammad-Zain-Tariq-CV-Software.pdf', fileName: 'Muhammad-Zain-Tariq-Software-CV.pdf' },
      { id: 'networking', title: 'Network Engineer CV', track: 'Networking & Security', description: 'Cisco routing & switching, TCP/IP, VLANs, socket programming, and SOC/ELK monitoring.', icon: 'network', url: p.resume || 'assets/Muhammad-Zain-Tariq-CV-Networking.pdf', fileName: 'Muhammad-Zain-Tariq-Networking-CV.pdf' }
    ];
  }

  function resumesSection(p) {
    const list = getResumes();
    return h('div.cv-box',
      h('div.cv-head', icon('file'), h('span', 'Download CV / Résumé by Track')),
      h('div.cv-items', list.map((cv) =>
        h('div.cv-row',
          h('div.cv-row-l',
            h('span.cv-ico', icon(cv.icon || 'file')),
            h('div',
              h('div.cv-name', cv.title),
              h('div.cv-track.mono', cv.track || ''))),
          h('div.cv-row-acts',
            h('a.mini', { href: safeUrl(cv.url), target: '_blank', rel: 'noopener', title: 'Open ' + cv.title }, icon('ext')),
            h('a.mini.primary', { href: safeUrl(cv.url), download: cv.fileName || true, target: '_blank', rel: 'noopener', title: 'Download ' + cv.title }, icon('download')))))));
  }

  function processSec() {
    const f = D.freelance || {}; const steps = arr(f.process); if (!steps.length) return null;
    return h('section#process', h('div.wrap', secHead('How I work', 'A simple, transparent process', 'Clear scope, regular demos and no surprises.'),
      h('div.proc', steps.map((st, i) => h('div.pstep.card.reveal', { style: { '--d': i * .07 + 's' } }, h('em.mono', String(i + 1).padStart(2, '0')), h('h3', st.title), h('p', st.text))))));
  }
  function packagesSec() {
    const f = D.freelance || {}; const pk = arr(f.packages); if (!pk.length) return null;
    return h('section#packages', h('div.wrap', secHead('Engagements', 'Ways we can work together', 'Every project is scoped individually. Tell me your goal and I will send a fixed-price proposal.'),
      h('div.pkg-grid', pk.map((k, i) => h('article.pkg.card.reveal' + (k.featured ? '.hot' : ''), { style: { '--d': i * .07 + 's' } },
        k.tag && h('span.ptag.mono', k.tag), h('h3', k.name), h('div.price', k.price || 'Custom quote'),
        h('ul', arr(k.points).map((x) => h('li', x))), h('a.btn' + (k.featured ? '.primary' : ''), { href: '#contact' }, 'Discuss this', icon('arrow')))))));
  }
  function faqSec() {
    const q = arr((D.freelance || {}).faqs); if (!q.length) return null;
    return h('section#faq', h('div.wrap.faqw', h('div', secHead('FAQ', 'Questions clients ask'), h('a.btn.reveal', { href: '#contact' }, 'Still unsure? Ask me', icon('arrow'))),
      h('div.faq', q.map((x, i) => h('details.card.reveal', { style: { '--d': i * .04 + 's' } }, h('summary', x.q), h('p', x.a))))));
  }
  function testimonialsSec() {
    const t = arr(D.testimonials); if (!t.length) return null;
    return h('section#testimonials', h('div.wrap', secHead('Kind words', 'What clients say'), h('div.tm-grid', t.map((x) => h('figure.tm.card.reveal', h('blockquote', x.quote), h('figcaption', h('b', x.name), h('small', x.role)))))));
  }

  function footer() { const p = P(); return h('footer', h('div.wrap', h('div', `© ${new Date().getFullYear()} ${p.name}. Built with care.`), h('div.socials', { style: { margin: 0 } }, socials()))); }

  /* ---------- command palette ---------- */
  const pal = h('dialog', { 'aria-label': 'Search' });
  function openPalette() {
    const items = [...$$('main section[id]').filter((s) => s.id !== 'top').map((s) => ({ t: 'Go to ' + s.id[0].toUpperCase() + s.id.slice(1), k: 'section', go: () => s.scrollIntoView() })),
      ...arr(D.projects).map((p) => ({ t: p.title, k: p.category, go: () => { state.list = D.projects; openProject(p); } })),
      { t: 'Download CVs / Resumes', k: 'action', go: openResumeModal },
      { t: 'Toggle theme', k: 'action', go: () => $('.nav-r .icon-btn:nth-child(2)').click() }];
    let sel = 0, shown = items; const ul = h('ul'); const input = h('input', { placeholder: 'Jump to a section or project…', 'aria-label': 'Search' });
    const draw = () => ul.replaceChildren(...shown.slice(0, 12).map((it, i) => h('li', h('button' + (i === sel ? '.on' : ''), { onclick: () => run(it) }, h('span', it.t), h('small', it.k)))));
    const run = (it) => { pal.close(); setTimeout(it.go, 30); };
    input.addEventListener('input', () => { const q = input.value.toLowerCase(); shown = items.filter((i) => (i.t + ' ' + i.k).toLowerCase().includes(q)); sel = 0; draw(); });
    input.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, Math.min(shown.length, 12) - 1); draw(); e.preventDefault(); } else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); draw(); e.preventDefault(); } else if (e.key === 'Enter' && shown[sel]) run(shown[sel]); });
    pal.replaceChildren(h('div.pal', input, ul)); draw(); if (!pal.open) pal.showModal(); input.focus();
  }
  pal.addEventListener('click', (e) => { if (e.target === pal) pal.close(); });
  addEventListener('keydown', (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openPalette(); } });

  /* ---------- CV modal dialog ---------- */
  const cvDlg = h('dialog', { 'aria-label': 'Curriculum Vitae' });
  cvDlg.addEventListener('click', (e) => { if (e.target === cvDlg) cvDlg.close(); });

  function openResumeModal() {
    const list = getResumes();
    const sheet = h('div.sheet.cv-sheet',
      h('button.icon-btn.x', { onclick: () => cvDlg.close(), 'aria-label': 'Close' }, icon('x')),
      h('div.sheet-b',
        h('div.eyebrow', 'Curriculum Vitae'),
        h('h3', 'Select Your Preferred CV Track'),
        h('p.desc', { style: { color: 'var(--muted)', marginBottom: '24px' } }, 'I provide 3 specialized CV versions tailored to specific engineering roles and domains:'),
        h('div.cv-modal-grid', list.map((cv) =>
          h('div.cv-modal-card.card',
            h('div.cv-modal-card-top',
              h('div.cv-modal-ico', icon(cv.icon || 'file')),
              h('div',
                h('h4', cv.title),
                h('span.chip', cv.track || 'Engineering'))),
            h('p.cv-modal-desc', cv.description || ''),
            h('div.cv-modal-acts',
              h('a.btn', { href: safeUrl(cv.url), target: '_blank', rel: 'noopener' }, icon('ext'), 'Open / View'),
              h('a.btn.primary', { href: safeUrl(cv.url), download: cv.fileName || true, target: '_blank', rel: 'noopener' }, icon('download'), 'Download PDF'))))),
        h('div.cv-modal-footer',
          h('span.small.mono', 'Need a tailored CV or combined engineering profile?'),
          h('a.btn.ghost', { href: '#contact', onclick: () => cvDlg.close() }, icon('mail'), 'Contact me'))));
    cvDlg.replaceChildren(sheet);
    if (!cvDlg.open) cvDlg.showModal();
  }

  /* ---------- motion ---------- */
  let io;
  function observe() {
    io = io || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); $$('[data-count]', e.target).forEach(countUp); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal:not(.in)').forEach((el) => io.observe(el));
  }
  function countUp(el) {
    const m = el.dataset.count.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/); if (!m || reduce) return;
    const end = parseFloat(m[2]), dec = (m[2].split('.')[1] || '').length, t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / 1100), e = 1 - Math.pow(1 - k, 3); el.textContent = m[1] + (end * e).toFixed(dec) + m[3]; if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step);
  }

  /* ---------- boot ---------- */
  async function boot() {
    D = await loadData(); const hid = hidden(); const main = h('main');
    const parts = [hero(), marquee(), !hid.has('services') && services(), !hid.has('projects') && projects(), !hid.has('process') && processSec(), !hid.has('packages') && packagesSec(), !hid.has('skills') && skills(), testimonialsSec(), about(), !hid.has('experience') && experience(), !hid.has('education') && eduAch(), !hid.has('faq') && faqSec(), !hid.has('contact') && contact()];
    main.append(...parts.filter(Boolean)); const app = $('#app'); app.replaceChildren(main, footer(), dlg, pal, cvDlg); app.prepend(nav());
    const top = h('button.icon-btn.top', { 'aria-label': 'Back to top', onclick: () => scrollTo({ top: 0 }) }, icon('up')); document.body.append(top);
    const navEl = $('.nav'), prog = $('#progress'), links = $$('.links a'); const secs = links.map((a) => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    const onScroll = () => { const y = scrollY, max = document.documentElement.scrollHeight - innerHeight; navEl.classList.toggle('stuck', y > 20); top.classList.toggle('show', y > 700); prog.style.width = (max > 0 ? y / max * 100 : 0) + '%';
      let cur = null; secs.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * .4) cur = s.id; }); links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + cur)); };
    addEventListener('scroll', onScroll, { passive: true }); onScroll(); observe(); neuralNet();
    document.title = `${P().name} | ${P().title}`;
    if (location.hash.startsWith('#project/')) { const p = arr(D.projects).find((x) => x.id === location.hash.slice(9)); if (p) { state.list = D.projects; openProject(p); } }
    else if (location.hash === '#cv' || location.hash === '#resumes' || location.hash === '#resume') { setTimeout(openResumeModal, 80); }
    else if (location.hash.length > 1) { const el = document.getElementById(location.hash.slice(1)); el && setTimeout(() => el.scrollIntoView(), 60); }
  }
  boot();
})();
