// Material Detail Component with Rich Media & In-Page Mini Activities

window.renderMaterialDetail = function() {

  const state = window.store.getState();

  const materiId = state.selectedMateriId || 1;

  const materi = window.MateriData.find(m => m.id === materiId) || window.MateriData[0];

  // Objectives List HTML
  const objectivesHtml = materi.objectives.map(obj => `
    <li>${obj}</li>
  `).join('');

  // Mini Activity Component Builder
  let miniActivityHtml = '';

  if (materi.id === 1) {

    miniActivityHtml = `
      <div class="card" style="padding: 2rem; background: linear-gradient(135deg, #f8fafc 0%, #ede9fe 100%); border: 1.5px solid #c4b5fd;">

        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: var(--accent-purple);">
            ${window.getIcon('zap', '', 24)}
          </span>

          <h3 style="font-size: 1.15rem; color: var(--primary-navy);">
            Aktivitas Interaktif: Hubungan Sederhana Sistem Komputer
          </h3>
        </div>

        <p style="font-size: 0.9rem; color: #475569; margin-bottom: 1.5rem;">
          Klik lapisan di bawah ini untuk melihat alur hubungan antara Pengguna, Sistem Operasi, Aplikasi, dan Perangkat Keras:
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="layer-selector-container">

          <div class="layer-bar layer-bar-1 active"
               data-layer="user"
               style="padding: 1rem; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: flex; justify-content: space-between;">

            <span>1. Pengguna (User)</span>
            <span>Manusia yang Mengoperasikan</span>

          </div>

          <div class="layer-bar layer-bar-3"
               data-layer="os"
               style="padding: 1rem; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: flex; justify-content: space-between; border: 2px solid var(--accent-purple);">

            <span>2. Sistem Operasi (Operating System) ★</span>
            <span>Perangkat Lunak Pengatur Utama</span>

          </div>

          <div class="layer-bar layer-bar-2"
               data-layer="app"
               style="padding: 1rem; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: flex; justify-content: space-between;">

            <span>3. Aplikasi (Application)</span>
            <span>Word, Browser, Pemutar Musik, Game</span>

          </div>

          <div class="layer-bar layer-bar-4"
               data-layer="hw"
               style="padding: 1rem; border-radius: var(--radius-md); font-weight: 700; cursor: pointer; display: flex; justify-content: space-between;">

            <span>4. Perangkat Keras (Hardware)</span>
            <span>CPU, RAM, Harddisk/SSD, Keyboard, Mouse</span>

          </div>

        </div>

        <div id="layer-detail-box"
             style="background: white; border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-color); font-size: 0.92rem; line-height: 1.6;">

          <strong>1. Pengguna (User):</strong>
          Manusia yang menggunakan komputer untuk belajar, membuat dokumen, atau menjalankan tugas.
          Pengguna berinteraksi dengan komputer melalui sistem operasi.

        </div>

      </div>
    `;

  } else if (materi.id === 2) {

    miniActivityHtml = `
      <div class="card" style="padding: 2rem; background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%); border: 1.5px solid #7dd3fc;">

        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: var(--brand-blue);">
            ${window.getIcon('zap', '', 24)}
          </span>

          <h3 style="font-size: 1.15rem; color: var(--primary-navy);">
            Aktivitas Interaktif: Klasifikasi Perangkat Cerdas
          </h3>
        </div>

        <p style="font-size: 0.9rem; color: #475569; margin-bottom: 1.5rem;">
          Uji intuisimu! Tebak jenis OS yang paling sesuai untuk setiap skenario perangkat di bawah ini:
        </p>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;" id="classifier-game-box">

          <div class="card" style="padding: 1.25rem;" id="class-card-1">

            <h4 style="font-size: 0.95rem; margin-bottom: 0.4rem;">
              1. Mesin ATM Bank
            </h4>

            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.85rem;">
              Perangkat perbankan 24 jam dengan hardware khusus dan fungsi transaksi presisi.
            </p>

            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">

              <button class="btn btn-outline-primary btn-sm btn-cls"
                      data-q="1"
                      data-val="mobile">
                Mobile OS
              </button>

              <button class="btn btn-outline-primary btn-sm btn-cls"
                      data-q="1"
                      data-val="embedded">
                Embedded OS
              </button>

            </div>

            <div class="cls-feedback"
                 id="cls-feed-1"
                 style="font-size: 0.8rem; margin-top: 0.6rem; display: none;">
            </div>

          </div>


          <div class="card" style="padding: 1.25rem;" id="class-card-2">

            <h4 style="font-size: 0.95rem; margin-bottom: 0.4rem;">
              2. Pusat Server YouTube
            </h4>

            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.85rem;">
              Pusat data melayani streaming miliaran video tanpa boleh mati (uptime 99.999%).
            </p>

            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">

              <button class="btn btn-outline-primary btn-sm btn-cls"
                      data-q="2"
                      data-val="server">
                Server OS (Linux)
              </button>

              <button class="btn btn-outline-primary btn-sm btn-cls"
                      data-q="2"
                      data-val="desktop">
                Desktop OS
              </button>

            </div>

            <div class="cls-feedback"
                 id="cls-feed-2"
                 style="font-size: 0.8rem; margin-top: 0.6rem; display: none;">
            </div>

          </div>

        </div>

      </div>
    `;

  } else if (materi.id === 3) {

    miniActivityHtml = `
      <div class="card" style="padding: 2rem; background: linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%); border: 1.5px solid #6ee7b7;">

        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">

          <span style="color: var(--success);">
            ${window.getIcon('zap', '', 24)}
          </span>

          <h3 style="font-size: 1.15rem; color: var(--primary-navy);">
            Aktivitas Interaktif: Simulasi Virtual Memory (Paging)
          </h3>

        </div>

        <p style="font-size: 0.9rem; color: #475569; margin-bottom: 1.5rem;">
          Coba buka beberapa aplikasi di bawah ini untuk melihat bagaimana Sistem Operasi membagi ruang RAM dan memindahkan data ke Virtual Memory saat RAM penuh.
        </p>

        <div style="background: white; border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-color); margin-bottom: 1.25rem;">

          <div style="display: flex; justify-content: space-between; font-size: 0.88rem; font-weight: 600; margin-bottom: 0.5rem;">

            <span>Kapasitas RAM Fisik (8 GB Total)</span>

            <span id="sim-ram-text" style="color: var(--brand-blue);">
              4 GB Terpakai (50%)
            </span>

          </div>

          <div class="progress-track"
               style="height: 14px; background: #e2e8f0;">

            <div id="sim-ram-bar"
                 class="progress-fill"
                 style="width: 50%; background: var(--brand-blue);">
            </div>

          </div>

          <div id="sim-paging-alert"
               style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--warning); display: none; font-weight: 600;">

            ⚠️ RAM Penuh! Sistem Operasi mengaktifkan Paging File ke SSD agar aplikasi tidak crash.

          </div>

        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">

          <button class="btn btn-secondary btn-sm" id="btn-add-app-tab">

            ${window.getIcon('zap', '', 14)}

            <span>
              + Buka 10 Tab Browser (Tambah 2 GB)
            </span>

          </button>

          <button class="btn btn-secondary btn-sm" id="btn-reset-ram-sim">

            ${window.getIcon('rotateCcw', '', 14)}

            <span>
              Reset Memori
            </span>

          </button>

        </div>

      </div>
    `;
  }


  // Section builders
  let sectionsHtml = '';

  materi.sections.forEach(sec => {

    if (sec.type === 'lead') {

      sectionsHtml += `
        <div class="lead-box">
          <p>${sec.content}</p>
        </div>
      `;

    } else if (sec.type === 'definition') {

      sectionsHtml += `
        <div class="definition-card">

          <h3>
            ${window.getIcon('bookOpen', '', 22)}
            <span>${sec.title}</span>
          </h3>

          <p>${sec.content}</p>

        </div>
      `;

    } else if (sec.type === 'grid') {

      const itemsHtml = sec.items.map(item => `

        <div class="card" style="padding: 1.5rem;">

          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">

            <div style="width: 36px; height: 36px; border-radius: var(--radius-sm); background: var(--brand-blue-subtle); color: var(--brand-blue); display: flex; align-items: center; justify-content: center;">

              ${window.getIcon(item.icon, '', 20)}

            </div>

            <h4 style="font-size: 1.05rem;">
              ${item.title}
            </h4>

          </div>

          <p style="font-size: 0.9rem; color: #475569; line-height: 1.55;">
            ${item.desc}
          </p>

        </div>

      `).join('');


      sectionsHtml += `

        <div>

          <h3 style="font-size: 1.3rem; margin-bottom: 1.25rem;">
            ${sec.title}
          </h3>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">

            ${itemsHtml}

          </div>

        </div>

      `;

    } else if (sec.type === 'diagram') {

      const layersHtml = sec.layers.map(l => `

        <div style="background: ${l.highlighted ? '#ede9fe' : '#f8fafc'}; border: ${l.highlighted ? '2px solid #8b5cf6' : '1px solid var(--border-color)'}; border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center;">

          <div>

            <strong style="color: var(--primary-navy);">
              ${l.name}
            </strong>

            <div style="font-size: 0.82rem; color: var(--text-muted);">
              ${l.role}
            </div>

          </div>

          ${
            l.highlighted
              ? '<span style="font-size: 0.75rem; font-weight: 700; color: #6d28d9; background: #ddd6fe; padding: 0.2rem 0.6rem; border-radius: 99px;">FOKUS UTAMA</span>'
              : ''
          }

        </div>

      `).join('');


      sectionsHtml += `

        <div class="card" style="padding: 2rem;">

          <h3 style="font-size: 1.25rem; margin-bottom: 0.4rem;">
            ${sec.title}
          </h3>

          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
            ${sec.desc}
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">

            ${layersHtml}

          </div>

          <div style="background: #f1f5f9; padding: 1rem 1.25rem; border-radius: var(--radius-md); font-size: 0.9rem; color: #334155;">

            <strong>Prinsip Kunci:</strong>
            ${sec.explanation}

          </div>

        </div>

      `;

    } else if (sec.type === 'typesList') {

      const typesHtml = sec.items.map(item => `

        <div class="card" style="padding: 1.75rem; margin-bottom: 1.25rem; border-left: 4px solid var(--brand-blue);">

          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">

            <div style="display: flex; align-items: center; gap: 0.75rem;">

              <div style="width: 42px; height: 42px; border-radius: var(--radius-md); background: var(--brand-blue-subtle); color: var(--brand-blue); display: flex; align-items: center; justify-content: center;">

                ${window.getIcon(item.icon, '', 22)}

              </div>

              <h4 style="font-size: 1.15rem;">
                ${item.title}
              </h4>

            </div>

            <span style="font-size: 0.75rem; font-weight: 700; background: #e0f2fe; color: #0284c7; padding: 0.25rem 0.6rem; border-radius: 99px;">
              ${item.tag}
            </span>

          </div>

          <p style="font-size: 0.92rem; color: #334155; line-height: 1.6; margin-bottom: 1rem;">
            ${item.desc}
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">

            ${
              item.examples.map(ex =>
                `<span style="font-size: 0.78rem; background: #f1f5f9; color: #475569; padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 500;">${ex}</span>`
              ).join('')
            }

          </div>

        </div>

      `).join('');


      sectionsHtml += `

        <div>

          <h3 style="font-size: 1.3rem; margin-bottom: 1.25rem;">
            ${sec.title}
          </h3>

          ${typesHtml}

        </div>

      `;

    } else if (sec.type === 'comparisonTable') {

      const thHtml = sec.headers
        .map(h => `<th>${h}</th>`)
        .join('');

      const rowsHtml = sec.rows.map(row => `

        <tr>

          ${
            row.map((cell, idx) =>
              idx === 0
                ? `<td><strong>${cell}</strong></td>`
                : `<td>${cell}</td>`
            ).join('')
          }

        </tr>

      `).join('');


      sectionsHtml += `

        <div>

          <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">
            ${sec.title}
          </h3>

          <div class="table-responsive">

            <table class="materi-table">

              <thead>
                <tr>
                  ${thHtml}
                </tr>
              </thead>

              <tbody>
                ${rowsHtml}
              </tbody>

            </table>

          </div>

        </div>

      `;

    } else if (sec.type === 'functionsList') {

      const funcsHtml = sec.items.map(fn => `

        <div class="card" style="padding: 1.5rem; display: flex; gap: 1.25rem; align-items: flex-start;">

          <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); color: var(--brand-blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">

            ${window.getIcon(fn.icon, '', 22)}

          </div>

          <div>

            <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--primary-navy);">
              ${fn.title}
            </h4>

            <p style="font-size: 0.9rem; color: #475569; line-height: 1.6;">
              ${fn.desc}
            </p>

          </div>

        </div>

      `).join('');


      sectionsHtml += `

        <div>

          <h3 style="font-size: 1.3rem; margin-bottom: 1.25rem;">
            ${sec.title}
          </h3>

          <div style="display: flex; flex-direction: column; gap: 1rem;">

            ${funcsHtml}

          </div>

        </div>

      `;

    } else if (sec.type === 'diagramBox') {

      const stepsHtml = sec.steps.map(st => `

        <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1rem; background: #f8fafc; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-purple);">

          <span style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: var(--accent-purple); min-width: 80px;">
            ${st.time}
          </span>

          <strong style="font-size: 0.9rem; min-width: 170px;">
            ${st.task}
          </strong>

          <span style="font-size: 0.85rem; color: var(--text-muted);">
            ${st.note}
          </span>

        </div>

      `).join('');


      sectionsHtml += `

        <div class="card" style="padding: 2rem;">

          <h3 style="font-size: 1.25rem; margin-bottom: 0.4rem;">
            ${sec.title}
          </h3>

          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">
            ${sec.desc}
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.25rem;">

            ${stepsHtml}

          </div>

          <div style="background: #ede9fe; color: #5b21b6; padding: 0.9rem 1.2rem; border-radius: var(--radius-md); font-size: 0.88rem; font-weight: 500;">

            ${sec.summary}

          </div>

        </div>

      `;

    } else if (sec.type === 'realLife') {

      sectionsHtml += `

        <div class="case-study-box">

          <div class="case-icon-box">

            ${window.getIcon('compass', '', 24)}

          </div>

          <div>

            <h4 style="font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--primary-navy);">
              ${sec.title}
            </h4>

            <p style="font-size: 0.92rem; color: #334155; line-height: 1.6;">
              ${sec.content}
            </p>

          </div>

        </div>

      `;

    } else if (sec.type === 'accordions') {

      const accItemsHtml = sec.items.map((it, idx) => `

        <div class="accordion-item" id="acc-${materi.id}-${idx}">

          <div class="accordion-header"
               data-toggle="accordion"
               data-target="acc-${materi.id}-${idx}">

            <span>${it.q}</span>

            <span class="acc-icon">
              ${window.getIcon('chevronDown', '', 18)}
            </span>

          </div>

          <div class="accordion-body">
            ${it.a}
          </div>

        </div>

      `).join('');


      sectionsHtml += `

        <div>

          <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">
            ${sec.title}
          </h3>

          <div class="accordion-group">

            ${accItemsHtml}

          </div>

        </div>

      `;
    }
  });


  // Calculate Next & Previous buttons
  const isFirst = materi.id === 1;
  const isLast = materi.id === 3;

  const nextText = isLast
    ? 'Lanjut ke Media Interaktif'
    : `Lanjut ke Materi ${materi.id + 1}`;

  const nextTarget = isLast
    ? 'media-interaktif'
    : 'materi-detail';


  return `

    <div class="detail-materi-container fade-in">

      <!-- Breadcrumb -->

      <nav class="breadcrumb">

        <a data-nav="dashboard">
          Dashboard
        </a>

        <span>
          ${window.getIcon('chevronRight', '', 12)}
        </span>

        <a data-nav="materi">
          Materi
        </a>

        <span>
          ${window.getIcon('chevronRight', '', 12)}
        </span>

        <span style="color: var(--text-main); font-weight: 600;">
          Materi ${materi.number}
        </span>

      </nav>


      <!-- Header Card -->

      <div class="materi-header-card">

        <div class="materi-top-tags">

          <span class="mat-number-badge">
            Materi ${materi.number} dari 3
          </span>

          <span style="font-size: 0.78rem; background: var(--accent-purple-subtle); color: var(--accent-purple); padding: 0.2rem 0.6rem; border-radius: 99px; font-weight: 600;">

            ${materi.badge}

          </span>

          <span style="font-size: 0.78rem; color: var(--text-muted); margin-left: auto;">

            Waktu Baca: ${materi.readTime}

          </span>

        </div>


        <h1 style="font-size: 1.85rem; margin-bottom: 0.35rem; color: var(--primary-navy);">

          ${materi.title}

        </h1>


        <p style="color: var(--text-muted); font-size: 1.05rem;">

          ${materi.subtitle}

        </p>

        <div class="objectives-box">

          <h4>

            ${window.getIcon('checkCircle', '', 16)}

            <span>Tujuan Pembelajaran:</span>

          </h4>

          <ul>

            ${objectivesHtml}

          </ul>

        </div>

      </div>


      <!-- Main Body Content -->

      <div class="materi-body">

        ${sectionsHtml}

        ${miniActivityHtml}

      </div>


      <!-- Bottom Nav Bar -->

      <div class="materi-footer-nav">

        <button class="btn btn-secondary" data-nav="materi">

          ${window.getIcon('arrowLeft', '', 16)}

          <span>Daftar Materi</span>

        </button>


        <button class="btn btn-primary btn-lg"
                id="btn-materi-next"
                data-next-target="${nextTarget}"
                data-next-id="${materi.id + 1}">

          <span>${nextText}</span>

          ${window.getIcon('arrowRight', '', 18)}

        </button>

      </div>

    </div>

  `;
};