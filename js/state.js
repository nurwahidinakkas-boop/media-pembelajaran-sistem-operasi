// Global State Manager for Media Pembelajaran Interaktif Sistem Operasi
// Features reactive state updates and localStorage persistence

(function() {
  const STORAGE_KEY = 'os_learning_state_v1';

  const defaultState = {
    activePage: 'dashboard',
    selectedMateriId: 1,
    mobileMenuOpen: false,

    // Progress flags
    materialsRead: {
      1: false,
      2: false,
      3: false
    },

    interactiveCompleted: false,
    quizCompleted: false,
    evalCompleted: false,

    // Quiz state
    quiz: {
      currentIndex: 0,
      selectedOption: null,
      isAnswered: false,
      answers: {},
      score: 0,
      bestScore: 0
    },

    // Evaluation state
    evaluation: {
      currentIndex: 0,
      answers: {},
      isCompleted: false,
      score: 0,
      correctCount: 0,
      incorrectCount: 0,
      percentage: 0,
      topicResults: {}
    },

    // Student information for certificate
    studentName: 'Siswa Hebat XI SMA'
  };

  // Load state dari localStorage
  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        return {
          ...defaultState,
          ...parsed,

          quiz: {
            ...defaultState.quiz,
            ...parsed.quiz
          },

          evaluation: {
            ...defaultState.evaluation,
            ...parsed.evaluation
          },

          materialsRead: {
            ...defaultState.materialsRead,
            ...parsed.materialsRead
          }
        };
      }
    } catch (e) {
      console.warn(
        'Error loading state from localStorage:',
        e
      );
    }

    return defaultState;
  }

  class Store {
    constructor() {
      this.state = loadSavedState();
      this.listeners = [];
    }

    // Mengambil state saat ini
    getState() {
      return this.state;
    }

    // Menambahkan listener
    subscribe(listener) {
      this.listeners.push(listener);

      return () => {
        this.listeners = this.listeners.filter(
          l => l !== listener
        );
      };
    }

    // Memberitahu seluruh aplikasi bahwa state berubah
    notify() {
      this.save();

      for (const listener of this.listeners) {
        listener(this.state);
      }
    }

    // Menyimpan state ke localStorage
    save() {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(this.state)
        );
      } catch (e) {
        console.warn(
          'Could not save state to localStorage:',
          e
        );
      }
    }

    // =========================
    // NAVIGATION
    // =========================

    setPage(page, payload = {}) {
      this.state.activePage = page;
      this.state.mobileMenuOpen = false;

      if (payload.materiId) {
        this.state.selectedMateriId = payload.materiId;
      }

      if (page === 'materi-detail') {
        this.state.materialsRead[this.state.selectedMateriId] = true;
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      this.notify();
    }

    toggleMobileMenu(open) {
      this.state.mobileMenuOpen =
        typeof open === 'boolean'
          ? open
          : !this.state.mobileMenuOpen;

      this.notify();
    }

    // =========================
    // MATERIAL
    // =========================

    markMateriRead(id) {
      this.state.materialsRead[id] = true;
      this.notify();
    }

    markInteractiveCompleted() {
      this.state.interactiveCompleted = true;
      this.notify();
    }

    // =========================
    // QUIZ ACTIONS
    // =========================

    // Memilih jawaban
    selectQuizOption(index) {
      if (this.state.quiz.isAnswered) {
        return;
      }

      this.state.quiz.selectedOption = index;

      this.notify();
    }

    // Mengirim jawaban
    submitQuizAnswer() {
      const q = this.state.quiz;

      // Jangan lanjut jika belum memilih jawaban
      if (
        q.selectedOption === null ||
        q.isAnswered
      ) {
        return;
      }

      const currentQ =
        window.QuizQuestions[q.currentIndex];

      // Tandai soal sudah dijawab
      q.isAnswered = true;

      // Simpan jawaban
      q.answers[currentQ.id] =
        q.selectedOption;

      // Periksa jawaban
      if (
        q.selectedOption === currentQ.correct
      ) {
        q.score++;

        if (window.AudioFX) {
          window.AudioFX.playCorrect();
        }
      } else {
        if (window.AudioFX) {
          window.AudioFX.playWrong();
        }
      }

      this.notify();
    }

    // Pindah ke soal berikutnya
    nextQuizQuestion() {
      const q = this.state.quiz;

      if (
        q.currentIndex <
        window.QuizQuestions.length - 1
      ) {
        // Pindah ke soal berikutnya
        q.currentIndex++;

        // Reset pilihan jawaban
        q.selectedOption = null;

        // Tandai belum dijawab
        q.isAnswered = false;

        this.notify();

      } else {
        // Semua soal sudah selesai
        q.bestScore = Math.max(q.bestScore || 0, q.score);
        this.state.quizCompleted = true;

        if (window.AudioFX) {
          window.AudioFX.playFanfare();
        }

        this.notify();
      }
    }

    // =========================
    // RESET QUIZ
    // =========================

    resetQuiz() {
      // Mengembalikan seluruh data kuis
      this.state.quiz = {
        currentIndex: 0,
        selectedOption: null,
        isAnswered: false,
        answers: {},
        score: 0,
        bestScore: this.state.quiz.bestScore || 0
      };

      // PENTING:
      // Kuis dianggap belum selesai lagi
      this.state.quizCompleted = false;

      // Simpan dan render ulang aplikasi
      this.notify();
    }

    // =========================
    // EVALUATION ACTIONS
    // =========================

    selectEvalOption(questionId, optionIndex) {
      if (
        this.state.evaluation.isCompleted
      ) {
        return;
      }

      this.state.evaluation.answers[questionId] =
        optionIndex;

      this.notify();
    }

    setEvalQuestionIndex(index) {
      if (
        index >= 0 &&
        index < window.EvaluationQuestions.length
      ) {
        this.state.evaluation.currentIndex =
          index;

        this.notify();
      }
    }

    submitEvaluation() {
      const ev = this.state.evaluation;
      const questions =
        window.EvaluationQuestions;

      let correct = 0;

      const topicStats = {
        1: {
          name: 'Materi 1: Pengertian Sistem Operasi',
          total: 0,
          correct: 0
        },

        2: {
          name: 'Materi 2: Jenis-Jenis Sistem Operasi',
          total: 0,
          correct: 0
        },

        3: {
          name: 'Materi 3: Fungsi Sistem Operasi',
          total: 0,
          correct: 0
        }
      };

      questions.forEach(q => {
        const tId = q.topicId || 1;

        topicStats[tId].total++;

        const userAns =
          ev.answers[q.id];

        if (userAns === q.correct) {
          correct++;
          topicStats[tId].correct++;
        }
      });

      ev.correctCount = correct;

      ev.incorrectCount =
        questions.length - correct;

      ev.score = Math.round(
        (correct / questions.length) * 100
      );

      ev.percentage = ev.score;

      ev.isCompleted = true;

      ev.topicResults = topicStats;

      this.state.evalCompleted = true;

      if (window.AudioFX) {
        window.AudioFX.playFanfare();
      }

      this.setPage('hasil');
    }

    // Reset evaluasi
    resetEvaluation() {
      this.state.evaluation = {
        currentIndex: 0,
        answers: {},
        isCompleted: false,
        score: 0,
        correctCount: 0,
        incorrectCount: 0,
        percentage: 0,
        topicResults: {}
      };

      this.setPage('evaluasi');
    }

    // =========================
    // STUDENT
    // =========================

    setStudentName(name) {
      this.state.studentName =
        name || 'Siswa Hebat XI SMA';

      this.notify();
    }

    // =========================
    // OVERALL PROGRESS
    // =========================

    getOverallProgress() {
      let score = 0;

      // 3 materi = 45%
      if (this.state.materialsRead[1]) {
        score += 15;
      }

      if (this.state.materialsRead[2]) {
        score += 15;
      }

      if (this.state.materialsRead[3]) {
        score += 15;
      }

      // Interactive = 15%
      if (this.state.interactiveCompleted) {
        score += 15;
      }

      // Quiz = 20%
      if (this.state.quizCompleted) {
        score += 20;
      }

      // Evaluation = 20%
      if (this.state.evalCompleted) {
        score += 20;
      }

      return Math.min(100, score);
    }
  }

  // Membuat store global
  window.store = new Store();

})();