/**
 * Aplikasi Web Panduan Latihan Bina Gerak Motorik Halus
 * Orkestrasi Komponen, Router SPA, dan Logika Interaktif
 */

import { CATEGORIES, EXERCISES } from './data/exercisesData.js';
import { StorageService } from './services/storageService.js';
import { SpeechService } from './services/speechService.js';

class BinaGerakApp {
  constructor() {
    this.currentView = 'home';
    this.activeCategory = 'all';
    this.currentExercise = null;
    this.currentStep = 0; // 0 to 4 (5 steps)
    this.completedToday = new Set();
    this.isTeacherDrawerOpen = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.bindEvents();
    this.renderHome();
    this.renderCategories();
    this.setupKeyboardShortcuts();
    this.updateTodayBadge();
  }

  cacheDom() {
    // Views
    this.views = {
      home: document.getElementById('view-home'),
      categories: document.getElementById('view-categories'),
      exercise: document.getElementById('view-exercise'),
      closing: document.getElementById('view-closing')
    };

    // Header buttons
    this.navBrand = document.getElementById('nav-brand');
    this.navHomeBtn = document.getElementById('nav-home-btn');
    this.navCategoriesBtn = document.getElementById('nav-categories-btn');
    this.navClosingBtn = document.getElementById('nav-closing-btn');

    // A11y Live Announcer
    this.announcer = document.getElementById('a11y-announcer');

    // Evaluation Modal
    this.evalModal = document.getElementById('eval-modal');
    this.evalForm = document.getElementById('eval-form');
    this.closeModalBtn = document.getElementById('modal-close-btn');
    this.cancelModalBtn = document.getElementById('modal-cancel-btn');
  }

