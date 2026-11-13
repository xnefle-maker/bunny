// ALBERIA Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initExploreMode();
  initCreatorPanel();
  initMusic();
  initSlider();
  renderSections();
  initSearch();
  initGenresMenu();
  initPlatformTiles();
});

/* ===== Sakura Petals ===== */
function initPetals() {
  const container = document.getElementById('petals');
  if (!container) return;
  
  const count = 64;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    const size = 8 + Math.random() * 10;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (8 + Math.random() * 12) + 's';
    petal.style.animationDelay = (Math.random() * 15) + 's';
    petal.style.opacity = 0.3 + Math.random() * 0.4;
    container.appendChild(petal);
  }
}

/* ===== Creator Panel ===== */
function initCreatorPanel() {
  const btn = document.getElementById('creatorBtn');
  const panel = document.getElementById('creatorPanel');
  const overlay = document.getElementById('panelOverlay');
  const close = document.getElementById('panelClose');
  
  if (!btn || !panel) return;
  
  function openPanel() {
    panel.classList.add('open');
    overlay.classList.add('show');
  }
  
  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('show');
  }
  
  btn.addEventListener('click', openPanel);
  close.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);
}

/* ===== Music ===== */
let audio = null;
let isPlaying = false;

function initMusic() {
  const toggle = document.getElementById('musicToggle');
  const headerBtn = document.getElementById('musicBtn');
  
  // Soft ambient placeholder (user can replace with real file later)
  // For now we just toggle visual state since no audio file provided
  function toggleMusic() {
    isPlaying = !isPlaying;
    if (toggle) {
      toggle.classList.toggle('playing', isPlaying);
      toggle.textContent = isPlaying ? '♫' : '♪';
    }
    if (headerBtn) {
      headerBtn.textContent = isPlaying ? '♫' : '♪';
    }
    // Real audio would go here:
    // if (isPlaying) audio.play(); else audio.pause();
  }
  
  if (toggle) toggle.addEventListener('click', toggleMusic);
  if (headerBtn) headerBtn.addEventListener('click', toggleMusic);
}

/* ===== Explore gate + Featured continuous carousel ===== */
function initExploreMode() {
  // Portal entry is temporarily removed; the homepage scrolls normally.
  document.body.classList.remove('explore-locked', 'explore-active', 'featured-boundary-locked');
}

let carouselDirection = 1;
let carouselFrame = 0;
let carouselLastTime = 0;
let carouselPaused = false;

function initSlider() {
  const track = document.getElementById('sliderTrack');
  const viewport = document.getElementById('sliderViewport');
  if (!track || !viewport || typeof ALL_GAMES === 'undefined') return;

  const featured = ALL_GAMES.filter(game => !game.upcoming).slice(0, 20);
  if (!featured.length) return;

  track.innerHTML = featured.map(game => `
    <a class="featured-game" href="game.html?id=${encodeURIComponent(game.id)}">
      <span class="featured-game-art"><img src="${game.cover}" alt="${game.titleFa || game.title}" loading="lazy"></span>
      <span class="featured-game-title">${game.titleFa || game.title}</span>
      <span class="featured-game-year">${game.year}</span>
    </a>
  `).join('');

  // Very slow bounded glide: reverse at either edge instead of looping into empty space.
  const speed = 0.008; // pixels per millisecond: deliberately slow, bounded glide
  const animate = (now) => {
    if (!carouselLastTime) carouselLastTime = now;
    const elapsed = Math.min(now - carouselLastTime, 40);
    carouselLastTime = now;
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    if (!carouselPaused && maxScroll > 0) {
      viewport.scrollLeft += carouselDirection * speed * elapsed;
      if (viewport.scrollLeft >= maxScroll - 1) { viewport.scrollLeft = maxScroll; carouselDirection = -1; }
      if (viewport.scrollLeft <= 1) { viewport.scrollLeft = 0; carouselDirection = 1; }
    }
    carouselFrame = window.requestAnimationFrame(animate);
  };
  carouselFrame = window.requestAnimationFrame(animate);

  const pause = () => { carouselPaused = true; };
  const resume = () => { carouselPaused = false; };
  viewport.addEventListener('mouseenter', pause);
  viewport.addEventListener('mouseleave', resume);
  viewport.addEventListener('focusin', pause);
  viewport.addEventListener('focusout', resume);
  viewport.addEventListener('touchstart', pause, { passive:true });
  viewport.addEventListener('touchend', resume, { passive:true });
  document.getElementById('sliderPrev')?.addEventListener('click', () => { carouselPaused = true; carouselDirection = -1; viewport.scrollLeft = Math.max(0, viewport.scrollLeft - 150); window.setTimeout(resume, 900); });
  document.getElementById('sliderNext')?.addEventListener('click', () => { carouselPaused = true; carouselDirection = 1; viewport.scrollLeft = Math.min(Math.max(0, viewport.scrollWidth - viewport.clientWidth), viewport.scrollLeft + 150); window.setTimeout(resume, 900); });
  window.addEventListener('beforeunload', () => window.cancelAnimationFrame(carouselFrame));
}

