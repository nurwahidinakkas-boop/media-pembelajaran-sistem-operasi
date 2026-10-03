// Materials Overview Page Component
window.renderMaterials = function() {
  const state = window.store.getState();
  const materials = window.MateriData;

  const cardsHtml = materials.map(m => {
    const isRead = state.materialsRead[m.id];
    
    // Outline items preview
    const outlineItems = {
      1: [
        "Pengertian Sistem Operasi",
        "Peran Sistem Operasi pada Komputer",
        "Hubungan Sederhana: Pengguna, OS, Aplikasi, Hardware",
        "Contoh Sistem Operasi (Windows, Linux, macOS, Android, iOS)",
        "Contoh dalam Kehidupan Sehari-hari & Tahukah Kamu?"
      ],
      2: [
        "1. Sistem Operasi Desktop (Komputer & Laptop)",
        "2. Sistem Operasi Mobile (Smartphone & Tablet)",
        "3. Sistem Operasi Server (Komputer Server & Jaringan)",
        "4. Sistem Operasi Embedded (Perangkat Khusus: ATM, Router, Smart TV)",
        "Tabel Perbandingan Jenis Sistem Operasi"
      ],
      3: [
        "1. Mengelola Perangkat Keras (CPU, RAM, Harddisk/SSD, Keyboard, Mouse, Printer)",
        "2. Mengelola File (Membuat, Menyimpan, Membuka, Memindahkan File)",
        "3. Mengelola Aplikasi (Menjalankan Aplikasi Bersamaan)",
        "4. Mengelola Memori (Mengatur Penggunaan RAM)",
        "5. Menyediakan Antarmuka Pengguna (Menu, Ikon, Tombol, Jendela)",
        "6. Mengatur Keamanan (Password, Hak Akses, Penguncian, Izin Aplikasi)"
      ]
    }[m.id] || [];

    const outlineListHtml = outlineItems.map(item => `
      <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; font-size: 0.86rem; color: #475569;">
        <span style="color: var(--brand-blue);">${window.getIcon('check', '', 14)}</span>
        <span>${item}</span>
      </li>
    `).join('');

    return `
      <div class="card" style="padding: 2.25rem; display: flex; flex-direction: column; justify-content: space-between; border-top: 4px solid var(--brand-blue);">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span class="mat-number-badge">Materi ${m.number}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem;">
              ${window.getIcon('activity', '', 14)}
              <span>Estimasi ${m.readTime}</span>
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
            <div class="mat-icon-wrapper" style="width: 54px; height: 54px; flex-shrink: 0;">
              ${window.getIcon(m.icon, '', 28)}
            </div>
            <div>
              <h2 style="font-size: 1.35rem; line-height: 1.25; margin-bottom: 0.25rem;">${m.title}</h2>
              <span style="font-size: 0.82rem; color: var(--accent-purple); font-weight: 600;">${m.subtitle}</span>
            </div>
          </div>

          <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.55; margin-bottom: 1.5rem;">
            ${m.summary}
          </p>

          <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1.75rem;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--primary-navy); letter-spacing: 0.04em; margin-bottom: 0.75rem; font-weight: 700;">
              Pokok Bahasan Materi:
            </h4>
            <ul style="list-style: none;">
              ${outlineListHtml}
            </ul>
          </div>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border-color); margin-bottom: 1.25rem;">
            <span style="font-size: 0.82rem; color: var(--text-muted);">Status Pembelajaran:</span>
            <span class="mat-status-tag ${isRead ? 'done' : 'undone'}">
              ${window.getIcon(isRead ? 'checkCircle' : 'helpCircle', '', 14)}
              <span>${isRead ? 'Selesai Dipelajari' : 'Belum Dipelajari'}</span>
            </span>
          </div>

          <button class="btn btn-primary" style="width: 100%;" data-action="learn-materi" data-id="${m.id}">
            <span>${isRead ? 'Buka Kembali Materi' : 'Mulai Pelajari Materi'}</span>
            ${window.getIcon('arrowRight', '', 16)}
          </button>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="materials-overview-container fade-in">
      <div class="page-header">
        <h1 class="page-title">Materi Sistem Operasi</h1>
        <p class="page-subtitle">
          Tiga pilar kurikulum informatika kelas XI untuk menguasai arsitektur dan fungsionalitas sistem operasi komputer modern.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 2.5rem;">
        ${cardsHtml}
      </div>

      <div style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%); border: 1px dashed rgba(56, 189, 248, 0.6); border-radius: var(--radius-xl); padding: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem;">
        <div>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem;">Ingin Menguji Teori dengan Praktik Virtual?</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">
            Kunjungi media pembelajaran interaktif untuk mensimulasikan manajemen CPU, RAM, dan penyimpanan secara visual.
          </p>
        </div>
        <button class="btn btn-primary" data-nav="media-interaktif">
          ${window.getIcon('cpu', '', 16)}
          <span>Media Interaktif Komputer</span>
        </button>
      </div>
    </div>
  `;
};
