// Interactive Quiz Component

window.renderQuiz = function() {
  const state = window.store.getState();
  const qState = state.quiz;
  const questions = window.QuizQuestions;

  const totalQuestions =
    questions.length;

  const isFinished =
    state.quizCompleted;

  // =========================
  // HASIL KUIS
  // =========================

  if (isFinished) {
    const correctCount = qState.score;
    const incorrectCount = totalQuestions - correctCount;
    const bestScore = qState.bestScore || 0;
    const optionLetters = ['A', 'B', 'C', 'D'];
    const answerReviewHtml = questions.map((question, index) => {
      const answerIndex = qState.answers[question.id];
      const isCorrect = answerIndex === question.correct;
      const answerText = answerIndex === undefined
        ? 'Tidak dijawab'
        : `${optionLetters[answerIndex]}. ${question.options[answerIndex]}`;

      return `
        <details class="quiz-review-item ${isCorrect ? 'correct' : 'incorrect'}">
          <summary>
            <span class="quiz-review-status">${window.getIcon(isCorrect ? 'checkCircle' : 'xCircle', '', 18)}</span>
            <strong>Soal ${index + 1}</strong>
            <span class="quiz-review-result">${isCorrect ? 'Benar' : 'Salah'}</span>
            <span class="quiz-review-question">${question.question}</span>
          </summary>
          <div class="quiz-review-detail">
            <p><strong>Jawaban kamu:</strong> ${answerText}</p>
            ${!isCorrect ? `<p><strong>Jawaban benar:</strong> ${optionLetters[question.correct]}. ${question.options[question.correct]}</p>` : ''}
            <p><strong>Pembahasan:</strong> ${question.explanation}</p>
          </div>
        </details>
      `;
    }).join('');
    const topicStats = {};

    questions.forEach(question => {
      const topicId = question.topicId || 1;
      if (!topicStats[topicId]) {
        const materi = window.MateriData.find(item => item.id === topicId);
        topicStats[topicId] = {
          id: topicId,
          title: materi ? materi.title : question.topic,
          total: 0,
          correct: 0
        };
      }

      topicStats[topicId].total++;
      if (qState.answers[question.id] === question.correct) {
        topicStats[topicId].correct++;
      }
    });

    const topicsToReview = Object.values(topicStats)
      .filter(topic => topic.correct < topic.total)
      .map(topic => ({
        ...topic,
        accuracy: topic.correct / topic.total
      }));
    const lowestAccuracy = topicsToReview.length
      ? Math.min(...topicsToReview.map(topic => topic.accuracy))
      : null;
    const priorityTopics = topicsToReview.filter(
      topic => topic.accuracy === lowestAccuracy
    );
    const recommendationsHtml = priorityTopics.length
      ? `
        <div class="quiz-recommendation-list">
          ${priorityTopics.map(topic => `
            <article class="quiz-recommendation-item">
              <div>
                <span class="quiz-recommendation-priority">Materi yang perlu ditinjau</span>
                <p>Kamu perlu mempelajari kembali <strong>Materi ${topic.id}: ${topic.title}</strong> sebelum mengerjakan evaluasi.</p>
                <span class="quiz-recommendation-score">${topic.correct} dari ${topic.total} soal benar pada materi ini</span>
              </div>
              <button class="btn btn-outline-primary btn-sm" data-action="learn-materi" data-id="${topic.id}">
                ${window.getIcon('bookOpen', '', 15)}
                <span>Pelajari Materi</span>
              </button>
            </article>
          `).join('')}
        </div>
      `
      : `
        <p class="quiz-mastery-note">
          Semua jawabanmu benar. Pertahankan pemahaman ini dan lanjutkan ke evaluasi.
        </p>
      `;

    return `
      <div class="quiz-container fade-in">

        <div
          class="card"
          style="
            text-align: center;
            padding: 3.5rem 2rem;
            border-radius: var(--radius-xl);
          "
        >

          <div
            style="
              width: 68px;
              height: 68px;
              border-radius: 50%;
              background: linear-gradient(
                135deg,
                #10b981 0%,
                #34d399 100%
              );
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
              box-shadow:
                0 4px 15px
                rgba(16, 185, 129, 0.35);
            "
          >
            ${window.getIcon(
              'checkCircle',
              '',
              36
            )}
          </div>

          <h2
            style="
              font-size: 1.85rem;
              color: var(--primary-navy);
              margin-bottom: 0.5rem;
            "
          >
            Kuis Berhasil Diselesaikan!
          </h2>

          <p
            style="
              color: var(--text-muted);
              font-size: 1.05rem;
              margin-bottom: 2rem;
            "
          >
            Hebat! Kamu telah menyelesaikan
            seluruh 10 soal kuis formatif
            Sistem Operasi.
          </p>

          <div
            style="
              background: #f8fafc;
              border: 1px solid var(--border-color);
              border-radius: var(--radius-lg);
              padding: 1.5rem;
              max-width: 380px;
              margin: 0 auto 2.5rem;
            "
          >

            <div
              style="
                font-size: 0.85rem;
                color: var(--text-muted);
                margin-bottom: 0.25rem;
              "
            >
              Skor Latihan Kuis:
            </div>

            <div
              style="
                font-size: 2.5rem;
                font-weight: 800;
                color: var(--brand-blue);
              "
            >
              ${qState.score} /
              ${totalQuestions}
            </div>

            <div
              style="
                font-size: 0.85rem;
                color: var(--success);
                font-weight: 600;
              "
            >
              ${
                Math.round(
                  (qState.score /
                    totalQuestions) *
                    100
                )
              }% Jawaban Benar
            </div>

          </div>

          <section class="quiz-results-breakdown" aria-label="Ringkasan jawaban kuis">
            <h3>Ringkasan Jawaban</h3>
            <div class="quiz-result-stats">
              <div class="quiz-result-stat correct">
                <span>Jawaban Benar</span>
                <strong>${correctCount}</strong>
              </div>
              <div class="quiz-result-stat incorrect">
                <span>Jawaban Salah</span>
                <strong>${incorrectCount}</strong>
              </div>
              <div class="quiz-result-stat best">
                <span>Skor Terbaik</span>
                <strong>${bestScore}/${totalQuestions}</strong>
              </div>
            </div>
            <section class="quiz-study-recommendation" aria-live="polite">
              <div class="quiz-recommendation-heading">
                ${window.getIcon('compass', '', 20)}
                <div>
                  <h3>Saran Belajar</h3>
                  <p>Rekomendasi berdasarkan jawabanmu di setiap materi.</p>
                </div>
              </div>
              ${recommendationsHtml}
            </section>
            <div class="quiz-answer-review-list">
              ${answerReviewHtml}
            </div>
          </section>

          <div
            style="
              display: flex;
              gap: 1rem;
              justify-content: center;
              flex-wrap: wrap;
            "
          >

            <!-- Tombol Ulangi Kuis -->
            <button
              class="btn btn-secondary"
              id="btn-restart-quiz"
            >
              ${window.getIcon(
                'rotateCcw',
                '',
                16
              )}

              <span>
                Ulangi Kuis
              </span>
            </button>

            <!-- Lanjut Evaluasi -->
            <button
              class="btn btn-primary btn-lg"
              data-nav="evaluasi"
            >
              <span>
                Lanjut ke Evaluasi
              </span>

              ${window.getIcon(
                'arrowRight',
                '',
                18
              )}
            </button>

          </div>

        </div>

      </div>
    `;
  }

  // =========================
  // SOAL SAAT INI
  // =========================

  const currentQ =
    questions[qState.currentIndex];

  const questionNumber =
    qState.currentIndex + 1;

  const progressPercent =
    Math.round(
      (questionNumber /
        totalQuestions) *
        100
    );

  const bestScore = qState.bestScore || 0;

  const optionLetters = [
    'A',
    'B',
    'C',
    'D'
  ];

  // =========================
  // OPTIONS
  // =========================

  const optionsHtml =
    currentQ.options
      .map((opt, idx) => {

        let optClasses =
          'quiz-opt-btn';

        if (
          qState.selectedOption === idx
        ) {
          optClasses += ' selected';
        }

        if (qState.isAnswered) {

          if (
            idx === currentQ.correct
          ) {
            optClasses +=
              ' correct-highlight';

          } else if (
            qState.selectedOption === idx
          ) {
            optClasses +=
              ' wrong-highlight';
          }
        }

        return `
          <button
            class="${optClasses}"
            data-opt-idx="${idx}"
            ${
              qState.isAnswered
                ? 'disabled'
                : ''
            }
          >

            <div
              class="quiz-opt-letter"
            >
              ${optionLetters[idx]}
            </div>

            <div style="flex: 1;">
              ${opt}
            </div>

          </button>
        `;
      })
      .join('');

  // =========================
  // FEEDBACK
  // =========================

  let feedbackHtml = '';

  if (qState.isAnswered) {

    const isCorrect =
      qState.selectedOption ===
      currentQ.correct;

    const feedbackText =
      isCorrect
        ? currentQ.feedbackCorrect
        : currentQ.feedbackWrong;

    feedbackHtml = `
      <div
        class="
          quiz-feedback-box
          ${isCorrect ? 'correct' : 'wrong'}
        "
      >

        <div
          class="quiz-feedback-title"
        >

          ${window.getIcon(
            isCorrect
              ? 'checkCircle'
              : 'xCircle',
            '',
            20
          )}

          <span>
            ${
              isCorrect
                ? 'Jawaban Benar!'
                : 'Jawaban Kurang Tepat!'
            }
          </span>

        </div>

        <div
          class="quiz-feedback-text"
        >

          <p
            style="
              font-weight: 600;
              margin-bottom: 0.35rem;
            "
          >
            ${feedbackText}
          </p>

          <p
            style="
              font-size: 0.88rem;
              opacity: 0.9;
            "
          >
            <strong>
              Penjelasan:
            </strong>

            ${currentQ.explanation}
          </p>

        </div>

      </div>
    `;
  }

  // =========================
  // QUIZ PAGE
  // =========================

  return `
    <div
      class="quiz-container fade-in"
    >

      <!-- Quiz Header -->
      <div
        class="quiz-header-card"
      >

        <div>

          <h1
            style="
              font-size: 1.4rem;
              color: var(--primary-navy);
              margin-bottom: 0.2rem;
            "
          >
            Kuis Sistem Operasi
          </h1>

          <span
            style="
              font-size: 0.85rem;
              color: var(--text-muted);
            "
          >
            Uji pemahamanmu setelah
            mempelajari materi
          </span>

        </div>

        <div
          style="text-align: right;"
        >

          <span
            style="
              font-size: 0.95rem;
              font-weight: 700;
              color: var(--brand-blue);
            "
          >
            Pertanyaan
            ${questionNumber}
            dari
            ${totalQuestions}
          </span>

          <div class="quiz-best-score">
            ${window.getIcon('award', '', 15)}
            <span>Skor terbaik: ${bestScore}/${totalQuestions}</span>
          </div>

        </div>

        <div
          class="quiz-progress-section"
        >

          <div
            class="progress-track"
            style="height: 8px;"
          >

            <div
              class="progress-fill"
              style="
                width: ${progressPercent}%;
              "
            ></div>

          </div>

        </div>

      </div>

      <!-- Question Card -->
      <div
        class="quiz-q-card"
      >

        <span
          class="quiz-topic-tag"
        >
          ${currentQ.topic}
        </span>

        <h2
          class="quiz-question-text"
        >
          ${currentQ.question}
        </h2>

        <!-- Options -->
        <div
          class="quiz-options-list"
        >
          ${optionsHtml}
        </div>

        <!-- Feedback -->
        ${feedbackHtml}

        <!-- Actions -->
        <div
          style="
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            align-items: center;
          "
        >

          ${
            !qState.isAnswered
              ? `

                <button
                  class="btn btn-primary btn-lg"
                  id="btn-submit-quiz-ans"
                  ${
                    qState.selectedOption === null
                      ? 'disabled'
                      : ''
                  }
                >

                  ${window.getIcon(
                    'check',
                    '',
                    18
                  )}

                  <span>
                    Jawab
                  </span>

                </button>

              `
              : `

                <button
                  class="btn btn-primary btn-lg"
                  id="btn-next-quiz-q"
                >

                  <span>
                    ${
                      questionNumber ===
                      totalQuestions
                        ? 'Selesai & Lihat Skor'
                        : 'Pertanyaan Berikutnya'
                    }
                  </span>

                  ${window.getIcon(
                    'arrowRight',
                    '',
                    18
                  )}

                </button>

              `
          }

        </div>

      </div>

    </div>
  `;
};