/* ===== Render Game Cards ===== */
function createCard(game) {
  return `
    <a href="game.html?id=${game.id}" class="game-card">
      <img src="${game.cover}" alt="${game.title}" loading="lazy" 
           onerror="this.src='https://via.placeholder.com/300x450/2c1c28/f4a7b9?text=${encodeURIComponent(game.title)}'">
      <div class="card-overlay">
        <div class="card-title">${game.titleFa || game.title}</div>
      </div>
    </a>
  `;
}

function renderSections() {
  if (typeof ALL_GAMES === 'undefined') return;
  
  const popular = ALL_GAMES.filter(g => g.popular).slice(0, 8);
  const newest = [...ALL_GAMES].filter(g => !g.upcoming).sort((a, b) => b.year - a.year).slice(0, 8);
  const upcoming = ALL_GAMES.filter(g => g.upcoming);
  
  const popularGrid = document.getElementById('popularGrid');
  const newGrid = document.getElementById('newGrid');
  const upcomingGrid = document.getElementById('upcomingGrid');
  const genresGrid = document.getElementById('genresGrid');
  
  if (popularGrid) popularGrid.innerHTML = popular.map(createCard).join('');
  if (newGrid) newGrid.innerHTML = newest.map(createCard).join('');
  if (upcomingGrid) upcomingGrid.innerHTML = (upcoming.length ? upcoming : popular.slice(0, 4)).map(createCard).join('');
  
  if (genresGrid && typeof GENRES !== 'undefined') {
    genresGrid.innerHTML = GENRES.map((g, i) => {
      const sample = ALL_GAMES.find(game => (game.genres || []).some(x => x.toLowerCase().includes(g.id) || x.includes(g.name))) || ALL_GAMES[i % ALL_GAMES.length];
      const genreCover = g.id === 'action' ? 'https://media.steelseriescdn.com/blog/posts/how-to-win-the-gulag-in-warzone-30/warzone-key-art_4276c3f7d1f34e868db11680aae68bec.jpg' : sample.cover;
      return `<a href="archive.html?genre=${encodeURIComponent(g.id)}" class="genre-card" style="background-image:url('${genreCover}')">
        <span class="genre-icon">${g.icon}</span><span class="genre-name">${g.name}</span>
      </a>`;
    }).join('');
  }
}

