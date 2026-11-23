const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const icons = {
  school: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12.5V17c3 2 7 2 10 0v-4.5M21 10v6"/></svg>',
  book: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
  layers: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  calendar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  code: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></svg>',
  tool: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L3 18a2.1 2.1 0 1 0 3 3l6.4-6.4a4 4 0 0 0 5.3-5.3l-2.1 2.1-3-3 2.1-2.1Z"/></svg>',
  network: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="6" height="6" x="9" y="3" rx="1"/><rect width="6" height="6" x="3" y="15" rx="1"/><rect width="6" height="6" x="15" y="15" rx="1"/><path d="M12 9v3M6 15v-3h12v3"/></svg>',
  award: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></svg>',
  users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  cpu: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="5" y="5" rx="2"/><path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M19 9h4M19 14h4M1 9h4M1 14h4"/></svg>'
};
$$('[data-icon]').forEach(node => { node.innerHTML = icons[node.dataset.icon] || icons.code; });

const themeButton = $('#theme-toggle');
function setTheme(theme) { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); themeButton.innerHTML = theme === 'dark' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z"/></svg>'; themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`); }
setTheme(localStorage.getItem('theme') || document.documentElement.dataset.theme);
themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

const pages = $$('.page-view');
function navigate(event) { const link = event.currentTarget; if (link.dataset.pageLink) { event.preventDefault(); $(`#${link.dataset.pageLink}`)?.scrollIntoView({ behavior: 'smooth' }); $('#nav-links').classList.remove('open'); $('#menu-toggle').setAttribute('aria-expanded', 'false'); } }
$$('[data-page-link]').forEach(link => link.addEventListener('click', navigate));
$('#menu-toggle').addEventListener('click', () => { const open = $('#nav-links').classList.toggle('open'); $('#menu-toggle').setAttribute('aria-expanded', String(open)); });
const progress = $('#reading-progress'), backToTop = $('#back-to-top');
function updateProgress() { const max = document.documentElement.scrollHeight - window.innerHeight; progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`; backToTop.classList.toggle('visible', window.scrollY > window.innerHeight * .65); }
window.addEventListener('scroll', updateProgress, { passive: true }); backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
const navObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) $$('[data-page-link]').forEach(link => link.classList.toggle('active', link.dataset.pageLink === entry.target.id)); }), { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
pages.forEach(page => navObserver.observe(page));
const roles = ['Full-Stack Web Developer', 'Netcentric & Network Specialist', 'IoT Hardware Prototyper']; let roleIndex = 0; const roleText = $('#role-text'); setInterval(() => { roleText.classList.add('switching'); setTimeout(() => { roleIndex = (roleIndex + 1) % roles.length; roleText.textContent = roles[roleIndex]; roleText.classList.remove('switching'); }, 250); }, 3000);
$$('.tag-list span').forEach(tag => { if (!tag.dataset.tip) tag.dataset.tip = 'Used in practical web, IoT, or software projects'; });

const categories = ['All', 'Web Dev', 'Mobile App', 'Networking', 'IoT & Hardware'];
function projectVisual() { return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="14" x="3" y="4" rx="2"/><path d="m8 10 3 2-3 2M13 14h3"/></svg>'; }
function projectImagePath(image) { return image ? image.trim().replace(/^\/?public[\\/]+/i, '').replace(/^\/+/, '').replace(/\\/g, '/') : ''; }
function projectVisualMarkup(project) { const imagePath = projectImagePath(project.image); return imagePath ? `<img src="${imagePath}" alt="${project.title}" class="project-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><span class="project-fallback" style="display:none">${projectVisual()}</span>` : `<span class="project-fallback">${projectVisual()}</span>`; }
function buildCard(project) { const card = document.createElement('article'); card.className = 'project-card'; card.dataset.category = project.category; card.innerHTML = `<div class="project-preview">${projectVisualMarkup(project)}</div><div class="project-body"><span class="project-category">${project.category}</span><h3>${project.title}</h3><p>${project.problem}</p><div class="tag-list">${project.tags.slice(0, 4).map(tag => `<span>${tag}</span>`).join('')}</div><div class="project-footer"><a href="${project.github}" class="project-github" target="_blank" rel="noopener">GitHub profile</a><span class="project-category">View details</span></div></div>`; card.querySelector('.project-github').addEventListener('click', event => event.stopPropagation()); card.addEventListener('click', () => openModal(project)); return card; }
function renderProjects() { const grid = $('#projects-grid'); grid.innerHTML = ''; window.PROJECTS.forEach(project => grid.appendChild(buildCard(project))); }
function renderFilters() { const container = $('#filter-tabs'); categories.forEach(category => { const button = document.createElement('button'); button.className = `filter-tab${category === 'All' ? ' active' : ''}`; button.textContent = category; button.addEventListener('click', () => { $$('.filter-tab').forEach(item => item.classList.remove('active')); button.classList.add('active'); $$('.project-card').forEach(card => { card.hidden = category !== 'All' && card.dataset.category !== category; }); }); container.appendChild(button); }); }

const modal = $('#project-modal');
function openModal(project) {
  $('#modal-preview').innerHTML = projectVisualMarkup(project);
  $('#modal-category').textContent = project.category;
  $('#modal-title').textContent = project.title;
  $('#modal-problem').textContent = project.problem;
  $('#modal-takeaways').innerHTML = project.takeaways.map(item => `<li>${item}</li>`).join('');
  $('#modal-tags').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
  $('#modal-github').href = project.github;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }
$('#modal-close').addEventListener('click', closeModal); modal.addEventListener('click', event => { if (event.target === modal) closeModal(); }); document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

renderFilters();
renderProjects();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    target.classList.add('in-view');
    observer.unobserve(target);
  });
}, { threshold: .15 });
const cards = $$('.education-card, .skill-card, .activity-card, .project-card, .certificate-card, .contact-card');
$$('.page-view h2').concat(cards).forEach(element => revealObserver.observe(element));

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
[$('#home'), ...cards].forEach(surface => {
  surface.addEventListener('pointermove', event => {
    if (!finePointer.matches || event.pointerType === 'touch') return;
    const rect = surface.getBoundingClientRect();
    surface.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    surface.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
    surface.classList.add('pointer-active');
  }, { passive: true });
  surface.addEventListener('pointerleave', () => surface.classList.remove('pointer-active'));
});

const toast = $('#toast'); function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); }
$('#copy-email-btn').addEventListener('click', async () => { try { await navigator.clipboard.writeText('muhdasyraf2104@gmail.com'); showToast('Copied!'); } catch (error) { showToast('muhdasyraf2104@gmail.com'); } });
