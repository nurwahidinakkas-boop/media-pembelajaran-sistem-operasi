// Dashboard Component
window.renderDashboard = function() {
  const state = window.store.getState();
  const overallProgress = window.store.getOverallProgress();
  const materials = window.MateriData;

  // Modern Vector Laptop SVG Illustration
  const laptopSvg = `
    <svg class="hero-laptop-svg" viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Laptop Screen Outer Lid -->
      <rect x="70" y="30" width="360" height="230" rx="14" fill="#0f172a" stroke="#334155" stroke-width="4"/>
      <!-- Inner Bezel -->
      <rect x="80" y="40" width="340" height="210" rx="8" fill="#030712"/>
      
      <!-- Webcam & Sensor -->
      <circle cx="250" cy="35" r="2.5" fill="#38bdf8"/>
      
      <!-- Screen Display: Futuristic OS UI -->
      <rect x="84" y="44" width="332" height="202" rx="6" fill="#0b132b"/>
      
      <!-- OS Top Bar -->
      <rect x="84" y="44" width="332" height="22" fill="#1e293b"/>
      <circle cx="98" cy="55" r="3.5" fill="#ef4444"/>
      <circle cx="110" cy="55" r="3.5" fill="#f59e0b"/>
      <circle cx="122" cy="55" r="3.5" fill="#10b981"/>
      <text x="210" y="59" fill="#94a3b8" font-size="10" font-family="monospace">OS_KERNEL::v5.18</text>

      <!-- OS Desktop Windows -->
      <!-- Left Panel: Process Monitor -->
      <rect x="96" y="76" width="140" height="156" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="96" y="76" width="140" height="18" fill="#0f172a"/>
      <text x="104" y="89" fill="#38bdf8" font-size="9" font-weight="bold">SISTEM KERNEL</text>
      
      <!-- CPU & RAM Bars in window -->
      <text x="104" y="112" fill="#94a3b8" font-size="8">CPU LOAD: 28%</text>
      <rect x="104" y="118" width="124" height="6" rx="3" fill="#334155"/>
      <rect x="104" y="118" width="45" height="6" rx="3" fill="#38bdf8"/>
      
      <text x="104" y="142" fill="#94a3b8" font-size="8">RAM MEMORY: 4.2/8 GB</text>
      <rect x="104" y="148" width="124" height="6" rx="3" fill="#334155"/>
      <rect x="104" y="148" width="70" height="6" rx="3" fill="#8b5cf6"/>
      
      <!-- Mini Terminal in window -->
      <rect x="104" y="166" width="124" height="56" rx="4" fill="#030712"/>
      <text x="110" y="180" fill="#10b981" font-size="7" font-family="monospace">> scheduler init [OK]</text>
      <text x="110" y="192" fill="#38bdf8" font-size="7" font-family="monospace">> mem_paging alloc</text>
      <text x="110" y="204" fill="#a855f7" font-size="7" font-family="monospace">> ready_queue active</text>

      <!-- Right Panel: Architecture Layers -->
      <rect x="246" y="76" width="158" height="156" rx="6" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="246" y="76" width="158" height="18" fill="#0f172a"/>
      <text x="254" y="89" fill="#c084fc" font-size="9" font-weight="bold">LAYER ARSITEKTUR</text>
      
      <!-- 4 Stack Layers visual -->
      <rect x="256" y="102" width="138" height="24" rx="4" fill="#4338ca"/>
      <text x="295" y="118" fill="#ffffff" font-size="9" font-weight="bold">PENGGUNA (USER)</text>
      
      <rect x="256" y="132" width="138" height="24" rx="4" fill="#7c3aed"/>
      <text x="278" y="148" fill="#ffffff" font-size="9" font-weight="bold">SISTEM OPERASI (OS)</text>
      
      <rect x="256" y="162" width="138" height="24" rx="4" fill="#0284c7"/>
      <text x="285" y="178" fill="#ffffff" font-size="9" font-weight="bold">APLIKASI PROGRAM</text>
      
      <rect x="256" y="192" width="138" height="24" rx="4" fill="#334155"/>
      <text x="280" y="208" fill="#ffffff" font-size="9" font-weight="bold">PERANGKAT KERAS</text>

      <!-- Laptop Base / Keyboard deck -->
      <path d="M30 260 L470 260 L440 286 L60 286 Z" fill="#1e293b" stroke="#334155" stroke-width="2"/>
      <!-- Trackpad -->
      <rect x="210" y="264" width="80" height="16" rx="3" fill="#0f172a" stroke="#475569" stroke-width="1"/>
      <!-- Front lip -->
      <path d="M60 286 L440 286 L430 292 L70 292 Z" fill="#0f172a"/>
    </svg>
  `;

  // Render 3 Material Cards
  const materialCardsHtml = materials.map(m => {
    const isRead = state.materialsRead[m.id];
    return `
      <div class="material-card">
        <div class="material-card-top">
          <span class="mat-number-badge">Materi ${m.number}</span>
          <div class="mat-icon-wrapper">
            ${window.getIcon(m.icon, '', 24)}
          </div>
        </div>
        <h3 class="mat-card-title">${m.title}</h3>
        <p class="mat-card-desc">${m.summary}</p>
        <div class="mat-card-status">
          <span>Status Belajar:</span>
          <span class="mat-status-tag ${isRead ? 'done' : 'undone'}">
            ${window.getIcon(isRead ? 'checkCircle' : 'helpCircle', '', 14)}
            ${isRead ? 'Selesai Dibaca' : 'Belum Selesai'}
          </span>
        </div>
        <button class="btn ${isRead ? 'btn-secondary' : 'btn-primary'} btn-sm" style="width: 100%;" data-action="learn-materi" data-id="${m.id}">
          ${window.getIcon('bookOpen', '', 16)}
          <span>${isRead ? 'Pelajari Ulang' : 'Pelajari Materi'}</span>
        </button>
      </div>
    `;
  }).join('');

  return `
    <div class="dashboard-container fade-in">
      <!-- HERO SECTION -->
      <section class="hero-card">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              ${window.getIcon('zap', '', 16)}
              <span>Media Pembelajaran Interaktif Kelas XI SMA</span>
            </div>
            <h1 class="hero-title">
              Sistem Operasi<br>
              <span>Jembatan Digital Komputer</span>
            </h1>
            <p class="hero-desc">
              Pelajari pengertian, jenis, dan fungsi sistem operasi melalui materi terstruktur, aktivitas interaktif langsung, kuis formatif, dan evaluasi pemahaman.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary btn-lg" id="btn-hero-start">
                ${window.getIcon('play', '', 18)}
                <span>Mulai Belajar</span>
              </button>
              <button class="btn btn-secondary btn-lg" data-nav="petunjuk">
                ${window.getIcon('compass', '', 18)}
                <span>Petunjuk Belajar</span>
              </button>
            </div>
          </div>
          <div class="hero-visual">
            ${laptopSvg}
          </div>
        </div>
      </section>

      <!-- OVERALL PROGRESS CARD -->
      <section class="overall-progress-card">
        <div class="progress-info">
          <h3>Progres Pembelajaran Keseluruhan</h3>
          <p>Selesaikan seluruh materi, coba simulasi interaktif, dan kerjakan evaluasi akhir.</p>
        </div>
        <div class="progress-stats-box">
          <div class="progress-track" style="height: 10px;">
            <div class="progress-fill" style="width: ${overallProgress}%;"></div>
          </div>
          <div class="progress-percentage-label">${overallProgress}%</div>
        </div>
      </section>

      <!-- SECTION: MATERI PEMBELAJARAN (3 CARDS) -->
      <section style="margin-bottom: 2.5rem;">
        <div class="section-header-box">
          <div>
            <h2>Materi Pembelajaran</h2>
            <p>Pilih topik untuk memulai eksplorasi konsep sistem operasi</p>
          </div>
          <button class="btn btn-outline-primary btn-sm" data-nav="materi">
            <span>Lihat Semua Materi</span>
            ${window.getIcon('arrowRight', '', 16)}
          </button>
        </div>

        <div class="materials-grid">
          ${materialCardsHtml}
        </div>
      </section>

      <!-- SECTION: SHORTCUTS -->
      <section>
        <div class="section-header-box">
          <div>
            <h2>Akses Cepat Pembelajaran</h2>
            <p>Jelajahi fitur pendukung untuk memperkuat pengalaman belajarmu</p>
          </div>
        </div>

        <div class="dashboard-shortcuts">
          <div class="shortcut-card" data-nav="media-interaktif">
            <div class="shortcut-icon" style="color: var(--brand-blue);">
              ${window.getIcon('cpu', '', 22)}
            </div>
            <div class="shortcut-text">
              <h4>Media Interaktif Komputer</h4>
              <p>Simulasi klik hardware, CPU, RAM & Task Manager</p>
            </div>
          </div>

          <div class="shortcut-card" data-nav="kuis">
            <div class="shortcut-icon" style="color: var(--accent-purple);">
              ${window.getIcon('helpCircle', '', 22)}
            </div>
            <div class="shortcut-text">
              <h4>Kuis Pemahaman</h4>
              <p>10 soal interaktif dengan feedback jawaban langsung</p>
            </div>
          </div>

          <div class="shortcut-card" data-nav="profil">
            <div class="shortcut-icon" style="color: var(--success);">
              ${window.getIcon('user', '', 22)}
            </div>
            <div class="shortcut-text">
              <h4>Profil & Capaian Belajar</h4>
              <p>Kompetensi Informatika Kurikulum Merdeka Fase F</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
};