  bindEvents() {
    // Navigasi Utama
    this.navBrand.addEventListener('click', () => this.navigate('home'));
    this.navBrand.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.navigate('home');
      }
    });
    this.navHomeBtn.addEventListener('click', () => this.navigate('home'));
    this.navCategoriesBtn.addEventListener('click', () => this.navigate('categories'));
    this.navClosingBtn.addEventListener('click', () => this.navigate('closing'));

    // Modal Evaluasi
    this.closeModalBtn.addEventListener('click', () => this.closeEvaluationModal());
    this.cancelModalBtn.addEventListener('click', () => this.closeEvaluationModal());
    this.evalForm.addEventListener('submit', (e) => this.handleEvaluationSubmit(e));
  }

  announce(message) {
    if (this.announcer) {
      this.announcer.textContent = message;
    }
  }

  navigate(viewName, params = {}) {
    // Hentikan suara jika berpindah layar
    SpeechService.stop();

    Object.keys(this.views).forEach(key => {
      if (this.views[key]) {
        this.views[key].classList.toggle('active', key === viewName);
      }
    });

    this.currentView = viewName;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewName === 'categories') {
      if (params.categoryId) {
        this.activeCategory = params.categoryId;
      }
      this.renderCategories();
      this.announce('Membuka menu pemilihan kategori latihan.');
    } else if (viewName === 'exercise' && params.exerciseId) {
      this.loadExercise(params.exerciseId);
    } else if (viewName === 'closing') {
      this.renderClosingView();
      this.announce('Membuka halaman ringkasan latihan hari ini.');
    } else if (viewName === 'home') {
      this.announce('Membuka halaman beranda latihan motorik halus.');
    }
  }

  // ==========================================
  // 01. BERANDA VIEW
  // ==========================================
  renderHome() {
    const startBtn = document.getElementById('hero-start-btn');
    const guideBtn = document.getElementById('hero-guide-btn');
    const startSopBtn = document.getElementById('sop-start-btn');

    if (startBtn) startBtn.onclick = () => this.navigate('categories');
    if (startSopBtn) startSopBtn.onclick = () => this.navigate('categories');
    if (guideBtn) {
      guideBtn.onclick = () => {
        const sopElem = document.getElementById('safety-sop-section');
        if (sopElem) sopElem.scrollIntoView({ behavior: 'smooth' });
      };
    }
  }

  // ==========================================
  // 02. KATALOG KATEGORI VIEW
  // ==========================================
  renderCategories() {
    const tabsContainer = document.getElementById('category-tabs-container');
    const gridContainer = document.getElementById('activities-grid-container');

    if (!tabsContainer || !gridContainer) return;

    // Render Tab Tombol
    tabsContainer.innerHTML = `
      <button class="cat-tab-btn ${this.activeCategory === 'all' ? 'active' : ''}" data-cat="all">
        Semua Latihan (12)
      </button>
      ${CATEGORIES.map(cat => `
        <button class="cat-tab-btn ${this.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
          Kategori ${cat.code} (${cat.count})
        </button>
      `).join('')}
    `;

    tabsContainer.querySelectorAll('.cat-tab-btn').forEach(btn => {
      btn.onclick = () => {
        this.activeCategory = btn.dataset.cat;
        this.renderCategories();
      };
    });

    // Filter Aktivitas
    const filteredExercises = this.activeCategory === 'all'
      ? EXERCISES
      : EXERCISES.filter(ex => ex.categoryId === this.activeCategory);

    gridContainer.innerHTML = filteredExercises.map(ex => {
      const catObj = CATEGORIES.find(c => c.id === ex.categoryId);
      const isDone = this.completedToday.has(ex.id);

      return `
        <article class="activity-card ${ex.categoryId}" tabindex="0">
          <div>
            <!-- Thumbnail Visual Ilustrasi -->
            <div class="activity-card-thumb" aria-hidden="true">
              ${ex.imageSrc ? `<img src="${ex.imageSrc}" alt="Ilustrasi ${ex.titleId}" class="activity-card-img" loading="lazy" />` : ex.illustrationSvg}
            </div>
            <div class="card-top">
              <span class="activity-badge ${ex.categoryId}">Kategori ${catObj?.code || ''}</span>
              <span class="activity-number">#${ex.code}</span>
            </div>
            <div class="activity-titles">
              <h3>${ex.titleEn}</h3>
              <h4>${ex.titleId}</h4>
            </div>
            <p class="activity-goal">${ex.goal}</p>
          </div>
          <div>
            <div class="tools-pill">
              <span aria-hidden="true">🛠️</span>
              <div><strong>Alat:</strong> ${ex.tools[0]}</div>
            </div>
            <button class="btn ${isDone ? 'btn-success' : 'btn-primary'} btn-large" style="width: 100%;" data-id="${ex.id}">
              ${isDone ? '✓ Sudah Dicoba (Buka Lagi)' : 'Mulai Latihan'}
            </button>
          </div>
        </article>
      `;
    }).join('');

    gridContainer.querySelectorAll('button[data-id]').forEach(btn => {
      btn.onclick = () => {
        this.navigate('exercise', { exerciseId: btn.dataset.id });
      };
    });
  }

  // ==========================================
  // 03. WIZARD LATIHAN (STEPPER VIEW)
  // ==========================================
  loadExercise(exerciseId) {
    const found = EXERCISES.find(e => e.id === exerciseId);
    if (!found) return;

    this.currentExercise = found;
    this.currentStep = 0;
    this.isTeacherDrawerOpen = false;

    this.renderExerciseScreen();
    this.announce(`Membuka latihan ${found.titleEn}, ${found.titleId}. Langkah 1 dari 5.`);
  }

  renderExerciseScreen() {
    const ex = this.currentExercise;
    if (!ex) return;

    const catObj = CATEGORIES.find(c => c.id === ex.categoryId);
    const stepData = ex.steps[this.currentStep];

    // Header info & Dynamic Category Styling
    const headerBanner = document.getElementById('ex-header-banner');
    if (headerBanner) {
      headerBanner.className = `exercise-header-banner ${ex.categoryId}`;
    }
    document.getElementById('ex-cat-badge').textContent = `Kategori ${catObj?.code}: ${catObj?.name}`;
    document.getElementById('ex-cat-badge').className = `activity-badge ${ex.categoryId}`;
    document.getElementById('ex-title-en').textContent = `${ex.code}. ${ex.titleEn}`;
    document.getElementById('ex-title-id').textContent = ex.titleId;

    // Tools & Goal
    document.getElementById('ex-goal-text').textContent = ex.goal;
    document.getElementById('ex-tools-list').textContent = ex.tools.join(', ');

    // Safety Callout
    const safetyBanner = document.getElementById('ex-safety-callout');
    if (ex.teacherGuide.safetyNote) {
      safetyBanner.style.display = 'flex';
      safetyBanner.innerHTML = `<span style="font-size: 20px;">⚠️</span> <div>${ex.teacherGuide.safetyNote}</div>`;
    } else {
      safetyBanner.style.display = 'none';
    }

    // Visual Stage & Ilustrasi / Animasi
    const visualStage = document.getElementById('ex-visual-stage');
    let showingSvg = false;
    const currentStepImage = stepData.imageSrc || stepData.image || ex.imageSrc;
    if (currentStepImage) {
      visualStage.innerHTML = `<img src="${currentStepImage}" alt="Ilustrasi langkah ${this.currentStep + 1}: ${stepData.visualCue || ex.titleId}" class="visual-stage-img" />`;
    } else {
      visualStage.innerHTML = ex.illustrationSvg;
    }
    visualStage.classList.remove('animation-paused');
    document.getElementById('ex-visual-caption').textContent = stepData.visualCue;

    const animToggleBtn = document.getElementById('anim-toggle-btn');
    if (animToggleBtn) {
      if (currentStepImage && ex.illustrationSvg) {
        animToggleBtn.style.display = 'inline-flex';
        animToggleBtn.innerHTML = '🔄 <span>Lihat Diagram Animasi 2D</span>';
        animToggleBtn.onclick = () => {
          showingSvg = !showingSvg;
          if (showingSvg) {
            visualStage.innerHTML = ex.illustrationSvg;
            animToggleBtn.innerHTML = `🖼️ <span>Lihat Ilustrasi Langkah ${this.currentStep + 1}</span>`;
          } else {
            visualStage.innerHTML = `<img src="${currentStepImage}" alt="Ilustrasi langkah ${this.currentStep + 1}: ${stepData.visualCue || ex.titleId}" class="visual-stage-img" />`;
            animToggleBtn.innerHTML = '🔄 <span>Lihat Diagram Animasi 2D</span>';
          }
        };
      } else if (ex.illustrationSvg) {
        animToggleBtn.style.display = 'inline-flex';
        animToggleBtn.innerHTML = '⏸️ <span>Jeda Animasi 2D</span>';
        animToggleBtn.onclick = () => {
          const isNowPaused = visualStage.classList.toggle('animation-paused');
          animToggleBtn.innerHTML = isNowPaused
            ? '▶️ <span>Putar Animasi 2D</span>'
            : '⏸️ <span>Jeda Animasi 2D</span>';
        };
      } else {
        animToggleBtn.style.display = 'none';
      }
    }

    // Stepper Indicator & Instruction
    document.getElementById('step-current-tag').textContent = `Langkah ${this.currentStep + 1} dari 5`;
    document.getElementById('instruction-text').textContent = stepData.instruction;

    // Text to Speech
    const speakBtn = document.getElementById('speech-btn');
    if (speakBtn) {
      speakBtn.onclick = () => {
        speakBtn.classList.add('btn-warning');
        speakBtn.innerHTML = '🔊 <span>Membacakan...</span>';
        SpeechService.speak(stepData.instruction, () => {
          speakBtn.classList.remove('btn-warning');
          speakBtn.innerHTML = '🔊 <span>Dengarkan Petunjuk</span>';
        });
      };
    }

    // Step Dots Indicator (1-5)
    const dotsContainer = document.getElementById('stepper-dots');
    dotsContainer.innerHTML = ex.steps.map((s, idx) => `
      <button class="step-dot ${idx === this.currentStep ? 'active' : (idx < this.currentStep ? 'completed' : '')}"
              data-step="${idx}" aria-label="Ke langkah ${idx + 1}" title="Langkah ${idx + 1}: ${s.visualCue || ''}">
        ${idx + 1}
      </button>
    `).join('');

    dotsContainer.querySelectorAll('.step-dot').forEach(dot => {
      dot.onclick = () => {
        this.currentStep = parseInt(dot.dataset.step, 10);
        this.renderExerciseScreen();
      };
    });

    // Step Cards Strip (1-5 dengan ilustrasi masing-masing langkah)
    const cardsStrip = document.getElementById('step-cards-strip');
    if (cardsStrip) {
      cardsStrip.innerHTML = ex.steps.map((s, idx) => {
        const isCurrent = idx === this.currentStep;
        const isCompleted = idx < this.currentStep;
        const stepImg = s.imageSrc || ex.imageSrc;
        return `
          <button class="step-card-item ${isCurrent ? 'active' : (isCompleted ? 'completed' : '')}"
                  data-step="${idx}"
                  role="tab"
                  aria-selected="${isCurrent}"
                  aria-label="Langkah ${idx + 1}: ${s.visualCue || ''}">
            <div class="step-card-thumb-mini">
              <img src="${stepImg}" alt="" loading="lazy" />
            </div>
            <span class="step-card-badge">${isCompleted ? '✓ ' : ''}Langkah ${idx + 1}</span>
          </button>
        `;
      }).join('');

      cardsStrip.querySelectorAll('.step-card-item').forEach(card => {
        card.onclick = () => {
          this.currentStep = parseInt(card.dataset.step, 10);
          this.renderExerciseScreen();
        };
      });
    }

    // Control Buttons
    const prevBtn = document.getElementById('step-prev-btn');
    const nextBtn = document.getElementById('step-next-btn');
    const finishBtn = document.getElementById('step-finish-btn');
    const backCatBtn = document.getElementById('ex-back-categories-btn');

    prevBtn.disabled = this.currentStep === 0;
    prevBtn.onclick = () => {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.renderExerciseScreen();
        this.announce(`Langkah ${this.currentStep + 1}: ${ex.steps[this.currentStep].instruction}`);
      }
    };

    if (this.currentStep < 4) {
      nextBtn.style.display = 'inline-flex';
      finishBtn.style.display = 'none';
      nextBtn.onclick = () => {
        this.currentStep++;
        this.renderExerciseScreen();
        this.announce(`Langkah ${this.currentStep + 1}: ${ex.steps[this.currentStep].instruction}`);
      };
    } else {
      nextBtn.style.display = 'none';
      finishBtn.style.display = 'inline-flex';
      finishBtn.onclick = () => {
        this.openEvaluationModal();
      };
    }

    backCatBtn.onclick = () => this.navigate('categories');

    // Teacher Drawer Setup
    this.renderTeacherDrawer(ex);
  }

  renderTeacherDrawer(ex) {
    const trigger = document.getElementById('teacher-drawer-trigger');
    const content = document.getElementById('teacher-drawer-content');
    const adaptText = document.getElementById('drawer-adaptation-text');
    const obsList = document.getElementById('drawer-observations-list');

    adaptText.textContent = ex.teacherGuide.adaptation;
    obsList.innerHTML = ex.teacherGuide.observations.map(item => `<li>${item}</li>`).join('');

    trigger.onclick = () => {
      this.isTeacherDrawerOpen = !this.isTeacherDrawerOpen;
      content.classList.toggle('open', this.isTeacherDrawerOpen);
      trigger.setAttribute('aria-expanded', this.isTeacherDrawerOpen);
      trigger.querySelector('.drawer-arrow').textContent = this.isTeacherDrawerOpen ? '▲' : '▼';
    };
  }

  // ==========================================
  // 04. MODAL LEMBAR OBSERVASI GURU
  // ==========================================
  openEvaluationModal() {
    const ex = this.currentExercise;
    if (!ex) return;

    document.getElementById('modal-exercise-title').textContent = `${ex.code}. ${ex.titleEn} (${ex.titleId})`;
    document.getElementById('eval-exercise-id').value = ex.id;
    document.getElementById('eval-exercise-title').value = `${ex.titleEn} - ${ex.titleId}`;
    document.getElementById('eval-category-title').value = ex.categoryId;

    this.evalModal.classList.add('active');
    document.getElementById('eval-student-code').focus();
    this.announce('Membuka lembar observasi dan evaluasi guru.');
  }

  closeEvaluationModal() {
    this.evalModal.classList.remove('active');
  }

  handleEvaluationSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.evalForm);
    const evalRecord = {
      studentCode: formData.get('studentCode') || 'Murid-A',
      teacherName: formData.get('teacherName') || 'Guru Pendamping',
      exerciseId: formData.get('exerciseId'),
      exerciseTitle: formData.get('exerciseTitle'),
      categoryTitle: formData.get('categoryTitle'),
      taskExecution: formData.get('taskExecution') || 'Ya',
      assistanceLevel: formData.get('assistanceLevel') || 'Mandiri',
      movementAccuracy: formData.get('movementAccuracy') || 'Baik',
      handCondition: formData.get('handCondition') || 'Nyaman',
      qualitativeNotes: formData.get('qualitativeNotes') || '',
      followUpAction: formData.get('followUpAction') || 'Lanjutkan'
    };

    StorageService.saveEvaluation(evalRecord);

    if (this.currentExercise) {
      this.completedToday.add(this.currentExercise.id);
    }

    this.closeEvaluationModal();
    this.updateTodayBadge();
    this.navigate('closing');
  }

  // ==========================================
  // 05. TAMPILAN PENUTUP & REKAPITULASI
  // ==========================================
  renderClosingView() {
    const todayRecords = StorageService.getTodayEvaluations();
    const recapList = document.getElementById('closing-recap-list');
    const totalCount = document.getElementById('closing-total-count');
    const printBtn = document.getElementById('print-recap-btn');
    const csvBtn = document.getElementById('csv-recap-btn');
    const continueBtn = document.getElementById('closing-continue-btn');
    const homeBtn = document.getElementById('closing-home-btn');

    totalCount.textContent = todayRecords.length;

    if (todayRecords.length === 0) {
      recapList.innerHTML = `<li style="color: var(--text-muted); padding: 12px;">Belum ada aktivitas yang dicatat pada sesi hari ini. Silakan pilih latihan di menu kategori.</li>`;
    } else {
      recapList.innerHTML = todayRecords.map(r => `
        <li class="recap-item">
          <div class="recap-item-info">
            <strong>${r.exerciseTitle}</strong>
            <span>Murid: ${r.studentCode} | Bantuan: ${r.assistanceLevel} | Kondisi Tangan: ${r.handCondition}</span>
            ${r.qualitativeNotes ? `<span style="font-style: italic; color: #475569;">"${r.qualitativeNotes}"</span>` : ''}
          </div>
          <div>
            <span class="activity-badge cat-a" style="font-size: 0.8rem;">${r.followUpAction}</span>
          </div>
        </li>
      `).join('');
    }

    // Setup Print Preview Tables
    this.renderPrintTables(todayRecords);

    printBtn.onclick = () => window.print();
    csvBtn.onclick = () => StorageService.exportToCSV();
    continueBtn.onclick = () => this.navigate('categories');
    homeBtn.onclick = () => this.navigate('home');
  }

  renderPrintTables(records) {
    const tableBody = document.getElementById('print-table-body');
    if (!tableBody) return;

    if (records.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center;">Belum ada catatan aktivitas hari ini.</td></tr>`;
      return;
    }

    tableBody.innerHTML = records.map((r, i) => `
      <tr>
        <td style="text-align: center;">${i + 1}</td>
        <td><strong>${r.exerciseTitle}</strong></td>
        <td>${r.studentCode}</td>
        <td>${r.assistanceLevel}</td>
        <td>${r.movementAccuracy}</td>
        <td>${r.handCondition}</td>
        <td>${r.qualitativeNotes || '-'} (${r.followUpAction})</td>
      </tr>
    `).join('');
  }

  updateTodayBadge() {
    const badge = document.getElementById('nav-today-count');
    if (badge) {
      const todayRecords = StorageService.getTodayEvaluations();
      badge.textContent = todayRecords.length;
      badge.style.display = todayRecords.length > 0 ? 'inline-flex' : 'none';
    }
  }

  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Hanya aktif bila sedang berada di layar latihan dan modal tertutup
      if (this.currentView === 'exercise' && !this.evalModal.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
          const nextBtn = document.getElementById('step-next-btn');
          const finishBtn = document.getElementById('step-finish-btn');
          if (nextBtn && nextBtn.style.display !== 'none') {
            nextBtn.click();
          } else if (finishBtn && finishBtn.style.display !== 'none') {
            finishBtn.click();
          }
        } else if (e.key === 'ArrowLeft') {
          const prevBtn = document.getElementById('step-prev-btn');
          if (prevBtn && !prevBtn.disabled) {
            prevBtn.click();
          }
        }
      }
    });
  }
}

// Inisialisasi Aplikasi saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  window.app = new BinaGerakApp();
});
