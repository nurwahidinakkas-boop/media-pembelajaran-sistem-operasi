// Sidebar Component
window.renderSidebar = function() {
  const state = window.store.getState();
  const progressPercent = window.store.getOverallProgress();

  const navItems = [
    { page: 'dashboard', label: 'Dashboard', icon: 'home' },
    { page: 'petunjuk', label: 'Petunjuk', icon: 'compass' },
    { 
      page: 'materi', 
      label: 'Materi', 
      icon: 'bookOpen',
      badge: `${Object.values(state.materialsRead).filter(Boolean).length}/3`
    },
    { 
      page: 'kuis', 
      label: 'Kuis', 
      icon: 'helpCircle',
      badge: state.quizCompleted ? 'Selesai' : null
    },
    { 
      page: 'evaluasi', 
      label: 'Evaluasi', 
      icon: 'clipboardList',
      badge: state.evalCompleted ? 'Selesai' : null
    },
    { page: 'profil', label: 'Profil', icon: 'user' }
  ];

  const isNavActive = (page) => {
    if (page === state.activePage) return true;
    if (page === 'materi' && (state.activePage === 'materi-detail' || state.activePage === 'media-interaktif')) return true;
    if (page === 'evaluasi' && (state.activePage === 'hasil' || state.activePage === 'selesai')) return true;
    return false;
  };

  const navLinksHtml = navItems.map(item => `
    <a class="nav-link ${isNavActive(item.page) ? 'active' : ''}" data-nav="${item.page}">
      <span class="nav-icon">${window.getIcon(item.icon, '', 18)}</span>
      <span class="nav-text">${item.label}</span>
      ${item.badge ? `<span class="badge-indicator">${item.badge}</span>` : ''}
    </a>
  `).join('');

  return `
    <aside class="sidebar ${state.mobileMenuOpen ? 'mobile-open' : ''}" id="app-sidebar">
      <div class="sidebar-header">
        <div class="brand-icon-box">
          ${window.getIcon('cpu', '', 24)}
        </div>
        <div class="brand-text">
          <h1>Sistem Operasi</h1>
          <span>Informatika XI SMA</span>
        </div>
      </div>

      <div class="sidebar-nav">
        <div class="nav-section-title">Menu Utama</div>
        ${navLinksHtml}
      </div>

      <div class="sidebar-footer">
        <div class="sidebar-progress-label">
          <span>Progres Belajar</span>
          <strong>${progressPercent}%</strong>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
      </div>
    </aside>
    <div class="sidebar-backdrop ${state.mobileMenuOpen ? 'mobile-open' : ''}" id="sidebar-backdrop"></div>
  `;
};
