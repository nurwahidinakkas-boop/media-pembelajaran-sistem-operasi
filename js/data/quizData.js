// Bank Soal Kuis Interaktif Sistem Operasi (Kelas XI SMA)
// 10 Soal Pilihan Ganda Berdasarkan Materi Terbaru dengan Feedback Langsung & Penjelasan

window.QuizQuestions = [
  {
    id: 1,
    topic: "Pengertian Sistem Operasi",
    topicId: 1,
    question: "Manakah yang merupakan pengertian sistem operasi?",
    options: [
      "Perangkat untuk mencetak dokumen",
      "Perangkat lunak yang mengatur dan mengendalikan kerja komputer",
      "Perangkat untuk menyimpan data",
      "Perangkat keras untuk memproses gambar"
    ],
    correct: 1,
    feedbackCorrect: "Benar! Sistem operasi merupakan perangkat lunak utama yang mengatur dan mengendalikan kerja komputer.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah B.",
    explanation: "Sistem operasi adalah perangkat lunak utama yang mengatur dan mengendalikan kerja komputer serta menjadi penghubung antara pengguna, aplikasi, dan perangkat keras."
  },
  {
    id: 2,
    topic: "Pengertian Sistem Operasi",
    topicId: 1,
    question: "Sistem operasi berfungsi sebagai penghubung antara...",
    options: [
      "Komputer dengan stopkontak listrik saja",
      "Pengguna, aplikasi, dan perangkat keras",
      "Kertas cetak dan tinta printer",
      "Monitor dan mouse tanpa melalui komputer"
    ],
    correct: 1,
    feedbackCorrect: "Benar! Sistem operasi menjadi penghubung antara pengguna, aplikasi, dan perangkat keras.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah B.",
    explanation: "Tanpa sistem operasi, pengguna akan kesulitan menjalankan aplikasi dan menggunakan perangkat komputer secara langsung."
  },
  {
    id: 3,
    topic: "Pengertian Sistem Operasi",
    topicId: 1,
    question: "Manakah di bawah ini yang seluruhnya merupakan contoh sistem operasi?",
    options: [
      "Windows, Linux, macOS, Android, dan iOS",
      "Microsoft Word, Excel, PowerPoint, dan Canva",
      "Google Chrome, Mozilla Firefox, dan Opera",
      "CPU, RAM, Harddisk, dan Keyboard"
    ],
    correct: 0,
    feedbackCorrect: "Benar! Windows, Linux, macOS, Android, dan iOS adalah contoh sistem operasi.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah A.",
    explanation: "Windows, Linux, macOS, Android, dan iOS adalah contoh sistem operasi yang digunakan pada komputer, laptop, smartphone, dan tablet."
  },
  {
    id: 4,
    topic: "Jenis-Jenis Sistem Operasi",
    topicId: 2,
    question: "Sistem operasi yang digunakan pada komputer dan laptop untuk membuat dokumen, mengedit video, belajar, dan bermain game adalah...",
    options: [
      "Sistem operasi desktop",
      "Sistem operasi mobile",
      "Sistem operasi sensor",
      "Sistem operasi kendaraan"
    ],
    correct: 0,
    feedbackCorrect: "Benar! Sistem operasi desktop digunakan pada komputer dan laptop.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah A.",
    explanation: "Contoh sistem operasi desktop adalah Windows, macOS, dan Linux yang digunakan untuk kebutuhan komputasi pada komputer dan laptop."
  },
  {
    id: 5,
    topic: "Jenis-Jenis Sistem Operasi",
    topicId: 2,
    question: "Contoh sistem operasi mobile yang dirancang untuk smartphone dan tablet dengan layar sentuh adalah...",
    options: [
      "Windows Server dan Red Hat",
      "Android dan iOS",
      "FreeRTOS dan BIOS",
      "Microsoft Word dan Excel"
    ],
    correct: 1,
    feedbackCorrect: "Benar! Android dan iOS adalah contoh sistem operasi mobile pada smartphone dan tablet.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah B.",
    explanation: "Sistem operasi mobile dirancang khusus untuk perangkat layar sentuh dan memiliki fitur seperti kamera, GPS, serta berbagai sensor."
  },
  {
    id: 6,
    topic: "Jenis-Jenis Sistem Operasi",
    topicId: 2,
    question: "Sistem operasi yang digunakan pada komputer server untuk menyediakan dan mengelola layanan website, database, dan jaringan adalah...",
    options: [
      "Sistem operasi server",
      "Sistem operasi mobile",
      "Sistem operasi embedded",
      "Sistem operasi game"
    ],
    correct: 0,
    feedbackCorrect: "Benar! Sistem operasi server digunakan untuk mengelola layanan website, database, file, dan jaringan.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah A.",
    explanation: "Contoh sistem operasi server meliputi Ubuntu Server, Windows Server, dan Red Hat Enterprise Linux."
  },
  {
    id: 7,
    topic: "Jenis-Jenis Sistem Operasi",
    topicId: 2,
    question: "Perangkat khusus seperti mesin ATM, router Wi-Fi, dan Smart TV menggunakan jenis sistem operasi...",
    options: [
      "Sistem operasi embedded",
      "Sistem operasi desktop",
      "Sistem operasi office",
      "Sistem operasi grafis"
    ],
    correct: 0,
    feedbackCorrect: "Benar! Mesin ATM, router, dan Smart TV menggunakan sistem operasi embedded.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah A.",
    explanation: "Sistem operasi embedded digunakan pada perangkat khusus agar dapat bekerja secara spesifik, stabil, dan efisien pada perangkat tertentu."
  },
  {
    id: 8,
    topic: "Fungsi Sistem Operasi",
    topicId: 3,
    question: "Ketika siswa mengetik menggunakan keyboard, sistem operasi membantu menerima input tersebut agar dapat diproses oleh komputer. Hal ini merupakan contoh fungsi...",
    options: [
      "Mengelola perangkat keras",
      "Mengubah bentuk fisik monitor",
      "Membuat animasi dokumen",
      "Mematikan daya komputer"
    ],
    correct: 0,
    feedbackCorrect: "Benar! Mengatur keyboard, mouse, CPU, RAM, dan printer adalah fungsi mengelola perangkat keras.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah A.",
    explanation: "Sistem operasi mengatur penggunaan perangkat keras seperti CPU, RAM, hard disk/SSD, keyboard, mouse, dan printer."
  },
  {
    id: 9,
    topic: "Fungsi Sistem Operasi",
    topicId: 3,
    question: "Ketika siswa menyimpan tugas sekolah dengan nama 'Tugas_Informatika.docx', fungsi sistem operasi yang bekerja adalah...",
    options: [
      "Mengelola file",
      "Mengatur pendingin ruangan",
      "Menaikkan volume speaker",
      "Mengganti kabel charger"
    ],
    correct: 0,
    feedbackCorrect: "Benar! Sistem operasi membantu pengguna membuat, menyimpan, membuka, memindahkan, dan mengelola file.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah A.",
    explanation: "Fungsi mengelola file membantu pengguna membuat, menyimpan, membuka, memindahkan, menyalin, dan menghapus file di penyimpanan."
  },
  {
    id: 10,
    topic: "Fungsi Sistem Operasi",
    topicId: 3,
    question: "Fitur password, hak akses pengguna, penguncian perangkat, dan izin aplikasi merupakan contoh dari fungsi sistem operasi dalam...",
    options: [
      "Mengatur keamanan",
      "Memperindah wallpaper",
      "Menambah tombol keyboard",
      "Menghubungkan printer"
    ],
    correct: 0,
    feedbackCorrect: "Benar! Password, hak akses, dan izin aplikasi merupakan bagian dari fungsi mengatur keamanan.",
    feedbackWrong: "Kurang tepat. Jawaban yang benar adalah A.",
    explanation: "Sistem operasi membantu melindungi perangkat dan data melalui fitur keamanan seperti password, hak akses pengguna, penguncian perangkat, dan izin aplikasi."
  }
];
