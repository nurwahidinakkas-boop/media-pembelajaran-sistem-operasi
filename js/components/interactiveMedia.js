// Interactive Computer & OS Architecture Media Component
(function() {
  // Simulator internal state
  window.simState = {
    selectedPart: 'cpu',
    runningApps: {
      chrome: true,
      vscode: false,
      spotify: true,
      game: false
    }
  };

  const partsData = {
    cpu: {
      title: 'CPU (Central Processing Unit)',
      role: 'Fungsi 1: Mengelola Perangkat Keras (CPU)',
      icon: 'cpu',
      color: 'blue',
      badge: 'Pengolahan Proses',
      desc: 'Sistem operasi mengatur penggunaan CPU agar proses komputer dapat berjalan.',
      analogy: 'Ketika kamu membuka aplikasi, sistem operasi mengalokasikan waktu CPU agar instruksi dan perintah aplikasi tersebut dapat diproses oleh komputer dengan lancar.',
      metrics: [
        { label: 'Fungsi Utama', value: 'Mengatur Penggunaan CPU' },
        { label: 'Tujuan', value: 'Memastikan proses komputer berjalan' },
        { label: 'Kategori', value: 'Pengelolaan Perangkat Keras' }
      ]
    },
    ram: {
      title: 'RAM (Random Access Memory)',
      role: 'Fungsi 4: Mengelola Memori',
      icon: 'ram',
      color: 'purple',
      badge: 'Memori Kerja',
      desc: 'Sistem operasi mengatur penggunaan RAM oleh aplikasi yang sedang berjalan.',
      analogy: 'Ketika beberapa aplikasi dibuka secara bersamaan, sistem operasi membagi dan mengatur penggunaan RAM agar setiap aplikasi dapat bekerja dengan baik tanpa hambatan.',
      metrics: [
        { label: 'Fungsi Utama', value: 'Mengatur Penggunaan RAM' },
        { label: 'Tujuan', value: 'Aplikasi berjalan optimal bersamaan' },
        { label: 'Kategori', value: 'Pengelolaan Memori' }
      ]
    },
    ssd: {
      title: 'SSD / Penyimpanan',
      role: 'Fungsi 2: Mengelola File',
      icon: 'storage',
      color: 'emerald',
      badge: 'Penyimpanan File',
      desc: 'Sistem operasi membantu mengatur penyimpanan dan pengelolaan file.',
      analogy: 'Sistem operasi membantu pengguna membuat, menyimpan, membuka, memindahkan, menyalin, dan menghapus file (misalnya saat menyimpan file Tugas_Informatika.docx).',
      metrics: [
        { label: 'Fungsi Utama', value: 'Pengelolaan File & Folder' },
        { label: 'Tindakan', value: 'Membuat, menyimpan, memindahkan file' },
        { label: 'Kategori', value: 'Pengelolaan File' }
      ]
    },
    chipset: {
      title: 'Chipset I/O',
      role: 'Penghubung CPU dengan perangkat input/output',
      icon: 'microchip',
      color: 'amber',
      badge: 'Pengatur Jalur Data',
      desc: 'Chipset I/O membantu menyediakan jalur komunikasi antara prosesor dan perangkat seperti keyboard, USB, audio, atau jaringan. Chipset adalah bagian perangkat keras; sistem operasi berkomunikasi dengan perangkat melalui driver.',
      analogy: 'Bayangkan chipset seperti persimpangan jalan yang mengarahkan lalu lintas data ke jalur yang tepat. Sistem operasi mengatur cara aplikasi menggunakan perangkat, sedangkan chipset dan pengendalinya membantu data melewati jalur perangkat keras.',
      metrics: [
        { label: 'Fungsi Utama', value: 'Menghubungkan CPU dan perangkat I/O' },
        { label: 'Contoh Perangkat', value: 'Keyboard, USB, audio, jaringan' },
        { label: 'Jenis Komponen', value: 'Perangkat keras motherboard' }
      ]
    },
    keyboard: {
      title: 'Keyboard & Input Pengguna',
      role: 'Fungsi 1: Mengelola Perangkat Keras (Input)',
      icon: 'keyboard',
      color: 'sky',
      badge: 'Penerima Input',
      desc: 'Sistem operasi menerima dan mengelola input dari keyboard.',
      analogy: 'Ketika siswa mengetik menggunakan keyboard atau menggerakkan mouse, sistem operasi membantu menerima input tersebut agar dapat diproses oleh komputer.',
      metrics: [
        { label: 'Fungsi Utama', value: 'Menerima & Mengelola Input' },
        { label: 'Perangkat', value: 'Keyboard, Mouse, dan Printer' },
        { label: 'Kategori', value: 'Pengelolaan Perangkat Keras' }
      ]
    },
    screen: {
      title: 'Aplikasi & Antarmuka Komputer',
      role: 'Fungsi 3: Mengelola Aplikasi',
      icon: 'monitor',
      color: 'indigo',
      badge: 'Eksekusi Aplikasi',
      desc: 'Sistem operasi membantu menjalankan dan mengatur aplikasi.',
      analogy: 'Ketika siswa membuka browser dan Microsoft Word secara bersamaan, sistem operasi memungkinkan aplikasi dijalankan dan menggunakan sumber daya komputer.',
      metrics: [
        { label: 'Fungsi Utama', value: 'Menjalankan & Mengatur Aplikasi' },
        { label: 'Tampilan', value: 'Menu, Ikon, Tombol, Jendela' },
        { label: 'Kategori', value: 'Pengelolaan Aplikasi & Antarmuka' }
      ]
    },
    security: {
      title: 'Keamanan Data & Perangkat',
      role: 'Fungsi 6: Mengatur Keamanan',
      icon: 'shield',
      color: 'rose',
      badge: 'Perlindungan Sistem',
      desc: 'Sistem operasi menyediakan fitur untuk membantu melindungi data dan perangkat.',
      analogy: 'Sistem operasi membantu melindungi perangkat dan data melalui fitur keamanan seperti password, hak akses pengguna, penguncian perangkat, dan izin aplikasi.',
      metrics: [
        { label: 'Fungsi Utama', value: 'Melindungi Perangkat & Data' },
        { label: 'Fitur', value: 'Password, Hak Akses, Izin Aplikasi' },
        { label: 'Kategori', value: 'Pengaturan Keamanan' }
      ]
    }
  };

  window.renderInteractiveMedia = function() {
    const activePartKey = window.simState.selectedPart || 'cpu';
    const activePart = partsData[activePartKey];

    // Calculate simulated resource metrics
    let ramUsed = 2.2; // Base OS load in GB
    let cpuLoad = 12; // Base OS load in %

    if (window.simState.runningApps.chrome) { ramUsed += 2.0; cpuLoad += 18; }
    if (window.simState.runningApps.vscode) { ramUsed += 1.4; cpuLoad += 14; }
    if (window.simState.runningApps.spotify) { ramUsed += 0.8; cpuLoad += 8; }
    if (window.simState.runningApps.game) { ramUsed += 3.2; cpuLoad += 45; }

    const ramPercent = Math.min(100, Math.round((ramUsed / 8.0) * 100));
    const cpuPercent = Math.min(100, Math.round(cpuLoad));

    const ramStatusClass = ramPercent > 85 ? 'danger' : (ramPercent > 65 ? 'warn' : 'normal');
    const cpuStatusClass = cpuPercent > 80 ? 'danger' : (cpuPercent > 50 ? 'warn' : 'normal');

    // Parts Hotspots Grid HTML
    const hotspotButtons = [
      { key: 'cpu', label: 'CPU', icon: 'cpu' },
      { key: 'ram', label: 'RAM', icon: 'ram' },
      { key: 'ssd', label: 'SSD / Penyimpanan', icon: 'storage' },
      { key: 'chipset', label: 'Chipset I/O', icon: 'microchip' },
      { key: 'keyboard', label: 'Keyboard', icon: 'keyboard' },
      { key: 'screen', label: 'Aplikasi', icon: 'monitor' },
      { key: 'security', label: 'Keamanan', icon: 'shield' }
    ].map(p => `
      <button class="hotspot-btn ${activePartKey === p.key ? 'active' : ''}" data-part="${p.key}">
        <span class="hotspot-icon">${window.getIcon(p.icon, '', 28)}</span>
        <span class="hotspot-label">${p.label}</span>
      </button>
    `).join('');

    return `
      <div class="interactive-media-container fade-in">
        <!-- Title & Subtitle Banner -->
        <div class="sim-control-banner">
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.8rem; color: #38bdf8; font-weight: 600; margin-bottom: 0.75rem;">
            ${window.getIcon('zap', '', 14)}
            <span>Laboratorium Komputasi Virtual</span>
          </div>
          <h2>Media Pembelajaran Interaktif Sistem Komputer</h2>
          <p>
            Klik komponen komputer di bawah ini untuk melihat peran langsung sistem operasi dalam mengatur sumber daya perangkat keras dan aplikasi.
          </p>
        </div>

        <!-- MAIN INTERACTIVE RIG -->
        <div class="interactive-rig-grid">
          <!-- LEFT: COMPUTER INTERACTIVE STAGE -->
          <div class="computer-visual-stage">
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 1rem;">
              <h3 style="font-size: 1.15rem; color: var(--primary-navy); display: flex; align-items: center; gap: 0.5rem;">
                ${window.getIcon('monitor', '', 20)}
                <span>Pilih Komponen untuk Dianalisis:</span>
              </h3>
              <span style="font-size: 0.8rem; background: var(--brand-blue-subtle); color: var(--brand-blue); padding: 0.2rem 0.6rem; border-radius: 99px; font-weight: 600;">
                Klik Tombol Komponen
              </span>
            </div>

            <!-- Motherboard & Hardware Stylized Vector Box -->
            <div style="width: 100%; background: #0f172a; border-radius: var(--radius-lg); padding: 1.5rem; border: 2px solid #334155; position: relative; overflow: hidden; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);">
              <!-- Motherboard PCB Circuit Trace Lines -->
              <svg viewBox="0 0 400 180" style="width: 100%; height: auto;" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Circuit traces -->
                <path d="M 40 40 L 120 40 L 150 70 L 250 70" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
                <path d="M 80 140 L 160 140 L 190 100 L 320 100" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
                <path d="M 280 40 L 360 40 L 360 120" stroke="#10b981" stroke-width="1.5" opacity="0.4"/>
                
                <!-- Hardware components are also selectable directly in the diagram. -->
                <g class="hardware-part" data-part="cpu" role="button" tabindex="0" aria-label="Pilih CPU" aria-pressed="${activePartKey === 'cpu'}">
                  <rect x="50" y="55" width="80" height="70" rx="8" fill="#1e293b" stroke="${activePartKey === 'cpu' ? '#38bdf8' : '#475569'}" stroke-width="${activePartKey === 'cpu' ? '3' : '1.5'}"/>
                  <rect x="68" y="73" width="44" height="34" rx="4" fill="${activePartKey === 'cpu' ? '#0284c7' : '#0f172a'}"/>
                  <text x="76" y="94" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace">CPU</text>
                </g>

                <g class="hardware-part" data-part="ram" role="button" tabindex="0" aria-label="Pilih RAM" aria-pressed="${activePartKey === 'ram'}">
                  <rect class="hardware-hit-area" x="155" y="25" width="53" height="130"/>
                  <rect x="160" y="30" width="18" height="120" rx="3" fill="#1e293b" stroke="${activePartKey === 'ram' ? '#a855f7' : '#475569'}" stroke-width="${activePartKey === 'ram' ? '3' : '1.5'}"/>
                  <rect x="185" y="30" width="18" height="120" rx="3" fill="#1e293b" stroke="${activePartKey === 'ram' ? '#a855f7' : '#475569'}" stroke-width="${activePartKey === 'ram' ? '3' : '1.5'}"/>
                  <text x="181.5" y="165" fill="#a855f7" font-size="10" font-weight="bold" text-anchor="middle">RAM 8GB</text>
                </g>

                <g class="hardware-part" data-part="ssd" role="button" tabindex="0" aria-label="Pilih SSD" aria-pressed="${activePartKey === 'ssd'}">
                  <rect x="235" y="45" width="90" height="35" rx="4" fill="#1e293b" stroke="${activePartKey === 'ssd' ? '#10b981' : '#475569'}" stroke-width="${activePartKey === 'ssd' ? '3' : '1.5'}"/>
                  <text x="250" y="67" fill="#34d399" font-size="10" font-weight="bold">SSD NVMe</text>
                </g>

                <g class="hardware-part" data-part="chipset" role="button" tabindex="0" aria-label="Pilih Chipset I/O" aria-pressed="${activePartKey === 'chipset'}">
                  <rect class="hardware-hit-area" x="230" y="95" width="100" height="55"/>
                  <rect x="235" y="100" width="90" height="45" rx="4" fill="#1e293b" stroke="${activePartKey === 'chipset' ? '#f59e0b' : (activePartKey === 'keyboard' || activePartKey === 'screen' ? '#fbbf24' : '#475569')}" stroke-width="${activePartKey === 'chipset' ? '3' : '1.5'}"/>
                  <text x="245" y="126" fill="#fbbf24" font-size="9" font-weight="bold">CHIPSET I/O</text>
                </g>

                <text x="340" y="13" fill="#94a3b8" font-size="7" font-weight="bold">INPUT &amp; OS</text>

                <g class="hardware-part" data-part="keyboard" role="button" tabindex="0" aria-label="Pilih Keyboard" aria-pressed="${activePartKey === 'keyboard'}">
                  <rect class="hardware-hit-area" x="335" y="16" width="60" height="47"/>
                  <rect x="340" y="20" width="48" height="28" rx="4" fill="#1e293b" stroke="${activePartKey === 'keyboard' ? '#f59e0b' : '#64748b'}" stroke-width="${activePartKey === 'keyboard' ? '3' : '1.5'}"/>
                  <path d="M347 27h34M347 33h34M350 39h28" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round"/>
                  <text x="351" y="58" fill="#cbd5e1" font-size="7" font-weight="bold">KEYBOARD</text>
                </g>

                <g class="hardware-part" data-part="screen" role="button" tabindex="0" aria-label="Pilih Aplikasi" aria-pressed="${activePartKey === 'screen'}">
                  <rect class="hardware-hit-area" x="335" y="64" width="60" height="50"/>
                  <rect x="343" y="69" width="42" height="29" rx="3" fill="#1e293b" stroke="${activePartKey === 'screen' ? '#6366f1' : '#64748b'}" stroke-width="${activePartKey === 'screen' ? '3' : '1.5'}"/>
                  <text x="352" y="87" fill="#c7d2fe" font-size="8" font-weight="bold">APPS</text>
                  <path d="M364 98v5m-9 0h18" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round"/>
                </g>

                <g class="hardware-part" data-part="security" role="button" tabindex="0" aria-label="Pilih Keamanan" aria-pressed="${activePartKey === 'security'}">
                  <rect class="hardware-hit-area" x="335" y="113" width="60" height="48"/>
                  <path d="M365 117l15 5v10c0 10-6 17-15 22-9-5-15-12-15-22v-10z" fill="#1e293b" stroke="${activePartKey === 'security' ? '#f43f5e' : '#64748b'}" stroke-width="${activePartKey === 'security' ? '3' : '1.5'}" stroke-linejoin="round"/>
                  <text x="354" y="138" fill="#fecdd3" font-size="7" font-weight="bold">SECURE</text>
                </g>

                <!-- Status LED -->
                <circle cx="42" cy="167" r="4" fill="#10b981">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                </circle>
                <text x="51" y="170" fill="#94a3b8" font-size="8">OS ACTIVE</text>
              </svg>
            </div>

            <!-- Hotspots Click Grid -->
            <div class="computer-hotspots-grid">
              ${hotspotButtons}
            </div>
          </div>

          <!-- RIGHT: COMPONENT INSPECTOR PANEL -->
          <div class="inspector-panel">
            <div class="inspector-header">
              <div class="inspector-icon">
                ${window.getIcon(activePart.icon, '', 28)}
              </div>
              <div>
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-purple); text-transform: uppercase;">
                  ${activePart.badge}
                </span>
                <h3 style="color: var(--primary-navy); margin-top: 0.15rem;">${activePart.title}</h3>
                <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">
                  ${activePart.role}
                </span>
              </div>
            </div>

            <div class="inspector-body">
              <p style="margin-bottom: 1rem;">
                ${activePart.desc}
              </p>

              <div class="inspector-highlight">
                <strong style="color: var(--primary-navy); display: block; margin-bottom: 0.35rem;">
                  💡 Analogi Sehari-hari Siswa SMA:
                </strong>
                ${activePart.analogy}
              </div>

              <div style="margin-top: 1.5rem;">
                <h4 style="font-size: 0.88rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-bottom: 0.75rem;">
                  Spesifikasi Pengelolaan Sistem:
                </h4>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  ${activePart.metrics.map(m => `
                    <div style="display: flex; justify-content: space-between; font-size: 0.84rem; background: #f8fafc; padding: 0.6rem 0.85rem; border-radius: 6px; border: 1px solid var(--border-color);">
                      <span style="color: #64748b;">${m.label}:</span>
                      <strong style="color: var(--primary-navy);">${m.value}</strong>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SIMULASI REAL-TIME TASK MANAGER -->
        <div class="task-manager-box">
          <div class="tm-header">
            <div>
              <h3 style="font-size: 1.25rem; color: var(--primary-navy); display: flex; align-items: center; gap: 0.5rem;">
                ${window.getIcon('activity', '', 22)}
                <span>Simulasi Interaktif Task Manager Sistem Operasi</span>
              </h3>
              <p style="font-size: 0.88rem; color: var(--text-muted);">
                Buka dan tutup aplikasi di bawah ini untuk melihat bagaimana Sistem Operasi membagi inti CPU dan mempartisi memori RAM secara real-time!
              </p>
            </div>
            <span style="font-size: 0.78rem; font-family: monospace; background: #0f172a; color: #38bdf8; padding: 0.4rem 0.8rem; border-radius: 6px;">
              OS_MONITOR_ACTIVE
            </span>
          </div>

          <!-- Gauges Row -->
          <div class="tm-gauges-row">
            <!-- CPU Gauge -->
            <div class="gauge-card">
              <div class="gauge-header">
                <span>Penggunaan CPU (Processor Load)</span>
                <strong style="color: ${cpuPercent > 80 ? 'var(--danger)' : 'var(--brand-blue)'};">${cpuPercent}%</strong>
              </div>
              <div class="gauge-bar-track">
                <div class="gauge-bar-fill ${cpuStatusClass}" style="width: ${cpuPercent}%;"></div>
              </div>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.5rem;">
                OS menjadwalkan pembagian milidetik core prosesor secara adil.
              </div>
            </div>

            <!-- RAM Gauge -->
            <div class="gauge-card">
              <div class="gauge-header">
                <span>Alokasi Memori RAM (${ramUsed.toFixed(1)} / 8.0 GB)</span>
                <strong style="color: ${ramPercent > 85 ? 'var(--danger)' : 'var(--accent-purple)'};">${ramPercent}%</strong>
              </div>
              <div class="gauge-bar-track">
                <div class="gauge-bar-fill ${ramStatusClass}" style="width: ${ramPercent}%;"></div>
              </div>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.5rem;">
                ${ramPercent > 80 ? '⚠️ RAM hampir penuh! OS siap mengaktifkan Virtual Memory (Swap).' : 'Memori terlindungi dalam ruang isolasi aman.'}
              </div>
            </div>
          </div>

          <!-- App Launcher Buttons -->
          <div>
            <h4 style="font-size: 0.9rem; margin-bottom: 0.6rem; color: var(--primary-navy);">
              Kontrol Aplikasi Berjalan (Klik untuk Buka/Tutup):
            </h4>
            <div class="app-launcher-row">
              <button class="app-btn-toggle ${window.simState.runningApps.chrome ? 'running' : ''}" data-app="chrome">
                <span>${window.simState.runningApps.chrome ? '🟢' : '⚪'}</span>
                <span>Google Chrome (Web Browser)</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">(+2.0 GB RAM)</span>
              </button>

              <button class="app-btn-toggle ${window.simState.runningApps.vscode ? 'running' : ''}" data-app="vscode">
                <span>${window.simState.runningApps.vscode ? '🟢' : '⚪'}</span>
                <span>VS Code (Editor Pemrograman)</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">(+1.4 GB RAM)</span>
              </button>

              <button class="app-btn-toggle ${window.simState.runningApps.spotify ? 'running' : ''}" data-app="spotify">
                <span>${window.simState.runningApps.spotify ? '🟢' : '⚪'}</span>
                <span>Spotify (Pemutar Audio)</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">(+0.8 GB RAM)</span>
              </button>

              <button class="app-btn-toggle ${window.simState.runningApps.game ? 'running' : ''}" data-app="game">
                <span>${window.simState.runningApps.game ? '🟢' : '⚪'}</span>
                <span>Game 3D Grafis Berat</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">(+3.2 GB RAM, 45% CPU)</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Next to Quiz Call to Action -->
        <div style="background: white; border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2.25rem; text-align: center; box-shadow: var(--shadow-md);">
          <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--primary-navy);">
            Pemahamanmu Semakin Kuat!
          </h3>
          <p style="color: var(--text-muted); max-width: 580px; margin: 0 auto 1.5rem; font-size: 0.95rem;">
            Kamu telah mengeksplorasi materi sistem operasi dan mencoba interaksi perangkat keras secara langsung. Sekarang saatnya menguji pengetahuanmu lewat kuis interaktif.
          </p>
          <button class="btn btn-primary btn-lg" id="btn-next-to-quiz">
            <span>Lanjut ke Kuis</span>
            ${window.getIcon('arrowRight', '', 18)}
          </button>
        </div>
      </div>
    `;
  };
})();
