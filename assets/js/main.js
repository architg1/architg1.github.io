
  // ─── ROUTING ───
  const pages = ['home', 'publications', 'projects', 'blog', 'cv', 'photos'];

  function navigate(page) {
    window.location.hash = page;
  }

  function showPage(page) {
    if (!pages.includes(page)) page = 'home';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) {
      target.classList.remove('active');
      // Force reflow for animation restart
      void target.offsetWidth;
      target.classList.add('active');
    }

    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });

    // Close mobile menu
    document.getElementById('navLinks').classList.remove('open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  window.addEventListener('hashchange', () => {
    const page = window.location.hash.slice(1) || 'home';
    showPage(page);
  });

  // Initial load
  const initialPage = window.location.hash.slice(1) || 'home';
  showPage(initialPage);

  // ─── MOBILE MENU ───
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // ─── SCROLL SHADOW ───
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
  });

  // ─── DARK MODE ───
  function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.querySelector('.theme-toggle').textContent = isDark ? '☽' : '☀';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Default to dark; respect explicit light preference
  if (localStorage.getItem('theme') !== 'light') {
    document.body.classList.add('dark');
    document.querySelector('.theme-toggle').textContent = '☽';
  }

