// Finished (Pembelajaran Selesai) Component
window.renderFinished = function() {
  const state = window.store.getState();
  const score = state.evaluation.score || 0;
  const studentName = state.studentName || 'Siswa Hebat XI SMA';

  const todayStr = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return `
    <div class="finished-container fade-in">
      <!-- Celebration Hero -->
      <section class="finished-hero-card">
        <div class="confetti-icon">
          ${window.getIcon('award', '', 36)}
        </div>
        <h1>Pembelajaran Selesai!</h1>
        <p>Terima kasih telah menyelesaikan seluruh rangkaian media pembelajaran Sistem Operasi.</p>

        <div style="display: inline-flex; align-items: center; gap: 0.75rem; background: rgba(255, 255, 255, 0.15); padding: 0.6rem 1.4rem; border-radius: 99px; backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.2);">
          <span style="color: #cbd5e1; font-size: 0.9rem;">Skor Terakhir Evaluasi:</span>
          <strong style="color: #38bdf8; font-size: 1.3rem;">${score} / 100</strong>
        </div>
      </section>

      <!-- Digital Certificate of Completion Card -->
      <section class="certificate-card" id="digital-certificate">
        <div class="cert-watermark">
          ${window.getIcon('cpu', '', 200)}
        </div>

        <div class="cert-header">
          <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--accent-purple); text-transform: uppercase; margin-bottom: 0.4rem;">
            Sertifikat Kelulusan Modul Digital
          </div>
          <h3>Media Pembelajaran Interaktif</h3>
          <p>Mata Pelajaran Informatika — Fase F (Kelas XI SMA)</p>
        </div>

        <div style="margin: 1.5rem 0 0.5rem;">
          <div style="font-size: 0.85rem; color: var(--text-muted);">Diberikan kepada:</div>
          <div class="cert-student-name" id="cert-name-display" contenteditable="true" title="Klik untuk mengubah nama kamu">
            ${studentName}
          </div>
          <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem;">(Klik nama di atas untuk mengetik namamu sendiri)</div>
        </div>

        <div class="cert-desc">
          Telah berhasil mempelajari pengertian, jenis-jenis, dan fungsi sistem operasi, serta menyelesaikan simulasi virtual dan evaluasi pembelajaran dengan skor <strong>${score} / 100</strong>.
        </div>

        <div class="cert-footer">
          <div style="text-align: left;">
            <div>Tanggal Penyelesaian:</div>
            <strong style="color: var(--primary-navy);">${todayStr}</strong>
          </div>

          <div style="text-align: center;">
            <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px dashed var(--brand-blue); display: flex; align-items: center; justify-content: center; margin: 0 auto 0.25rem; color: var(--brand-blue);">
              ${window.getIcon('shield', '', 22)}
            </div>
            <span style="font-size: 0.7rem; font-weight: 700; color: var(--brand-blue);">TERVERIFIKASI</span>
          </div>

          <div style="text-align: right;">
            <div>Media Kurikulum:</div>
            <strong style="color: var(--primary-navy);">Informatika XI SMA</strong>
          </div>
        </div>
      </section>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem;">
        <button class="btn btn-secondary" onclick="window.print()">
          ${window.getIcon('fileText', '', 16)}
          <span>Cetak / Simpan Sertifikat</span>
        </button>

        <button class="btn btn-primary btn-lg" data-nav="dashboard">
          ${window.getIcon('home', '', 18)}
          <span>Kembali ke Dashboard</span>
        </button>
      </div>
    </div>
  `;
};
