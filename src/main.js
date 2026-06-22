/* ── Hamburger ─────────────────────────────────────────────────────────────── */
(function () {
  const btn = document.querySelector('.hamburger');
  const overlay = document.querySelector('.menu-overlay');
  if (!btn || !overlay) return;
  function toggle(force) {
    const open = typeof force === 'boolean' ? force : !btn.classList.contains('open');
    btn.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', () => toggle());
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
})();

/* ── Nav scroll blur ───────────────────────────────────────────────────────── */
(function () {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const fn = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', fn, { passive: true });
  fn();
})();

/* ── Active menu link ──────────────────────────────────────────────────────── */
(function () {
  const links = document.querySelectorAll('.menu-links a');
  const page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop() || 'index.html';
    if (href === page) a.classList.add('active');
  });
})();

/* ── Page transition ───────────────────────────────────────────────────────── */
(function () {
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || a.target === '_blank') return;
    if (href.endsWith('.html') || href === '/' || href === './') {
      e.preventDefault();
      const pg = document.querySelector('.page');
      if (pg) { pg.classList.add('fade-out'); setTimeout(() => { window.location.href = href; }, 220); }
      else window.location.href = href;
    }
  });
})();

/* ── Scroll reveal ─────────────────────────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(
    entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } }),
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach(el => io.observe(el));
})();

/* ── Typing animation ──────────────────────────────────────────────────────── */
(function () {
  const el = document.querySelector('.typing-text');
  if (!el) return;
  const phrases = ['Developer.', 'Bot Builder.', 'AI Builder.', 'I ship things.'];
  let pi = 0, ci = 0, del = false;
  function tick() {
    const p = phrases[pi];
    if (del) {
      el.textContent = p.slice(0, --ci);
      if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 380); return; }
      setTimeout(tick, 52);
    } else {
      el.textContent = p.slice(0, ++ci);
      if (ci === p.length) { del = true; setTimeout(tick, 2000); return; }
      setTimeout(tick, 82);
    }
  }
  setTimeout(tick, 600);
})();

/* ── Project filter (row-based) ────────────────────────────────────────────── */
(function () {
  const btns = document.querySelectorAll('.filter-btn');
  const rows = document.querySelectorAll('.project-row');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      rows.forEach(row => {
        row.classList.toggle('hidden', filter !== 'all' && row.dataset.category !== filter);
      });
    });
  });
  if (btns[0]) btns[0].classList.add('active');
})();
