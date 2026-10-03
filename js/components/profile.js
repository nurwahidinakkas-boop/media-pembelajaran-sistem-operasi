// Profile Component
window.renderProfile = function() {
  return `
    <div class="profile-container fade-in">
      <div class="page-header">
        <h1 class="page-title">Profil Media Pembelajaran</h1>
        <p class="page-subtitle">Informasi identitas media pembelajaran interaktif dan capaian kurikulum</p>
      </div>

      <div class="profile-card">
        <div style="display: flex; align-items: center; gap: 1.25rem; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color);">
          <div style="width: 64px; height: 64px; border-radius: var(--radius-lg); background: linear-gradient(135deg, var(--brand-blue) 0%, var(--accent-purple) 100%); color: white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);">
            ${window.getIcon('graduationCap', '', 36)}
          </div>
          <div>
            <h2 style="font-size: 1.45rem; color: var(--primary-navy); margin-bottom: 0.25rem;">
              Media Pembelajaran Interaktif Sistem Operasi
            </h2>
            <span style="font-size: 0.9rem; color: var(--brand-blue); font-weight: 600;">
              Mata Pelajaran Informatika — Fase F
            </span>
          </div>
        </div>

        <!-- Metadata Grid -->
        <div class="profile-meta-grid">
          <div class="meta-field">
            <label>Nama Media</label>
            <span>Media Pembelajaran Interaktif Sistem Operasi</span>
          </div>

          <div class="meta-field">
            <label>Mata Pelajaran</label>
            <span>Informatika</span>
          </div>

          <div class="meta-field">
            <label>Sasaran Kelas</label>
            <span>Kelas XI SMA (Fase F)</span>
          </div>

          <div class="meta-field">
            <label>Topik Bahasan</label>
            <span>Sistem Operasi (Operating System)</span>
          </div>

          <div class="meta-field">
            <label>Elemen Kurikulum</label>
            <span>Sistem Komputer (SK)</span>
          </div>

          <div class="meta-field">
            <label>Pendekatan Desain</label>
            <span>Modern EdTech & Student-Centered Learning</span>
          </div>
        </div>

        <!-- Capaian Pembelajaran & Tujuan -->
        <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2rem;">
          <h3 style="font-size: 1.1rem; color: var(--primary-navy); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            ${window.getIcon('bookOpen', '', 18)}
            <span>Capaian Pembelajaran (Kurikulum Merdeka)</span>
          </h3>
          <p style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 1rem;">
            Pada akhir Fase F (Kelas XI SMA), peserta didik mampu memahami cara kerja sistem komputer, peran sistem operasi sebagai perantara antara pengguna, aplikasi, dan perangkat keras, serta mampu menganalisis mekanisme penjadwalan proses, alokasi memori, dan keamanan berkas.
          </p>
          <div style="font-size: 0.85rem; color: #475569;">
            <strong>Tujuan Pembelajaran:</strong>
            <ol style="margin-top: 0.5rem; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.35rem;">
              <li>Menjelaskan pengertian sistem operasi, peran sistem operasi pada komputer, dan menyebutkan contohnya.</li>
              <li>Menjelaskan jenis-jenis sistem operasi, membedakan berdasarkan perangkat penggunaannya, dan memberikan contohnya.</li>
              <li>Menjelaskan fungsi sistem operasi, mengidentifikasi fungsinya, dan memberikan contoh penerapan fungsi sistem operasi.</li>
            </ol>
          </div>
        </div>

        <!-- Petunjuk Singkat Penggunaan untuk Guru & Siswa -->
        <div>
          <h3 style="font-size: 1.1rem; color: var(--primary-navy); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            ${window.getIcon('info', '', 18)}
            <span>Panduan untuk Siswa & Guru</span>
          </h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            Media ini dirancang tanpa memerlukan instalasi aplikasi tambahan. Seluruh interaksi simulasi, kuis, evaluasi, dan penyimpanan progres berjalan langsung di peramban web siswa dengan menjaga privasi secara penuh tanpa mengumpulkan data pribadi di luar sesi pembelajaran.
          </p>
        </div>
      </div>
    </div>
  `;
};
