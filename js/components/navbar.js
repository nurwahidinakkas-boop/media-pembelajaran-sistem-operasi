// Navbar / Topbar Component
window.renderNavbar = function() {
  const state = window.store.getState();
  const soundEnabled = window.AudioFX ? window.AudioFX.enabled : true;

  const pageTitles = {
    dashboard: 'Dashboard Pembelajaran',
    petunjuk: 'Petunjuk Penggunaan',
    materi: 'Daftar Materi Pembelajaran',
    'materi-detail': `Materi ${state.selectedMateriId}: ${window.MateriData.find(m => m.id === state.selectedMateriId)?.title || ''}`,
    'media-interaktif': 'Media Pembelajaran Interaktif',
    kuis: 'Kuis Interaktif',
    evaluasi: 'Evaluasi Pembelajaran',
    hasil: 'Hasil Evaluasi',
    selesai: 'Pembelajaran Selesai',
    profil: 'Profil Media'
  };

  const currentTitle = pageTitles[state.activePage] || 'Sistem Operasi';

  return `
    <header class="topbar">
      <div class="topbar-left">
        <button class="mobile-menu-btn" id="btn-toggle-mobile-menu" aria-label="Toggle Menu">
          ${window.getIcon('menu', '', 20)}
        </button>
        <div class="topbar-title">
          <span>${currentTitle}</span>
          <span class="topbar-badge">Kelas XI SMA</span>
        </div>
      </div>

      <div class="topbar-right">
        <button class="sound-toggle-btn ${soundEnabled ? '' : 'muted'}" id="btn-toggle-sound" title="${soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}">
          ${window.getIcon(soundEnabled ? 'volume2' : 'volumeX', '', 16)}
          <span>${soundEnabled ? 'Suara On' : 'Suara Off'}</span>
        </button>
      </div>
    </header>
  `;
};
