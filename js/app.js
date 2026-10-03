// Main Application Coordinator & Event Router
(function() {
  const appRoot = document.getElementById('app-root');

  function renderApp() {
    const state = window.store.getState();

    let pageContentHtml = '';
    switch (state.activePage) {
      case 'dashboard':
        pageContentHtml = window.renderDashboard();
        break;
      case 'petunjuk':
        pageContentHtml = window.renderInstructions();
        break;
      case 'materi':
        pageContentHtml = window.renderMaterials();
        break;
      case 'materi-detail':
        pageContentHtml = window.renderMaterialDetail();
        break;
      case 'media-interaktif':
        pageContentHtml = window.renderInteractiveMedia();
        break;
      case 'kuis':
        pageContentHtml = window.renderQuiz();
        break;
      case 'evaluasi':
        pageContentHtml = window.renderEvaluation();
        break;
      case 'hasil':
        pageContentHtml = window.renderResult();
        break;
      case 'selesai':
        pageContentHtml = window.renderFinished();
        break;
      case 'profil':
        pageContentHtml = window.renderProfile();
        break;
      default:
        pageContentHtml = window.renderDashboard();
    }

    appRoot.innerHTML = `
      <div class="app-container">
        ${window.renderSidebar()}
        <main class="main-layout">
          ${window.renderNavbar()}
          <div class="content-viewport">
            ${pageContentHtml}
          </div>
        </main>
      </div>
    `;

    bindGlobalEvents();
  }

  function bindGlobalEvents() {
    // 1. Navigation clicks
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const page = el.getAttribute('data-nav');
        if (window.AudioFX) window.AudioFX.playClick();
        window.store.setPage(page);
      });
    });

    // 2. Learn material buttons
    document.querySelectorAll('[data-action="learn-materi"]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(el.getAttribute('data-id'), 10);
        if (window.AudioFX) window.AudioFX.playClick();
        window.store.setPage('materi-detail', { materiId: id });
      });
    });

    // 3. Hero start button
    const heroBtn = document.getElementById('btn-hero-start');
    if (heroBtn) {
      heroBtn.addEventListener('click', () => {
        if (window.AudioFX) window.AudioFX.playClick();
        window.store.setPage('materi-detail', { materiId: 1 });
      });
    }

    // 4. Mobile Menu Toggle
    const mobileBtn = document.getElementById('btn-toggle-mobile-menu');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        window.store.toggleMobileMenu();
      });
    }
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        window.store.toggleMobileMenu(false);
      });
    }

    // 5. Sound Toggle Button
    const soundBtn = document.getElementById('btn-toggle-sound');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        if (window.AudioFX) {
          const isEnabled = window.AudioFX.toggle();
          if (isEnabled) window.AudioFX.playClick();
          renderApp();
        }
      });
    }

    // 6. Accordions
    document.querySelectorAll('[data-toggle="accordion"]').forEach(header => {
      header.addEventListener('click', () => {
        const targetId = header.getAttribute('data-target');
        const item = document.getElementById(targetId);
        if (item) {
          item.classList.toggle('open');
          if (window.AudioFX) window.AudioFX.playClick();
        }
      });
    });

    // 7. Material Detail Page Actions
    const matNextBtn = document.getElementById('btn-materi-next');
    if (matNextBtn) {
      matNextBtn.addEventListener('click', () => {
        const target = matNextBtn.getAttribute('data-next-target');
        const nextId = parseInt(matNextBtn.getAttribute('data-next-id'), 10);
        if (window.AudioFX) window.AudioFX.playClick();
        if (target === 'media-interaktif') {
          window.store.setPage('media-interaktif');
        } else {
          window.store.setPage('materi-detail', { materiId: nextId });
        }
      });
    }

    // Interactive Layer Inspector in Materi 1
    const layerBars = document.querySelectorAll('#layer-selector-container .layer-bar');
    const layerDetailBox = document.getElementById('layer-detail-box');
    if (layerBars.length && layerDetailBox) {
      const layerDetails = {
        user: '<strong>1. Pengguna (User):</strong> Manusia yang mengoperasikan komputer untuk belajar, membuat dokumen, atau menjalankan tugas sehari-hari.',
        os: '<strong>2. Sistem Operasi (Operating System):</strong> Perangkat lunak utama yang mengatur dan mengendalikan kerja komputer, menjadi penghubung antara pengguna, aplikasi, dan perangkat keras.',
        app: '<strong>3. Aplikasi (Application):</strong> Program yang digunakan oleh pengguna (seperti Microsoft Word, browser, pemutar musik, dan game) yang dibantu dijalankan oleh sistem operasi.',
        hw: '<strong>4. Perangkat Keras (Hardware):</strong> Komponen fisik komputer seperti CPU, RAM, penyimpanan (hard disk/SSD), keyboard, dan mouse yang penggunaannya diatur oleh sistem operasi.'
      };

      layerBars.forEach(bar => {
        bar.addEventListener('click', () => {
          layerBars.forEach(b => b.classList.remove('active'));
          bar.classList.add('active');
          const layerKey = bar.getAttribute('data-layer');
          layerDetailBox.innerHTML = layerDetails[layerKey] || '';
          if (window.AudioFX) window.AudioFX.playClick();
        });
      });
    }

    // Mini Classifier in Materi 2
    document.querySelectorAll('.btn-cls').forEach(btn => {
      btn.addEventListener('click', () => {
        const qNum = btn.getAttribute('data-q');
        const val = btn.getAttribute('data-val');
        const feedBox = document.getElementById(`cls-feed-${qNum}`);
        if (!feedBox) return;

        feedBox.style.display = 'block';
        if (qNum === '1') {
          if (val === 'embedded') {
            feedBox.innerHTML = '<span style="color: var(--success); font-weight: 700;">✓ Benar!</span> Mesin ATM menggunakan Embedded OS (atau Windows/Linux Embedded khusus) untuk keandalan tugas spesifik.';
            if (window.AudioFX) window.AudioFX.playCorrect();
          } else {
            feedBox.innerHTML = '<span style="color: var(--danger); font-weight: 700;">✗ Kurang tepat.</span> Mesin ATM bukan perangkat mobile genggam, melainkan sistem tertanam khusus (Embedded OS).';
            if (window.AudioFX) window.AudioFX.playWrong();
          }
        } else if (qNum === '2') {
          if (val === 'server') {
            feedBox.innerHTML = '<span style="color: var(--success); font-weight: 700;">✓ Tepat Sekali!</span> Server YouTube berjalan di atas ribuan node Server Linux berskala besar.';
            if (window.AudioFX) window.AudioFX.playCorrect();
          } else {
            feedBox.innerHTML = '<span style="color: var(--danger); font-weight: 700;">✗ Kurang tepat.</span> Desktop OS ditujukan untuk komputer personal, bukan server skala global dengan jutaan koneksi.';
            if (window.AudioFX) window.AudioFX.playWrong();
          }
        }
      });
    });

    // Mini RAM simulator in Materi 3
    const btnAddApp = document.getElementById('btn-add-app-tab');
    const btnResetRam = document.getElementById('btn-reset-ram-sim');
    const ramBar = document.getElementById('sim-ram-bar');
    const ramText = document.getElementById('sim-ram-text');
    const ramAlert = document.getElementById('sim-paging-alert');

    if (btnAddApp && ramBar && ramText) {
      let simUsedGb = 4;
      btnAddApp.addEventListener('click', () => {
        simUsedGb += 2;
        if (simUsedGb > 8) simUsedGb = 8;
        const pct = Math.round((simUsedGb / 8) * 100);
        ramBar.style.width = pct + '%';
        ramText.textContent = `${simUsedGb} GB Terpakai (${pct}%)`;

        if (pct >= 100) {
          ramBar.style.background = 'var(--danger)';
          ramText.style.color = 'var(--danger)';
          if (ramAlert) ramAlert.style.display = 'block';
          if (window.AudioFX) window.AudioFX.playWrong();
        } else if (pct >= 75) {
          ramBar.style.background = 'var(--warning)';
          ramText.style.color = 'var(--warning)';
          if (window.AudioFX) window.AudioFX.playClick();
        } else {
          if (window.AudioFX) window.AudioFX.playClick();
        }
      });

      if (btnResetRam) {
        btnResetRam.addEventListener('click', () => {
          simUsedGb = 4;
          ramBar.style.width = '50%';
          ramBar.style.background = 'var(--brand-blue)';
          ramText.style.color = 'var(--brand-blue)';
          ramText.textContent = '4 GB Terpakai (50%)';
          if (ramAlert) ramAlert.style.display = 'none';
          if (window.AudioFX) window.AudioFX.playClick();
        });
      }
    }

    // 8. Interactive Media Controls
    document.querySelectorAll('.hotspot-btn[data-part], .hardware-part[data-part]').forEach(btn => {
      const selectPart = () => {
        const part = btn.getAttribute('data-part');
        window.simState.selectedPart = part;
        if (window.AudioFX) window.AudioFX.playClick();
        renderApp();
      };

      btn.addEventListener('click', selectPart);
      if (btn.classList.contains('hardware-part')) {
        btn.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            selectPart();
          }
        });
      }
    });

    document.querySelectorAll('.app-btn-toggle[data-app]').forEach(btn => {
      btn.addEventListener('click', () => {
        const app = btn.getAttribute('data-app');
        window.simState.runningApps[app] = !window.simState.runningApps[app];
        if (window.AudioFX) window.AudioFX.playClick();
        renderApp();
      });
    });

    const nextToQuizBtn = document.getElementById('btn-next-to-quiz');
    if (nextToQuizBtn) {
      nextToQuizBtn.addEventListener('click', () => {
        window.store.markInteractiveCompleted();
        if (window.AudioFX) window.AudioFX.playCorrect();
        window.store.setPage('kuis');
      });
    }

    // 9. Quiz Interactions
    document.querySelectorAll('.quiz-opt-btn[data-opt-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        window.store.selectQuizOption(optIdx);
        if (window.AudioFX) window.AudioFX.playClick();
      });
    });

    const submitQuizBtn = document.getElementById('btn-submit-quiz-ans');
    if (submitQuizBtn) {
      submitQuizBtn.addEventListener('click', () => {
        window.store.submitQuizAnswer();
      });
    }

    const nextQuizBtn = document.getElementById('btn-next-quiz-q');
    if (nextQuizBtn) {
      nextQuizBtn.addEventListener('click', () => {
        window.store.nextQuizQuestion();
      });
    }

    const restartQuizBtn = document.getElementById('btn-restart-quiz');
    if (restartQuizBtn) {
      restartQuizBtn.addEventListener('click', () => {
        if (confirm('Ulangi kuis dari awal? Skor terbaikmu akan tetap tersimpan.')) {
          window.store.resetQuiz();
        }
      });
    }

    // 10. Evaluation Interactions
    document.querySelectorAll('.quiz-opt-btn[data-eval-opt]').forEach(btn => {
      btn.addEventListener('click', () => {
        const state = window.store.getState();
        const curQ = window.EvaluationQuestions[state.evaluation.currentIndex];
        const optIdx = parseInt(btn.getAttribute('data-eval-opt'), 10);
        window.store.selectEvalOption(curQ.id, optIdx);
        if (window.AudioFX) window.AudioFX.playClick();
      });
    });

    document.querySelectorAll('.palette-btn[data-goto-q]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetIdx = parseInt(btn.getAttribute('data-goto-q'), 10);
        window.store.setEvalQuestionIndex(targetIdx);
        if (window.AudioFX) window.AudioFX.playClick();
      });
    });

    const evalPrevBtn = document.getElementById('btn-eval-prev');
    if (evalPrevBtn) {
      evalPrevBtn.addEventListener('click', () => {
        const state = window.store.getState();
        window.store.setEvalQuestionIndex(state.evaluation.currentIndex - 1);
        if (window.AudioFX) window.AudioFX.playClick();
      });
    }

    const evalNextBtn = document.getElementById('btn-eval-next');
    if (evalNextBtn) {
      evalNextBtn.addEventListener('click', () => {
        const state = window.store.getState();
        window.store.setEvalQuestionIndex(state.evaluation.currentIndex + 1);
        if (window.AudioFX) window.AudioFX.playClick();
      });
    }

    const submitEvalBtn = document.getElementById('btn-submit-eval');
    const quickFinishBtn = document.getElementById('btn-eval-finish-quick');

    function promptSubmitEval() {
      const state = window.store.getState();
      const answeredCount = Object.keys(state.evaluation.answers).length;
      const total = window.EvaluationQuestions.length;

      if (answeredCount < total) {
        const unanswered = total - answeredCount;
        if (!confirm(`Masih ada ${unanswered} soal yang belum kamu jawab. Apakah kamu yakin ingin menyelesaikan evaluasi sekarang?`)) {
          return;
        }
      }
      window.store.submitEvaluation();
    }

    if (submitEvalBtn) submitEvalBtn.addEventListener('click', promptSubmitEval);
    if (quickFinishBtn) quickFinishBtn.addEventListener('click', promptSubmitEval);

    const retryEvalBtn = document.getElementById('btn-retry-eval');
    if (retryEvalBtn) {
      retryEvalBtn.addEventListener('click', () => {
        if (confirm('Apakah kamu ingin mengulang evaluasi dari awal?')) {
          window.store.resetEvaluation();
        }
      });
    }

    // 11. Certificate editable name
    const certName = document.getElementById('cert-name-display');
    if (certName) {
      certName.addEventListener('blur', () => {
        const text = certName.textContent.trim();
        window.store.setStudentName(text || 'Siswa Hebat XI SMA');
      });
    }
  }

  // Subscribe render to store updates
  window.store.subscribe(() => {
    renderApp();
  });

  // Initial render — scripts are at end of <body> so DOM is already ready
  renderApp();
})();
