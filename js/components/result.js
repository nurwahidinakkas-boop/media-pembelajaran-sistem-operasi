// Evaluation Result & Diagnostic Recommendations Component
window.renderResult = function() {
  const state = window.store.getState();
  const ev = state.evaluation;
  const questions = window.EvaluationQuestions;
  const total = questions.length;

  const score = ev.score || 0;
  const correct = ev.correctCount || 0;
  const incorrect = ev.incorrectCount !== undefined ? ev.incorrectCount : (total - correct);
  const percentage = ev.percentage || score;

  // Grade predicate logic
  let gradeText = 'Perlu Peningkatan';
  let gradeClass = 'perlu-peningkatan';
  let feedbackMessage = 'Tetap semangat! Perbanyak membaca dan lakukan simulasi ulang pada materi yang belum dikuasai.';

  if (score >= 90) {
    gradeText = 'Sangat Baik';
    gradeClass = 'sangat-baik';
    feedbackMessage = 'Luar biasa! Kamu telah menguasai konsep, klasifikasi, dan fungsi sistem operasi dengan sangat matang.';
  } else if (score >= 80) {
    gradeText = 'Baik';
    gradeClass = 'baik';
    feedbackMessage = 'Bagus sekali! Pemahamanmu terhadap sistem operasi sudah solid. Tinjau kembali beberapa poin kecil untuk hasil sempurna.';
  } else if (score >= 70) {
    gradeText = 'Cukup Baik';
    gradeClass = 'cukup-baik';
    feedbackMessage = 'Cukup baik. Namun masih ada beberapa konsep penting yang perlu kamu pelajari kembali agar pemahamanmu semakin kuat.';
  }

  // SVG Ring Chart calculations
  const radius = 70;
  const circumference = 2 * Math.PI * radius; // approx 439.82
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  // Diagnostic Recommendations per Topic
  const topicStats = ev.topicResults || {};
  const recItems = [];

  [1, 2, 3].forEach(tId => {
    const stats = topicStats[tId];
    if (stats) {
      const isWeak = stats.correct < stats.total;
      recItems.push({
        id: tId,
        name: stats.name,
        correct: stats.correct,
        total: stats.total,
        isWeak: isWeak
      });
    }
  });

  const recCardsHtml = recItems.map(item => `
    <div class="rec-item" style="border-left: 4px solid ${item.isWeak ? 'var(--warning)' : 'var(--success)'};">
      <div>
        <h4 style="font-size: 0.95rem; color: var(--primary-navy); margin-bottom: 0.2rem;">
          ${item.name}
        </h4>
        <div style="font-size: 0.82rem; color: var(--text-muted);">
          Capaian: <strong>${item.correct} dari ${item.total} Soal Benar</strong> 
          ${item.isWeak ? '<span style="color: var(--warning); margin-left: 0.5rem; font-weight: 600;">(Disarankan review kembali)</span>' : '<span style="color: var(--success); margin-left: 0.5rem; font-weight: 600;">(Sangat Baik ✓)</span>'}
        </div>
      </div>
      <div>
        <button class="btn btn-outline-primary btn-sm" data-action="learn-materi" data-id="${item.id}">
          ${window.getIcon('bookOpen', '', 14)}
          <span>Pelajari Materi ${item.id}</span>
        </button>
      </div>
    </div>
  `).join('');

  // Detailed Review Accordion HTML
  const reviewItemsHtml = questions.map((q, idx) => {
    const userAns = ev.answers[q.id];
    const isUserCorrect = userAns === q.correct;
    const optionLetters = ['A', 'B', 'C', 'D'];

    return `
      <div class="accordion-item" id="eval-rev-${idx}">
        <div class="accordion-header" data-toggle="accordion" data-target="eval-rev-${idx}">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="color: ${isUserCorrect ? 'var(--success)' : 'var(--danger)'};">
              ${window.getIcon(isUserCorrect ? 'checkCircle' : 'xCircle', '', 18)}
            </span>
            <span style="font-size: 0.9rem;">Soal ${idx + 1}: ${q.question.substring(0, 60)}...</span>
          </div>
          <span class="acc-icon">${window.getIcon('chevronDown', '', 16)}</span>
        </div>
        <div class="accordion-body">
          <p style="font-weight: 600; margin-bottom: 0.75rem; color: var(--primary-navy);">${q.question}</p>
          <div style="font-size: 0.85rem; margin-bottom: 0.5rem;">
            Jawaban Kamu: <strong>${userAns !== undefined ? `${optionLetters[userAns]}. ${q.options[userAns]}` : 'Tidak dijawab'}</strong>
            ${isUserCorrect ? '<span style="color: var(--success); font-weight: 700;"> (Benar)</span>' : '<span style="color: var(--danger); font-weight: 700;"> (Salah)</span>'}
          </div>
          ${!isUserCorrect ? `
            <div style="font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--success);">
              Kunci Jawaban yang Benar: <strong>${optionLetters[q.correct]}. ${q.options[q.correct]}</strong>
            </div>
          ` : ''}
          <div style="background: #f8fafc; padding: 0.75rem 1rem; border-radius: 6px; font-size: 0.82rem; color: #475569; margin-top: 0.5rem;">
            <strong>Penjelasan:</strong> ${q.explanation}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="result-container fade-in">
      <div class="page-header" style="text-align: center;">
        <h1 class="page-title">Hasil Evaluasi Pembelajaran</h1>
        <p class="page-subtitle">Ringkasan capaian uji kompetensi topik Sistem Operasi Kelas XI SMA</p>
      </div>

      <!-- Score Ring Chart Card -->
      <div class="result-score-card">
        <!-- SVG Circular Ring Chart -->
        <div class="ring-chart-wrapper">
          <svg class="ring-chart-svg" viewBox="0 0 160 160">
            <circle class="ring-bg" cx="80" cy="80" r="${radius}" />
            <circle class="ring-progress" cx="80" cy="80" r="${radius}" 
                    stroke-dasharray="${circumference}" 
                    stroke-dashoffset="${strokeDashoffset}" />
          </svg>
          <div class="ring-center-text">
            <span class="ring-score-val">${score}</span>
            <span class="ring-score-sub">Skor Akhir</span>
          </div>
        </div>

        <div class="grade-badge-pill ${gradeClass}">
          ${window.getIcon(score >= 80 ? 'award' : 'star', '', 20)}
          <span>Predikat: ${gradeText}</span>
        </div>

        <p style="color: #475569; max-width: 520px; margin: 0 auto 2rem; font-size: 0.95rem; line-height: 1.6;">
          ${feedbackMessage}
        </p>

        <!-- Stats Row -->
        <div class="result-stats-row">
          <div class="res-stat-box">
            <div class="res-stat-num correct">${correct}</div>
            <div class="res-stat-lbl">Jawaban Benar</div>
          </div>
          <div class="res-stat-box">
            <div class="res-stat-num incorrect">${incorrect}</div>
            <div class="res-stat-lbl">Jawaban Salah</div>
          </div>
          <div class="res-stat-box">
            <div class="res-stat-num">${percentage}%</div>
            <div class="res-stat-lbl">Tingkat Akurasi</div>
          </div>
        </div>
      </div>

      <!-- Rekomendasi Belajar -->
      <div class="recommendations-card">
        <h3 style="font-size: 1.15rem; color: var(--primary-navy); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem;">
          ${window.getIcon('compass', '', 20)}
          <span>Rekomendasi Belajar Terarah</span>
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          Berdasarkan hasil analisis jawabanmu, berikut peta kekuatan dan topik yang disarankan untuk ditinjau kembali:
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${recCardsHtml}
        </div>
      </div>

      <!-- Review Jawaban Accordion -->
      <div class="card" style="padding: 1.75rem; margin-bottom: 2rem;">
        <h3 style="font-size: 1.15rem; color: var(--primary-navy); margin-bottom: 0.4rem;">
          Tinjauan & Pembahasan Soal
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          Klik masing-masing soal di bawah untuk melihat kunci jawaban dan pembahasan:
        </p>
        <div class="accordion-group">
          ${reviewItemsHtml}
        </div>
      </div>

      <!-- Section 14: Action Buttons Group -->
      <div class="card" style="padding: 2rem; text-align: center;">
        <h4 style="font-size: 1.05rem; margin-bottom: 1.25rem; color: var(--primary-navy);">
          Pilih Langkah Berikutnya:
        </h4>
        <div class="action-buttons-group">
          <button class="btn btn-secondary" id="btn-retry-eval">
            ${window.getIcon('rotateCcw', '', 16)}
            <span>Ulangi Evaluasi</span>
          </button>

          <button class="btn btn-secondary" data-nav="materi">
            ${window.getIcon('bookOpen', '', 16)}
            <span>Kembali ke Materi</span>
          </button>

          <button class="btn btn-secondary" data-nav="dashboard">
            ${window.getIcon('home', '', 16)}
            <span>Kembali ke Dashboard</span>
          </button>

          <button class="btn btn-primary" data-nav="selesai">
            ${window.getIcon('award', '', 16)}
            <span>Selesai & Ambil Sertifikat</span>
          </button>
        </div>
      </div>
    </div>
  `;
};
