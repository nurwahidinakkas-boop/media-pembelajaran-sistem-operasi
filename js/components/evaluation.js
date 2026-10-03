// Evaluation Component (Distinct Formal Assessment Layout)
window.renderEvaluation = function() {
  const state = window.store.getState();
  const evState = state.evaluation;
  const questions = window.EvaluationQuestions;
  const totalQuestions = questions.length;
  const currentIdx = evState.currentIndex || 0;
  const currentQ = questions[currentIdx];

  const answeredCount = Object.keys(evState.answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const optionLetters = ['A', 'B', 'C', 'D'];
  const userSelectedOption = evState.answers[currentQ.id];

  // Palette Grid HTML (1 - 10)
  const paletteButtonsHtml = questions.map((q, idx) => {
    const isCurrent = idx === currentIdx;
    const isAnswered = evState.answers[q.id] !== undefined;

    let btnClass = 'palette-btn';
    if (isAnswered) btnClass += ' answered';
    if (isCurrent) btnClass += ' current';

    return `
      <button class="${btnClass}" data-goto-q="${idx}" title="Nomor ${idx + 1} (${isAnswered ? 'Terjawab' : 'Belum Terjawab'})">
        ${idx + 1}
      </button>
    `;
  }).join('');

  // Options List HTML
  const optionsHtml = currentQ.options.map((opt, optIdx) => {
    const isSelected = userSelectedOption === optIdx;
    return `
      <button class="quiz-opt-btn ${isSelected ? 'selected' : ''}" data-eval-opt="${optIdx}">
        <div class="quiz-opt-letter" style="${isSelected ? 'background: var(--primary-navy); color: white;' : ''}">${optionLetters[optIdx]}</div>
        <div style="flex: 1;">${opt}</div>
      </button>
    `;
  }).join('');

  const isLastQuestion = currentIdx === totalQuestions - 1;

  return `
    <div class="eval-container fade-in">
      <!-- Exam Banner -->
      <div class="eval-exam-banner">
        <div>
          <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(255, 255, 255, 0.15); padding: 0.2rem 0.6rem; border-radius: 99px; font-size: 0.75rem; margin-bottom: 0.4rem;">
            ${window.getIcon('clipboardList', '', 14)}
            <span>Lembar Uji Kompetensi Akhir</span>
          </div>
          <h1 style="font-size: 1.5rem; color: white; margin-bottom: 0.2rem;">Evaluasi Pembelajaran</h1>
          <p style="font-size: 0.85rem; color: #94a3b8;">
            Mata Pelajaran: Informatika | Topik: Sistem Operasi | Kelas XI SMA
          </p>
        </div>

        <div style="text-align: right;">
          <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.25rem;">Progres Pengerjaan:</div>
          <div style="font-size: 1.15rem; font-weight: 700; color: #38bdf8;">
            ${answeredCount} dari ${totalQuestions} Soal Terjawab
          </div>
        </div>
      </div>

      <!-- Exam Layout Grid -->
      <div class="eval-layout-grid">
        <!-- Main Question Pane -->
        <div class="eval-question-pane">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
            <span style="font-size: 0.95rem; font-weight: 700; color: var(--brand-blue);">
              Nomor Soal: ${currentIdx + 1} dari ${totalQuestions}
            </span>
            <span style="font-size: 0.78rem; background: #f1f5f9; color: var(--text-muted); padding: 0.25rem 0.7rem; border-radius: 99px; font-weight: 600;">
              ${currentQ.topic}
            </span>
          </div>

          <h2 style="font-size: 1.2rem; font-weight: 700; line-height: 1.5; color: var(--primary-navy); margin-bottom: 1.75rem;">
            ${currentQ.question}
          </h2>

          <div class="quiz-options-list">
            ${optionsHtml}
          </div>

          <!-- Bottom Navigation Controls -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1.5rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 1rem;">
            <button class="btn btn-secondary" id="btn-eval-prev" ${currentIdx === 0 ? 'disabled' : ''}>
              ${window.getIcon('arrowLeft', '', 16)}
              <span>Soal Sebelumnya</span>
            </button>

            <div style="display: flex; gap: 0.75rem;">
              ${isLastQuestion ? `
                <button class="btn btn-success btn-lg" id="btn-submit-eval">
                  ${window.getIcon('checkCircle', '', 18)}
                  <span>Selesaikan Evaluasi</span>
                </button>
              ` : `
                <button class="btn btn-primary" id="btn-eval-next">
                  <span>Soal Berikutnya</span>
                  ${window.getIcon('arrowRight', '', 16)}
                </button>
              `}
            </div>
          </div>
        </div>

        <!-- Question Palette Pane -->
        <div class="eval-palette-pane">
          <h3 style="font-size: 1rem; color: var(--primary-navy); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
            ${window.getIcon('layers', '', 18)}
            <span>Daftar Nomor Soal</span>
          </h3>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            Klik nomor untuk langsung berpindah ke soal terkait:
          </p>

          <div class="palette-grid">
            ${paletteButtonsHtml}
          </div>

          <div class="palette-legend">
            <div class="legend-item">
              <span class="legend-dot" style="background: var(--brand-blue);"></span>
              <span>Sudah Dijawab (${answeredCount})</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #f8fafc; border: 1px solid var(--border-color);"></span>
              <span>Belum Dijawab (${totalQuestions - answeredCount})</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: var(--brand-blue-subtle); border: 1.5px solid var(--brand-blue);"></span>
              <span>Soal Aktif Sekarang</span>
            </div>
          </div>

          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);">
            <button class="btn btn-outline-primary btn-sm" style="width: 100%;" id="btn-eval-finish-quick">
              ${window.getIcon('check', '', 14)}
              <span>Kirim Jawaban Akhir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
};
