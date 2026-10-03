// Instructions (Petunjuk Penggunaan) Component
window.renderInstructions = function() {
  const steps = [
    {
      num: '01',
      title: 'Pilih Materi',
      badge: 'Langkah Pertama',
      desc: 'Pilih materi yang ingin dipelajari dari tiga topik utama: Pengertian Sistem Operasi, Jenis-Jenis Sistem Operasi, atau Fungsi Sistem Operasi.',
      icon: 'bookOpen',
      actionPage: 'materi',
      actionText: 'Buka Materi'
    },
    {
      num: '02',
      title: 'Pelajari Materi',
      badge: 'Literasi Digital',
      desc: 'Baca materi dengan saksama. Pahami konsep dasar, ilustrasi diagram alir, dan contoh kasus nyata dalam kehidupan sehari-hari.',
      icon: 'layers',
      actionPage: 'materi',
      actionText: 'Baca Materi 1'
    },
    {
      num: '03',
      title: 'Media Interaktif',
      badge: 'Praktik Virtual',
      desc: 'Gunakan media komputer interaktif untuk memperkuat pemahaman. Klik komponen CPU, RAM, SSD, dan simulasikan bagaimana OS mengatur aplikasi secara langsung.',
      icon: 'cpu',
      actionPage: 'media-interaktif',
      actionText: 'Coba Media Interaktif'
    },
    {
      num: '04',
      title: 'Kerjakan Kuis',
      badge: 'Latihan Formatif',
      desc: 'Jawab 10 pertanyaan pilihan ganda untuk menguji pemahamanmu. Dapatkan feedback instan dan pembahasan lengkap di setiap soal.',
      icon: 'helpCircle',
      actionPage: 'kuis',
      actionText: 'Buka Kuis'
    },
    {
      num: '05',
      title: 'Evaluasi',
      badge: 'Uji Kompetensi',
      desc: 'Kerjakan evaluasi komprehensif 10 soal studi kasus untuk mengukur ketercapaian hasil belajarmu secara mandiri dan objektif.',
      icon: 'clipboardList',
      actionPage: 'evaluasi',
      actionText: 'Buka Evaluasi'
    },
    {
      num: '06',
      title: 'Lihat Hasil',
      badge: 'Refleksi Belajar',
      desc: 'Lihat skor akhir, persentase kelulusan, analisis diagnostik tiap topik materi, dan peroleh rekomendasi belajar terarah untuk peningkatan.',
      icon: 'award',
      actionPage: 'hasil',
      actionText: 'Lihat Halaman Hasil'
    }
  ];

  const stepsHtml = steps.map(step => `
    <div class="step-card">
      <div class="step-number-circle">${step.num}</div>
      <div class="step-content">
        <div class="step-header">
          <h3 class="step-title">${step.title}</h3>
          <span class="step-badge">${step.badge}</span>
        </div>
        <p class="step-desc">${step.desc}</p>
        <div style="margin-top: 0.85rem;">
          <button class="btn btn-outline-primary btn-sm" data-nav="${step.actionPage}">
            ${window.getIcon(step.icon, '', 14)}
            <span>${step.actionText}</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="instructions-container fade-in">
      <div class="page-header" style="text-align: center; max-width: 650px; margin: 0 auto 2.5rem;">
        <h1 class="page-title">Petunjuk Penggunaan</h1>
        <p class="page-subtitle">
          Ikuti alur pembelajaran terstruktur berikut agar proses belajar materi Sistem Operasi menjadi lebih efektif, menyenangkan, dan tuntas.
        </p>
      </div>

      <div class="timeline-steps">
        ${stepsHtml}
      </div>

      <div style="text-align: center; margin-top: 3rem;">
        <button class="btn btn-primary btn-lg" data-nav="materi">
          ${window.getIcon('play', '', 18)}
          <span>Mulai Belajar Sekarang</span>
        </button>
      </div>
    </div>
  `;
};
