/* ---------- Reveal-on-scroll (progressive enhancement) ---------- */
(function () {
  const root = document.documentElement;
  const targets = document.querySelectorAll('.reveal');
  if (targets.length === 0) return;
  if (!('IntersectionObserver' in window)) return;

  root.classList.add('js');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
  );

  targets.forEach((el) => io.observe(el));

  setTimeout(() => {
    targets.forEach((el) => el.classList.add('is-in'));
  }, 2000);
})();

/* ---------- Hero cover carousel (arrows + dots + autoplay) ---------- */
(function () {
  const cover = document.querySelector('[data-carousel]');
  if (!cover) return;

  const slides = cover.querySelectorAll('img');
  const dots = cover.querySelectorAll('.hero-cover-dot');
  const prevBtn = cover.querySelector('.hero-cover-prev');
  const nextBtn = cover.querySelector('.hero-cover-next');

  if (slides.length === 0) return;

  let current = 0;
  let timer = null;
  const INTERVAL = 4500;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((img, i) => img.classList.toggle('is-active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  function start() {
    stop();
    timer = setInterval(next, INTERVAL);
  }
  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }
  function reset() { start(); }

  if (nextBtn) nextBtn.addEventListener('click', () => { next(); reset(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); reset(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { show(i); reset(); });
  });

  cover.addEventListener('mouseenter', stop);
  cover.addEventListener('mouseleave', start);
  cover.addEventListener('focusin', stop);
  cover.addEventListener('focusout', start);

  // Pause when the tab is hidden, resume when visible.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  start();
})();
