// Data Materi Pembelajaran Interaktif Sistem Operasi
// Disesuaikan untuk Siswa Kelas XI SMA (Informatika)

window.MateriData = [
  {
    id: 1,
    number: "01",
    title: "Pengertian Sistem Operasi",
    subtitle: "Perangkat Lunak Utama Pengatur dan Pengendali Komputer",
    badge: "Konsep Dasar",
    readTime: "6 Menit",
    icon: "layers",
    summary: "Memahami pengertian sistem operasi sebagai perangkat lunak utama penghubung pengguna, aplikasi, dan perangkat keras.",
    objectives: [
      "Menjelaskan pengertian sistem operasi.",
      "Menjelaskan peran sistem operasi pada komputer.",
      "Menyebutkan contoh sistem operasi."
    ],
    sections: [
      {
        type: "lead",
        content: "Sistem Operasi atau <em>Operating System (OS)</em> adalah perangkat lunak utama yang mengatur dan mengendalikan kerja komputer. Sistem operasi menjadi penghubung antara pengguna, aplikasi, dan perangkat keras."
      },
      {
        type: "definition",
        title: "Pentingnya Sistem Operasi",
        content: "Tanpa sistem operasi, pengguna akan kesulitan menjalankan aplikasi dan menggunakan perangkat komputer secara langsung. Sistem operasi bekerja secara otomatis agar komputer siap digunakan."
      },
      {
        type: "realLife",
        title: "Contoh Sederhana Penggunaan",
        content: "Ketika siswa membuka Microsoft Word, sistem operasi membantu menjalankan aplikasi tersebut dan mengatur penggunaan CPU, RAM, penyimpanan, keyboard, dan mouse sehingga pengetikan dapat berjalan lancar."
      },
      {
        type: "diagram",
        title: "Hubungan Sederhana Sistem Komputer",
        desc: "Alur interaksi dari pengguna hingga ke perangkat keras komputer:",
        layers: [
          { name: "1. Pengguna (User)", role: "Manusia yang mengoperasikan komputer", color: "indigo" },
          { name: "2. Sistem Operasi (Operating System)", role: "Penghubung dan pengatur kerja utama komputer", color: "purple", highlighted: true },
          { name: "3. Aplikasi (Application)", role: "Program yang digunakan (Word, Browser, Game)", color: "sky" },
          { name: "4. Perangkat Keras (Hardware)", role: "CPU, RAM, SSD/Harddisk, Keyboard, Mouse", color: "slate" }
        ],
        explanation: "Pengguna memberi perintah melalui Sistem Operasi, yang kemudian mengarahkan Aplikasi dan mengatur kerja Perangkat Keras secara terkoordinasi."
      },
      {
        type: "grid",
        title: "Contoh Sistem Operasi Populer",
        items: [
          {
            title: "Windows",
            desc: "Sistem operasi yang sangat populer untuk komputer dan laptop di sekolah maupun perkantoran.",
            icon: "monitor",
            color: "blue"
          },
          {
            title: "Linux",
            desc: "Sistem operasi yang fleksibel dan banyak digunakan untuk belajar, server, maupun perangkat pintar.",
            icon: "terminal",
            color: "emerald"
          },
          {
            title: "macOS",
            desc: "Sistem operasi yang dikembangkan khusus untuk komputer dan laptop buatan Apple.",
            icon: "cpu",
            color: "purple"
          },
          {
            title: "Android & iOS",
            desc: "Sistem operasi yang digunakan pada smartphone dan tablet untuk aktivitas mobile sehari-hari.",
            icon: "smartphone",
            color: "sky"
          }
        ]
      },
      {
        type: "realLife",
        title: "Contoh dalam Kehidupan Sehari-hari",
        content: "Ketika kita menyalakan laptop dan membuka aplikasi, sistem operasi bekerja di belakang layar untuk memastikan perangkat dan aplikasi dapat digunakan dengan baik."
      },
      {
        type: "accordions",
        title: "Tahukah Kamu?",
        items: [
          {
            q: "Tahukah Kamu? Peran Sistem Operasi di Balik Layar",
            a: "Ketika kamu menyimpan file, membuka aplikasi, atau menggunakan keyboard dan mouse, sistem operasi membantu mengatur proses tersebut agar berjalan tanpa benturan."
          },
          {
            q: "Apa yang terjadi jika komputer tidak memiliki sistem operasi?",
            a: "Tanpa sistem operasi, layar komputer hanya akan menampilkan instruksi dasar BIOS/UEFI dan tidak bisa membuka program aplikasi seperti Word atau browser web."
          }
        ]
      },
      {
        type: "miniActivity",
        title: "Aktivitas Interaktif: Eksplorasi Hubungan Sederhana Komputer",
        activityType: "layerInspector"
      }
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Jenis-Jenis Sistem Operasi",
    subtitle: "Klasifikasi Sistem Operasi Berdasarkan Perangkat Penggunaannya",
    badge: "Klasifikasi",
    readTime: "7 Menit",
    icon: "monitor",
    summary: "Mengenal 4 jenis sistem operasi berdasarkan perangkat: Desktop, Mobile, Server, dan Embedded beserta contohnya.",
    objectives: [
      "Menjelaskan jenis-jenis sistem operasi.",
      "Membedakan sistem operasi berdasarkan perangkat penggunaannya.",
      "Memberikan contoh setiap jenis sistem operasi."
    ],
    sections: [
      {
        type: "lead",
        content: "Sistem operasi dibagi menjadi beberapa jenis berdasarkan jenis perangkat dan tujuan penggunaannya. Setiap jenis dirancang secara optimal agar sesuai dengan kebutuhan perangkat tersebut."
      },
      {
        type: "typesList",
        title: "4 Jenis Sistem Operasi",
        items: [
          {
            tag: "1. Desktop OS",
            title: "1. SISTEM OPERASI DESKTOP",
            icon: "monitor",
            desc: "Sistem operasi desktop digunakan pada komputer dan laptop. Digunakan untuk membuat dokumen, mengedit video, menjalankan aplikasi, belajar, dan bermain game.",
            examples: ["Windows", "macOS", "Linux"],
            features: ["Digunakan pada komputer dan laptop", "Cocok untuk produktivitas dokumen, video, belajar, dan game"]
          },
          {
            tag: "2. Mobile OS",
            title: "2. SISTEM OPERASI MOBILE",
            icon: "smartphone",
            desc: "Sistem operasi mobile digunakan pada smartphone dan tablet. Dirancang untuk perangkat yang menggunakan layar sentuh dan memiliki fitur seperti kamera, GPS, serta berbagai sensor.",
            examples: ["Android", "iOS"],
            features: ["Digunakan pada smartphone dan tablet", "Mendukung layar sentuh, kamera, GPS, dan sensor cerdas"]
          },
          {
            tag: "3. Server OS",
            title: "3. SISTEM OPERASI SERVER",
            icon: "server",
            desc: "Sistem operasi server digunakan pada komputer server untuk menyediakan dan mengelola layanan bagi komputer atau perangkat lain melalui jaringan. Digunakan untuk mengelola website, database, file, dan jaringan.",
            examples: ["Ubuntu Server", "Windows Server", "Red Hat Enterprise Linux"],
            features: ["Digunakan pada komputer server", "Mengelola website, database, file, dan layanan jaringan"]
          },
          {
            tag: "4. Embedded OS",
            title: "4. SISTEM OPERASI EMBEDDED",
            icon: "microchip",
            desc: "Sistem operasi embedded digunakan pada perangkat khusus yang memiliki fungsi tertentu. Dirancang agar dapat bekerja secara khusus, stabil, dan efisien pada perangkat tertentu.",
            examples: ["Mesin ATM", "Router", "Smart TV", "Perangkat IoT", "Sistem kendaraan"],
            features: ["Digunakan pada perangkat khusus", "Bekerja secara spesifik, stabil, dan efisien"]
          }
        ]
      },
      {
        type: "comparisonTable",
        title: "Tabel Perbandingan Jenis Sistem Operasi",
        headers: ["Jenis", "Perangkat", "Contoh"],
        rows: [
          ["Desktop", "Komputer/Laptop", "Windows, macOS, Linux"],
          ["Mobile", "Smartphone/Tablet", "Android, iOS"],
          ["Server", "Komputer Server", "Ubuntu Server, Windows Server"],
          ["Embedded", "Perangkat khusus", "ATM, Router, Smart TV"]
        ]
      },
      {
        type: "realLife",
        title: "Contoh dalam Kehidupan Sehari-hari",
        content: "Saat kamu menggunakan laptop untuk mengerjakan tugas (Desktop OS), kemudian mengecek pesan di HP (Mobile OS), terhubung lewat router Wi-Fi (Embedded OS), dan membuka website sekolah (Server OS), keempat jenis sistem operasi ini saling bekerja sama."
      },
      {
        type: "miniActivity",
        title: "Aktivitas Interaktif: Cocokkan Perangkat dengan Jenis OS",
        activityType: "osClassifier"
      }
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Fungsi Sistem Operasi",
    subtitle: "Enam Fungsi Utama Sistem Operasi dalam Penggunaan Komputer",
    badge: "Fungsi Utama",
    readTime: "8 Menit",
    icon: "cpu",
    summary: "Memahami 6 fungsi utama sistem operasi dalam mengelola perangkat keras, file, aplikasi, memori, antarmuka, dan keamanan.",
    objectives: [
      "Menjelaskan fungsi sistem operasi.",
      "Mengidentifikasi fungsi sistem operasi dalam penggunaan komputer.",
      "Memberikan contoh penerapan fungsi sistem operasi."
    ],
    sections: [
      {
        type: "lead",
        content: "Sistem operasi memiliki peran penting agar komputer dapat bekerja secara teratur. Terdapat 6 fungsi utama sistem operasi yang membantu pengguna dan perangkat keras berkomunikasi dengan baik."
      },
      {
        type: "functionsList",
        title: "6 Fungsi Utama Sistem Operasi",
        items: [
          {
            no: "1",
            title: "1. Mengelola Perangkat Keras",
            icon: "cpu",
            desc: "Sistem operasi mengatur penggunaan perangkat keras seperti CPU, RAM, hard disk/SSD, keyboard, mouse, dan printer.<br><br><strong>Contoh:</strong> Ketika siswa mengetik menggunakan keyboard, sistem operasi membantu menerima input tersebut agar dapat diproses oleh komputer."
          },
          {
            no: "2",
            title: "2. Mengelola File",
            icon: "folder",
            desc: "Sistem operasi membantu pengguna membuat, menyimpan, membuka, memindahkan, menyalin, dan menghapus file.<br><br><strong>Contoh:</strong> Ketika siswa menyimpan tugas dengan nama <em>'Tugas_Informatika.docx'</em>, sistem operasi membantu mengatur penyimpanan file tersebut."
          },
          {
            no: "3",
            title: "3. Mengelola Aplikasi",
            icon: "activity",
            desc: "Sistem operasi memungkinkan aplikasi dijalankan dan menggunakan sumber daya komputer.<br><br><strong>Contoh:</strong> Ketika siswa membuka browser dan Microsoft Word secara bersamaan, sistem operasi mengatur agar kedua aplikasi dapat berjalan."
          },
          {
            no: "4",
            title: "4. Mengelola Memori",
            icon: "ram",
            desc: "Sistem operasi mengatur penggunaan RAM oleh aplikasi yang sedang berjalan.<br><br><strong>Contoh:</strong> Ketika beberapa aplikasi dibuka secara bersamaan, sistem operasi mengatur penggunaan RAM agar aplikasi dapat bekerja dengan baik."
          },
          {
            no: "5",
            title: "5. Menyediakan Antarmuka Pengguna",
            icon: "monitor",
            desc: "Sistem operasi menyediakan tampilan yang memungkinkan pengguna berinteraksi dengan komputer.<br><br><strong>Contohnya:</strong> Menu, Ikon, Tombol, Jendela aplikasi, serta File dan folder."
          },
          {
            no: "6",
            title: "6. Mengatur Keamanan",
            icon: "shield",
            desc: "Sistem operasi membantu melindungi perangkat dan data melalui fitur keamanan.<br><br><strong>Contohnya:</strong> Password, Hak akses pengguna, Penguncian perangkat, dan Izin aplikasi."
          }
        ]
      },
      {
        type: "realLife",
        title: "Contoh Penerapan Nyata Fungsi Sistem Operasi",
        content: "Ketika kamu menyalakan laptop dengan memasukkan <strong>Password</strong> (Keamanan), mengklik <strong>Ikon Word</strong> (Antarmuka & Aplikasi), mengetik tugas dengan <strong>Keyboard</strong> (Perangkat Keras), mendengarkan musik di latar belakang (Memori), dan menyimpan dokumen (File), keenam fungsi sistem operasi bekerja bersamaan secara harmonis."
      },
      {
        type: "accordions",
        title: "Tahukah Kamu?",
        items: [
          {
            q: "Tahukah Kamu? Mengapa RAM Perlu Dikelola oleh Sistem Operasi?",
            a: "Jika sistem operasi tidak mengatur RAM, aplikasi-aplikasi yang dibuka bersamaan bisa saling menimpa data dan membuat komputer crash atau berhenti merespons."
          },
          {
            q: "Bagaimana sistem operasi membantu keamanan data?",
            a: "Sistem operasi menyediakan fitur proteksi seperti password login, penguncian layar otomatis, pemisahan akun pengguna, serta permintaan izin saat aplikasi ingin mengakses kamera atau file."
          }
        ]
      },
      {
        type: "miniActivity",
        title: "Aktivitas Interaktif: Simulasi Pengelolaan Memori RAM",
        activityType: "resourceSimulator"
      }
    ]
  }
];
