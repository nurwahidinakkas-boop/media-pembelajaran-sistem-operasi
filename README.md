# Media Pembelajaran Interaktif — Sistem Operasi (Kelas XI SMA)

Website media pembelajaran interaktif modern berbasis web untuk siswa **Kelas XI SMA** pada mata pelajaran **Informatika** (Elemen Kurikulum Merdeka: **Sistem Komputer / SK**), dengan topik utama **“Sistem Operasi”**.

---

## 🚀 Cara Menjalankan Website

Website ini dibuat dengan arsitektur murni **HTML5, CSS3, dan Modern JavaScript (ES6+)** yang mandiri (*standalone*), tanpa memerlukan instalasi Node.js atau dependensi rumit lainnya.

Terdapat dua cara mudah untuk menjalankannya:

### Cara 1: Langsung Buka di Peramban (Paling Mudah)
1. Buka folder proyek di File Explorer:  
   `C:\Users\LENOVO\.gemini\antigravity\scratch\media-pembelajaran-os`
2. Klik ganda pada berkas **`index.html`**.
3. Website akan langsung terbuka dan berfungsi penuh di peramban favorit Anda (Microsoft Edge, Google Chrome, Opera GX, Mozilla Firefox, dll).

### Cara 2: Menjalankan Server Lokal Python (Direkomendasikan)
1. Klik ganda pada berkas **`jalankan_website.bat`**, atau
2. Buka terminal di folder proyek dan jalankan perintah:
   ```bash
   python server.py
   ```
   atau
   ```bash
   python -m http.server 8000
   ```
3. Buka peramban pada alamat: [http://localhost:8000](http://localhost:8000)

---

## 📚 Struktur & Alur Pembelajaran (Flowchart)

Alur pembelajaran dirancang terstruktur dan berpusat pada siswa (*Student-Centered Learning*):

```
MULAI
  ↓
DASHBOARD (Hero Section, Progres Keseluruhan, 3 Card Materi, Akses Cepat)
  ↓
PETUNJUK (Panduan Timeline 6 Langkah Belajar)
  ↓
MATERI (Daftar 3 Topik Utama)
  ↓
DETAIL MATERI:
  ├─ MATERI 1: Pengertian Sistem Operasi (+ Eksplorasi 4 Lapisan Interaktif)
  ├─ MATERI 2: Jenis-Jenis Sistem Operasi (+ Kuis Mini Klasifikasi Perangkat)
  └─ MATERI 3: Fungsi Sistem Operasi (+ Simulasi Pengelolaan Memori RAM)
  ↓
MEDIA PEMBELAJARAN INTERAKTIF
  ├─ Visual Motherboard & Komputer Interaktif (Klik CPU, RAM, SSD, I/O, GUI, Security)
  ├─ Live Task Manager Simulator (Buka/Tutup Aplikasi, Pantau CPU & RAM Real-time)
  └─ Tombol Lanjut ke Kuis
  ↓
KUIS INTERAKTIF (10 Soal Pilihan Ganda + Feedback & Pembahasan Instan)
  ↓
EVALUASI PEMBELAJARAN (10 Soal Ujian Komprehensif + Palet Navigasi Nomor Soal)
  ↓
HASIL / SKOR (Skor Akhir, Ring Chart SVG, Predikat, Rekomendasi Belajar Diagnostik)
  ↓
PILIHAN:
  ├─ [ Ulangi Evaluasi ]
  ├─ [ Kembali ke Materi ]
  ├─ [ Kembali ke Dashboard ]
  └─ [ Selesai ]
  ↓
PEMBELAJARAN SELESAI
  ├─ Ucapan Selamat & Skor Terakhir
  ├─ Sertifikat Digital Interaktif (Bisa ubah nama siswa & cetak ke PDF)
  └─ Kembali ke Dashboard
```

---

## 🎨 Desain Visual & Karakteristik EdTech Modern

- **Skema Warna Profesional:**
  - *Navy / Dark Blue:* `#0f172a`, `#1e293b`, `#090d16`
  - *Light Blue:* `#0284c7`, `#38bdf8`, `#e0f2fe`
  - *White / Clean Gray:* `#ffffff`, `#f8fafc`, `#f1f5f9`
  - *Soft Purple Accent:* `#8b5cf6`, `#c084fc`, `#ede9fe`
- **Tipografi:** Font Inter & Poppins yang ramah dan nyaman dibaca untuk siswa SMA.
- **Responsif:** Optimal pada layar Desktop, Laptop, Tablet, hingga Layar Ponsel (*mobile drawer hamburger menu*).
- **Audio Feedback Nativ:** Efek audio lembut menggunakan Web Audio API (dapat dinyalakan/dimatikan pada tombol di navbar atas).
- **Penyimpanan Status Belajar:** Menggunakan `localStorage` peramban sehingga progres belajar siswa tidak hilang saat halaman disegarkan (*reload*).

---

## 📁 Struktur Berkas Proyek

```
media-pembelajaran-os/
│
├── index.html                  # Titik masuk utama aplikasi (SPA)
├── jalankan_website.bat        # Skrip otomatis untuk menjalankan server lokal di Windows
├── server.py                   # Skrip Python server HTTP dengan deteksi port otomatis
├── README.md                   # Dokumentasi lengkap media pembelajaran
│
├── css/
│   └── style.css               # Desain sistem modular lengkap (variabel, layout, animasi, print)
│
└── js/
    ├── icons.js                # Koleksi ikon SVG mandiri (100% offline)
    ├── sound.js                # Sintesis efek audio Web Audio API
    ├── state.js                # State management reaktif & localStorage
    ├── app.js                  # Koordinator utama dan pengait event interaktif
    │
    ├── data/
    │   ├── materiData.js       # Konten lengkap Materi 1, 2, dan 3
    │   ├── quizData.js         # Bank 10 soal kuis pilihan ganda + pembahasan
    │   └── evalData.js         # Bank 10 soal evaluasi studi kasus komprehensif
    │
    └── components/
        ├── navbar.js           # Header topbar, judul dinamis, tombol suara, menu mobile
        ├── sidebar.js          # Navigasi samping, penanda aktif, bar progres keseluruhan
        ├── dashboard.js        # Halaman dashboard hero, ilustrasi laptop, 3 card materi
        ├── instructions.js     # Halaman petunjuk penggunaan timeline 6 langkah
        ├── materials.js        # Halaman ikhtisar 3 materi besar
        ├── materialDetail.js   # Halaman detail materi, breadcrumb, aktivitas mini, navigasi
        ├── interactiveMedia.js # Visual komputer interaktif & live simulator Task Manager
        ├── quiz.js             # Kuis interaktif 10 soal dengan feedback instan
        ├── evaluation.js       # Antarmuka ujian evaluasi dengan palet nomor soal 1-10
        ├── result.js           # Hasil skor, ring chart SVG, rekomendasi belajar diagnostik
        ├── finished.js         # Halaman penyelesaian dan sertifikat kelulusan digital
        └── profile.js          # Profil media pembelajaran & informasi capaian kurikulum
```

---

## 💡 Informasi Akademik

- **Nama Media:** Media Pembelajaran Interaktif Sistem Operasi
- **Mata Pelajaran:** Informatika
- **Kelas / Fase:** Kelas XI SMA (Fase F)
- **Topik Pembelajaran:** Sistem Operasi (*Operating System*)
- **Elemen:** Sistem Komputer (SK)
- **Privasi:** 100% Client-side. Tidak meminta atau menyimpan data pribadi sensitif siswa di luar sesi peramban lokal.