/* ===== Header genre menu ===== */
function initGenresMenu() {
  const toggle = document.getElementById('genresMenuToggle');
  const menu = document.getElementById('genresMenu');
  if (!toggle || !menu || typeof GENRES === 'undefined') return;

  menu.innerHTML = GENRES.map(genre =>
    `<a class="genre-menu-item" href="archive.html?genre=${encodeURIComponent(genre.id)}"><span>${genre.icon}</span>${genre.name}</a>`
  ).join('');

  const closeMenu = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

/* ===== Global game search ===== */
function initSearch() {
  const input = document.getElementById('globalSearch');
  const suggestions = document.getElementById('searchSuggestions');
  if (!input) return;

  const goToArchive = () => {
    const q = input.value.trim();
    if (q) window.location.href = `archive.html?search=${encodeURIComponent(q)}`;
  };
  const closeSuggestions = () => {
    if (suggestions) suggestions.classList.remove('open');
  };
  const showSuggestions = () => {
    if (!suggestions || typeof ALL_GAMES === 'undefined') return;
    const q = input.value.trim().toLocaleLowerCase();
    if (!q) { closeSuggestions(); suggestions.innerHTML = ''; return; }
    const matches = ALL_GAMES.filter(game =>
      (game.title || '').toLocaleLowerCase().includes(q) ||
      (game.titleFa || '').toLocaleLowerCase().includes(q) ||
      (game.characters || []).some(name => name.toLocaleLowerCase().includes(q))
    ).slice(0, 6);
    suggestions.innerHTML = matches.length
      ? matches.map(game => `<a class="search-suggestion" role="option" href="game.html?id=${encodeURIComponent(game.id)}"><img src="${game.cover}" alt="" loading="lazy"><span><strong>${game.titleFa || game.title}</strong><small>${game.title}</small></span></a>`).join('') + `<a class="search-all-results" href="archive.html?search=${encodeURIComponent(input.value.trim())}">نمایش همه نتایج جستجو</a>`
      : `<div class="search-no-match">بازی‌ای پیدا نشد؛ برای جستجوی کامل Enter بزنید.</div>`;
    suggestions.classList.add('open');
  };

  input.addEventListener('input', showSuggestions);
  input.addEventListener('focus', showSuggestions);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { event.preventDefault(); goToArchive(); }
    if (event.key === 'Escape') closeSuggestions();
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-box')) closeSuggestions();
  });
}


function initPlatformTiles() {
  const buttons = [...document.querySelectorAll('.platform-tile')];
  const grid = document.getElementById('platformGrid');
  const expand = document.getElementById('platformExpand');
  if (!buttons.length || !grid) return;

  let activePlatform = null;
  let expanded = false;
  const show = (platform) => {
    activePlatform = platform;
    expanded = false;
    buttons.forEach(b => b.classList.toggle('active', b.dataset.platform === platform));
    const list = ALL_GAMES.filter(g => {
      const platforms = g.platforms || [];
      if (platform === 'Xbox') return platforms.includes('Xbox') && !platforms.includes('PS5');
      return platforms.includes(platform);
    });
    grid.dataset.total = String(list.length);
    grid.innerHTML = list.length ? list.map(createCard).join('') : '<p class="platform-empty">فعلاً بازی ثبت‌شده‌ای برای این پلتفرم وجود ندارد.</p>';
    const visibleCount = window.matchMedia('(max-width:560px)').matches ? 4 : window.matchMedia('(max-width:800px)').matches ? 6 : 10;
    grid.classList.toggle('is-collapsed', list.length > visibleCount);
    [...grid.children].forEach((card, index) => { if (index >= visibleCount) card.hidden = true; });
    if (expand) {
      expand.hidden = list.length <= visibleCount;
      expand.setAttribute('aria-expanded', 'false');
      expand.querySelector('.platform-expand-label').textContent = 'نمایش همه بازی‌ها';
    }
  };
  buttons.forEach(b => b.addEventListener('click', () => show(b.dataset.platform)));
  expand?.addEventListener('click', () => {
    if (!activePlatform) return;
    const cards = [...grid.children];
    expanded = !expanded;
    cards.forEach(card => { card.hidden = !expanded && cards.indexOf(card) >= (window.matchMedia('(max-width:560px)').matches ? 4 : window.matchMedia('(max-width:800px)').matches ? 6 : 10); });
    grid.classList.toggle('is-collapsed', !expanded);
    expand.setAttribute('aria-expanded', String(expanded));
    expand.querySelector('.platform-expand-label').textContent = expanded ? 'نمایش کمتر' : 'نمایش همه بازی‌ها';
    expand.querySelector('.platform-expand-arrow').textContent = expanded ? '↑' : '↓';
  });

  const genreRail = document.getElementById('genresGrid');
  if (genreRail) { let direction = 1; let timer = window.setInterval(() => { if (genreRail.matches(':hover')) return; const end = genreRail.scrollWidth - genreRail.clientWidth; if (end <= 0) return; genreRail.scrollLeft += direction * 1; if (genreRail.scrollLeft >= end - 2) direction = -1; if (genreRail.scrollLeft <= 2) direction = 1; }, 28); window.addEventListener('beforeunload', () => clearInterval(timer)); }
}
