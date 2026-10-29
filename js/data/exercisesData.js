/**
 * Master Data: 3 Kategori & 12 Modul Aktivitas Latihan Motorik Halus
 * Berdasarkan: Naskah Lengkap Website Bina Gerak Motorik Halus
 * Dilengkapi Grafis Ilustrasi Vektor 2D Animasi Realistis (Hand & Object Physics)
 */

export const CATEGORIES = [
  {
    id: 'cat-a',
    code: 'A',
    name: 'Kesiapan Menulis & Kendali Pensil',
    description: 'Latihan jari, koordinasi, serta pengendalian benda kecil dan pensil untuk mendukung kesiapan motorik menulis.',
    colorAccent: 'var(--cat-a-accent)',
    bgAccent: 'var(--cat-a-bg)',
    count: 5
  },
  {
    id: 'cat-b',
    code: 'B',
    name: 'Kekuatan Genggaman & Ketangkasan Jari',
    description: 'Latihan menggenggam, menjepit, melepaskan, dan memindahkan benda untuk kekuatan otot tangan dan pemisahan gerak jari.',
    colorAccent: 'var(--cat-b-accent)',
    bgAccent: 'var(--cat-b-bg)',
    count: 4
  },
  {
    id: 'cat-c',
    code: 'C',
    name: 'Motorik Fungsional & Bina Diri',
    description: 'Latihan menggunakan kedua tangan (bilateral) dalam kegiatan fungsional yang dekat dengan kemandirian sehari-hari.',
    colorAccent: 'var(--cat-c-accent)',
    bgAccent: 'var(--cat-c-bg)',
    count: 3
  }
];

export const EXERCISES = [
  // ==========================================
  // KATEGORI A: KESIAPAN MENULIS & KENDALI PENSIL
  // ==========================================
  {
    id: 'ex-01',
    code: '01',
    categoryId: 'cat-a',
    titleEn: 'Rolling Pencil',
    titleId: 'Menggulingkan Pensil',
    studentText: 'Ayo gerakkan pensil menggunakan jari tanganmu.',
    goal: 'Mengembangkan kontrol gerakan jari ketika mengubah posisi pensil.',
    tools: ['Satu batang pensil yang nyaman digenggam (tidak licin)'],
    imageSrc: 'assets/illustrations/01_menggulingkan_pensil.png',
    image: 'assets/illustrations/01_menggulingkan_pensil.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan lengan pada meja dalam posisi nyaman.',
        visualCue: 'Lengan bertumpu stabil di atas meja dengan rileks.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step01_lengan_posisi_awal.png',
        image: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step01_lengan_posisi_awal.png'
      },
      {
        number: 2,
        instruction: 'Pegang pensil menggunakan jari yang biasa dipakai untuk menulis.',
        visualCue: 'Ibu jari, telunjuk, dan jari tengah memegang batang pensil.',
        actionType: 'pegang',
        imageSrc: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step02_memegang_pensil.png',
        image: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step02_memegang_pensil.png'
      },
      {
        number: 3,
        instruction: 'Gulingkan atau putar pensil perlahan menggunakan jari, sesuai gambar contoh.',
        visualCue: 'Gerakkan ujung jari ke depan dan ke belakang untuk memutar pensil.',
        actionType: 'gerak',
        imageSrc: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step03_memutar_pensil.png',
        image: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step03_memutar_pensil.png'
      },
      {
        number: 4,
        instruction: 'Usahakan pensil tetap berada dalam kendali tangan.',
        visualCue: 'Jaga pensil agar tidak terjatuh atau meluncur lepas.',
        actionType: 'kontrol',
        imageSrc: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step04_menjaga_pensil_dalam_kendali.png',
        image: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step04_menjaga_pensil_dalam_kendali.png'
      },
      {
        number: 5,
        instruction: 'Kembalikan pensil ke posisi awal, lalu ulangi sesuai arahan pendamping.',
        visualCue: 'Putar balik pensil ke posisi semula secara perlahan.',
        actionType: 'ulang',
        imageSrc: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step05_mengembalikan_pensil_ke_awal.png',
        image: 'assets/illustrations/steps/ex01_menggulingkan_pensil_step05_mengembalikan_pensil_ke_awal.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Bila memutar pensil terlalu sulit, mulai dengan pergeseran kecil atau pensil berdiameter lebih besar/bersegi. Guru dapat membantu menstabilkan lengan bawah bila diperlukan.',
      observations: [
        'Kestabilan genggaman jari pada batang pensil',
        'Kelancaran dan arah rotasi gerakan',
        'Apakah pensil sering terjatuh dari kendali',
        'Tingkat bantuan fisik/instruksi yang dibutuhkan'
      ],
      safetyNote: null
    },
    completionPraise: 'Bagus! Kamu sudah mencoba menggerakkan pensil.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Menggulingkan Pensil">
        <defs>
          <linearGradient id="skin01" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fed7aa"/>
            <stop offset="100%" stop-color="#fba866"/>
          </linearGradient>
          <linearGradient id="pencilWood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fde047"/>
            <stop offset="50%" stop-color="#eab308"/>
            <stop offset="100%" stop-color="#ca8a04"/>
          </linearGradient>
          <filter id="softShadow01" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" flood-opacity="0.15"/>
          </filter>
        </defs>
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>
        <line x1="20" y1="162" x2="280" y2="162" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="8 6"/>
        <text x="25" y="182" fill="#94a3b8" font-size="11" font-weight="700">PERMUKAAN MEJA</text>

        <!-- Bayangan di Meja -->
        <ellipse cx="180" cy="160" rx="65" ry="10" fill="#0f172a" opacity="0.08"/>

        <!-- Lengan & Telapak Bawah -->
        <path d="M 40 162 C 60 145, 95 132, 135 132 C 160 132, 175 118, 190 102 C 200 92, 215 96, 210 115 C 200 135, 175 155, 145 162 Z" fill="url(#skin01)" stroke="#ea580c" stroke-width="2.5" filter="url(#softShadow01)"/>

        <!-- Pensil Realistis (Berputar & Berguling) -->
        <g class="anim-pencil-body">
          <g filter="url(#softShadow01)">
            <!-- Badan Pensil Bersegi 6 -->
            <rect x="100" y="102" width="145" height="14" rx="3" fill="url(#pencilWood)" stroke="#a16207" stroke-width="2"/>
            <line x1="100" y1="106" x2="245" y2="106" stroke="#fef08a" stroke-width="1.5"/>
            <line x1="100" y1="112" x2="245" y2="112" stroke="#854d0e" stroke-width="1.5"/>
            <!-- Ferrule Logam & Penghapus -->
            <rect x="88" y="102" width="12" height="14" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
            <rect x="74" y="102" width="14" height="14" rx="3" fill="#f43f5e" stroke="#be123c" stroke-width="1.5"/>
            <!-- Ujung Rautan Kayu & Grafit -->
            <polygon points="245,102 268,109 245,116" fill="#fde68a" stroke="#ca8a04" stroke-width="1.5"/>
            <polygon points="260,107 268,109 260,111" fill="#1e293b"/>
          </g>
        </g>

        <!-- Jari-Jari Mengontrol & Memutar (Bergerak Selaras) -->
        <g class="anim-pencil-fingers">
          <!-- Ibu Jari & Telunjuk -->
          <circle cx="172" cy="94" r="10" fill="url(#skin01)" stroke="#ea580c" stroke-width="2"/>
          <ellipse cx="172" cy="91" rx="4" ry="2" fill="#fff" opacity="0.4"/>
          <!-- Jari Telunjuk -->
          <circle cx="198" cy="104" r="10" fill="url(#skin01)" stroke="#ea580c" stroke-width="2"/>
          <ellipse cx="198" cy="101" rx="4" ry="2" fill="#fff" opacity="0.4"/>
          <!-- Kuku Lembut -->
          <path d="M 168 90 Q 172 87 176 90" stroke="#f472b6" stroke-width="2" fill="none"/>
        </g>

        <!-- Indikator Panah Rotasi Dinamis -->
        <g opacity="0.9">
          <path d="M 155 75 A 18 18 0 1 1 195 75" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
          <polyline points="197,68 200,77 190,78" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="135" y="58" fill="#1d4ed8" font-size="11" font-weight="800">2D Realistis: Gulingkan</text>
        </g>
      </svg>
    `
  },
  {
    id: 'ex-02',
    code: '02',
    categoryId: 'cat-a',
    titleEn: 'Rubber Band Extension',
    titleId: 'Membuka Jari dengan Karet',
    studentText: 'Ayo buka jari secara perlahan.',
    goal: 'Melatih gerakan membuka jari secara terarah dengan tahanan yang sesuai.',
    tools: ['Karet latihan elastis dengan tahanan sangat ringan dan ukuran yang sesuai'],
    imageSrc: 'assets/illustrations/02_membuka_jari_dengan_karet.png',
    image: 'assets/illustrations/02_membuka_jari_dengan_karet.png',
    steps: [
      {
        number: 1,
        instruction: 'Duduk dengan tangan ditopang dalam posisi nyaman.',
        visualCue: 'Siku dan lengan diletakkan stabil di atas meja.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step01_posisi_tangan_nyaman.png',
        image: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step01_posisi_tangan_nyaman.png'
      },
      {
        number: 2,
        instruction: 'Dengan bantuan pendamping, pasang karet pada jari sesuai gambar; pastikan tidak terlalu ketat.',
        visualCue: 'Karet melingkar di sekeliling 5 jari tangan.',
        actionType: 'alat',
        imageSrc: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step02_memasang_karet_di_jari.png',
        image: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step02_memasang_karet_di_jari.png'
      },
      {
        number: 3,
        instruction: 'Buka jari perlahan sampai batas gerak yang nyaman.',
        visualCue: 'Rentangkan jari ke luar melawan tahanan lembut karet.',
        actionType: 'gerak',
        imageSrc: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step03_membuka_jari.png',
        image: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step03_membuka_jari.png'
      },
      {
        number: 4,
        instruction: 'Tutup kembali jari secara terkendali.',
        visualCue: 'Rapatkan kembali jari ke posisi santai.',
        actionType: 'kontrol',
        imageSrc: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step04_merapatkan_jari.png',
        image: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step04_merapatkan_jari.png'
      },
      {
        number: 5,
        instruction: 'Ulangi hanya selama gerakan tetap nyaman.',
        visualCue: 'Lakukan beberapa kali; berhenti bila terasa lelah.',
        actionType: 'ulang',
        imageSrc: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step05_mengulangi_gerakan_nyaman.png',
        image: 'assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step05_mengulangi_gerakan_nyaman.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Jika karet menimbulkan nyeri, tekanan berlebih, perubahan warna jari (pucat/kebiruan), atau meningkatkan kekakuan/spastisitas, segera lepaskan. Dapat diganti dengan aktivitas membuka jari tanpa tahanan karet.',
      observations: [
        'Rentang gerak ekstensi jari yang mampu dicapai',
        'Kelancaran saat membuka dan menutup jari',
        'Tanda ketidaknyamanan, ketegangan bahu, atau tremor'
      ],
      safetyNote: 'PERHATIAN: Pastikan karet tidak menekan sirkulasi darah. Hentikan jika muncul rasa sakit.'
    },
    completionPraise: 'Selesai! Terima kasih sudah mencoba menggerakkan jari.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Membuka Jari dengan Karet Elastis">
        <defs>
          <linearGradient id="skin02" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffedd5"/>
            <stop offset="100%" stop-color="#fba866"/>
          </linearGradient>
          <filter id="softGlow02">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#dc2626" flood-opacity="0.25"/>
          </filter>
        </defs>
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <!-- Telapak Tangan Pusat -->
        <circle cx="150" cy="115" r="32" fill="url(#skin02)" stroke="#ea580c" stroke-width="2.5"/>

        <!-- 5 Jari Bernyawa yang Bergerak Mengembang (Ekstensi) -->
        <!-- Jempol -->
        <g class="anim-finger-thumb">
          <rect x="90" y="82" width="24" height="16" rx="8" fill="url(#skin02)" stroke="#ea580c" stroke-width="2"/>
          <ellipse cx="94" cy="90" rx="4" ry="2" fill="#fff" opacity="0.4"/>
        </g>
        <!-- Telunjuk -->
        <g class="anim-finger-index">
          <rect x="114" y="44" width="16" height="30" rx="8" fill="url(#skin02)" stroke="#ea580c" stroke-width="2"/>
          <ellipse cx="122" cy="48" rx="3" ry="2" fill="#fff" opacity="0.4"/>
        </g>
        <!-- Jari Tengah -->
        <g class="anim-finger-middle">
          <rect x="142" y="38" width="16" height="34" rx="8" fill="url(#skin02)" stroke="#ea580c" stroke-width="2"/>
          <ellipse cx="150" cy="42" rx="3" ry="2" fill="#fff" opacity="0.4"/>
        </g>
        <!-- Jari Manis -->
        <g class="anim-finger-ring">
          <rect x="170" y="44" width="16" height="30" rx="8" fill="url(#skin02)" stroke="#ea580c" stroke-width="2"/>
          <ellipse cx="178" cy="48" rx="3" ry="2" fill="#fff" opacity="0.4"/>
        </g>
        <!-- Kelingking -->
        <g class="anim-finger-pinky">
          <rect x="194" y="62" width="14" height="26" rx="7" fill="url(#skin02)" stroke="#ea580c" stroke-width="2"/>
          <ellipse cx="201" cy="66" rx="3" ry="2" fill="#fff" opacity="0.4"/>
        </g>

        <!-- Karet Elastis Merah yang Meregang Selaras -->
        <path class="anim-rubber-band" d="M 98 90 C 112 55, 145 50, 180 55 C 205 72, 195 100, 175 110 C 135 125, 105 110, 98 90 Z" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" filter="url(#softGlow02)"/>

        <!-- Teks Petunjuk Dinamis -->
        <text x="85" y="178" fill="#dc2626" font-size="11" font-weight="800">2D Realistis: Buka & Rapatkan Jari</text>
      </svg>
    `
  },
  {
    id: 'ex-03',
    code: '03',
    categoryId: 'cat-a',
    titleEn: 'Pick Up the Coins',
    titleId: 'Mengambil Koin',
    studentText: 'Ambil benda satu per satu dengan jari tanganmu.',
    goal: 'Melatih gerakan menjepit benda pipih dan memindahkan benda dari meja ke tangan.',
    tools: ['Beberapa koin atau keping pipih berukuran aman', 'Alas meja tidak licin'],
    imageSrc: 'assets/illustrations/03_mengambil_koin.png',
    image: 'assets/illustrations/03_mengambil_koin.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan beberapa keping di atas meja dengan jarak yang mudah dijangkau.',
        visualCue: 'Koin tersebar teratur di hadapan tangan aktif.',
        actionType: 'persiapan',
        imageSrc: 'assets/illustrations/steps/ex03_mengambil_koin_step01_menata_koin_di_meja.png',
        image: 'assets/illustrations/steps/ex03_mengambil_koin_step01_menata_koin_di_meja.png'
      },
      {
        number: 2,
        instruction: 'Dekatkan tangan ke keping pertama.',
        visualCue: 'Arahkan telapak dan jari mendekati tepi koin.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex03_mengambil_koin_step02_mendekat_ke_koin.png',
        image: 'assets/illustrations/steps/ex03_mengambil_koin_step02_mendekat_ke_koin.png'
      },
      {
        number: 3,
        instruction: 'Jepit keping dengan ibu jari dan telunjuk atau kombinasi jari yang paling fungsional.',
        visualCue: 'Gunakan ujung ibu jari dan telunjuk (pincer grasp).',
        actionType: 'jepit',
        imageSrc: 'assets/illustrations/steps/ex03_mengambil_koin_step03_menjepit_koin.png',
        image: 'assets/illustrations/steps/ex03_mengambil_koin_step03_menjepit_koin.png'
      },
      {
        number: 4,
        instruction: 'Angkat keping secara perlahan.',
        visualCue: 'Angkat koin ke atas tanpa terlepas dari jepitan.',
        actionType: 'angkat',
        imageSrc: 'assets/illustrations/steps/ex03_mengambil_koin_step04_mengangkat_koin.png',
        image: 'assets/illustrations/steps/ex03_mengambil_koin_step04_mengangkat_koin.png'
      },
      {
        number: 5,
        instruction: 'Pindahkan keping ke telapak tangan atau wadah sesuai kemampuan, kemudian lanjutkan ke keping berikutnya.',
        visualCue: 'Kumpulkan koin ke telapak atau masukkan ke mangkuk.',
        actionType: 'kumpul',
        imageSrc: 'assets/illustrations/steps/ex03_mengambil_koin_step05_memindahkan_koin_ke_wadah.png',
        image: 'assets/illustrations/steps/ex03_mengambil_koin_step05_memindahkan_koin_ke_wadah.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Gunakan keping koin berukuran lebih besar, lebih tebal, atau berbahan kayu/karton kaku apabila koin logam tipis sulit diangkat. Jumlah keping disesuaikan dengan toleransi murid.',
      observations: [
        'Ketepatan dan kematangan pola jepitan (pincer grasp)',
        'Keberhasilan mengangkat keping dari permukaan datar',
        'Koordinasi mata-tangan dan kebutuhan bantuan pendamping'
      ],
      safetyNote: null
    },
    completionPraise: 'Bagus! Kamu sudah mengangkat dan memindahkan benda.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Menjepit dan Mengangkat Koin">
        <defs>
          <linearGradient id="goldCoin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="50%" stop-color="#eab308"/>
            <stop offset="100%" stop-color="#a16207"/>
          </linearGradient>
          <linearGradient id="skin03" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fed7aa"/>
            <stop offset="100%" stop-color="#fba866"/>
          </linearGradient>
        </defs>
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>
        <line x1="20" y1="162" x2="280" y2="162" stroke="#cbd5e1" stroke-width="4"/>

        <!-- Koin Diam di Meja -->
        <ellipse cx="80" cy="160" rx="22" ry="7" fill="url(#goldCoin)" stroke="#854d0e" stroke-width="1.5"/>
        <ellipse cx="225" cy="160" rx="20" ry="6" fill="url(#goldCoin)" stroke="#854d0e" stroke-width="1.5"/>

        <!-- Bayangan Koin yang Terangkat -->
        <ellipse cx="150" cy="161" rx="18" ry="5" fill="#0f172a" opacity="0.15"/>

        <!-- Koin Tengah yang Terangkat Bersama Jari -->
        <g class="anim-target-coin">
          <ellipse cx="150" cy="142" rx="22" ry="8" fill="url(#goldCoin)" stroke="#854d0e" stroke-width="2"/>
          <ellipse cx="150" cy="142" rx="16" ry="5" fill="#fef9c3" stroke="#ca8a04" stroke-width="1"/>
        </g>

        <!-- Tangan Pincer Grasp (Jepit & Angkat) -->
        <g class="anim-pincer-hand">
          <g transform="translate(150, 112)">
            <!-- Ibu Jari Kiri -->
            <path d="M -24 -2 C -20 18, -10 28, -3 28 C 0 28, 2 20, 0 8" fill="url(#skin03)" stroke="#ea580c" stroke-width="2.5"/>
            <!-- Telunjuk Kanan -->
            <path d="M 24 -6 C 18 16, 10 28, 3 28 C -1 28, -2 18, 0 6" fill="url(#skin03)" stroke="#ea580c" stroke-width="2.5"/>
            <!-- Kuku Bersinar -->
            <path d="M -9 24 Q -5 22 -3 25" stroke="#f472b6" stroke-width="2" fill="none"/>
            <path d="M 9 24 Q 5 22 3 25" stroke="#f472b6" stroke-width="2" fill="none"/>
          </g>
        </g>

        <!-- Indikator Angkat Vertikal -->
        <g opacity="0.9">
          <path d="M 195 130 L 195 90" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
          <polyline points="189,98 195,90 201,98" stroke="#2563eb" stroke-width="3" fill="none" stroke-linecap="round"/>
          <text x="100" y="40" fill="#1d4ed8" font-size="11" font-weight="800">2D Realistis: Jepit & Angkat Koin</text>
        </g>
      </svg>
    `
  },
  {
    id: 'ex-04',
    code: '04',
    categoryId: 'cat-a',
    titleEn: 'Put Off the Coins',
    titleId: 'Melepaskan Koin Satu per Satu',
    studentText: 'Sekarang keluarkan keping dari tanganmu satu per satu.',
    goal: 'Melatih pemindahan benda dari telapak tangan menuju ujung jari serta pelepasan yang terkendali.',
    tools: ['Beberapa koin atau keping aman', 'Wadah yang stabil / meja'],
    imageSrc: 'assets/illustrations/04_melepaskan_koin_satu_per_satu.png',
    image: 'assets/illustrations/04_melepaskan_koin_satu_per_satu.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan beberapa keping dalam telapak tangan sesuai kemampuan.',
        visualCue: 'Koin digenggam longgar dalam telapak tangan.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step01_koin_di_tangan.png',
        image: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step01_koin_di_tangan.png'
      },
      {
        number: 2,
        instruction: 'Tahan keping lainnya agar tidak langsung terjatuh.',
        visualCue: 'Jari kelingking dan jari manis menahan keping cadangan.',
        actionType: 'tahan',
        imageSrc: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step02_menahan_koin_cadangan.png',
        image: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step02_menahan_koin_cadangan.png'
      },
      {
        number: 3,
        instruction: 'Gerakkan satu keping menuju ujung jari.',
        visualCue: 'Dorong koin perlahan dari telapak ke jempol-telunjuk.',
        actionType: 'geser',
        imageSrc: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step03_menggeser_koin_ke_ujung_jari.png',
        image: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step03_menggeser_koin_ke_ujung_jari.png'
      },
      {
        number: 4,
        instruction: 'Letakkan keping pada meja atau wadah dengan perlahan.',
        visualCue: 'Buka jepitan dan turunkan koin ke permukaan.',
        actionType: 'lepas',
        imageSrc: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step04_meletakkan_koin_ke_wadah.png',
        image: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step04_meletakkan_koin_ke_wadah.png'
      },
      {
        number: 5,
        instruction: 'Lakukan kembali sampai keping yang disiapkan telah dipindahkan.',
        visualCue: 'Ulangi untuk koin berikutnya tanpa menjatuhkan semuanya.',
        actionType: 'selesai',
        imageSrc: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step05_mengulangi_pemindahan_koin.png',
        image: 'assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step05_mengulangi_pemindahan_koin.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Awali hanya dengan 1 atau 2 keping bila manipulasi intra-tangan (*palm to finger*) masih terlalu sulit. Guru dapat membantu memposisikan koin pada awal latihan.',
      observations: [
        'Kemampuan memindahkan benda dalam 1 tangan',
        'Pemisahan gerak jari (*finger differentiation*)',
        'Kontrol pelepasan koin agar tidak terjatuh serentak'
      ],
      safetyNote: null
    },
    completionPraise: 'Hebat! Kamu sudah meletakkan keping satu per satu.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Melepaskan Koin Satu per Satu">
        <defs>
          <linearGradient id="goldCoin04" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="50%" stop-color="#eab308"/>
            <stop offset="100%" stop-color="#ca8a04"/>
          </linearGradient>
        </defs>
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <!-- Mangkuk Wadah Kaca / Keramik Realistis -->
        <g transform="translate(205, 155)">
          <path d="M -45 0 C -45 30, 45 30, 45 0 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="2.5"/>
          <ellipse cx="0" cy="0" rx="45" ry="12" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
        </g>

        <!-- Telapak Tangan Memegang Koin -->
        <ellipse cx="105" cy="100" rx="34" ry="24" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>

        <!-- Koin Cadangan yang Ditahan di Telapak -->
        <ellipse cx="94" cy="98" rx="14" ry="6" fill="#a16207"/>
        <ellipse cx="102" cy="92" rx="14" ry="6" fill="url(#goldCoin04)" stroke="#854d0e" stroke-width="1.5"/>

        <!-- Koin yang Didorong Meluncur & Jatuh ke Wadah -->
        <g class="anim-sliding-coin">
          <ellipse cx="145" cy="110" rx="15" ry="7" fill="url(#goldCoin04)" stroke="#854d0e" stroke-width="2"/>
          <ellipse cx="145" cy="110" rx="10" ry="4" fill="#fef9c3"/>
        </g>

        <!-- Garis Jejak Luncur Lembut -->
        <path d="M 120 100 Q 155 110, 205 148" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5 3"/>
        <text x="80" y="40" fill="#1d4ed8" font-size="11" font-weight="800">2D Realistis: Luncurkan & Jatuhkan</text>
      </svg>
    `
  },
  {
    id: 'ex-05',
    code: '05',
    categoryId: 'cat-a',
    titleEn: 'Pencil Crawls',
    titleId: 'Merayapkan Jari di Pensil',
    studentText: 'Ayo gerakkan jarimu menyusuri pensil.',
    goal: 'Melatih pengaturan posisi genggaman dengan gerakan jari sepanjang batang pensil.',
    tools: ['Satu pensil yang tidak terlalu licin dan aman digunakan'],
    imageSrc: 'assets/illustrations/05_merayapkan_jari_di_pensil.png',
    image: 'assets/illustrations/05_merayapkan_jari_di_pensil.png',
    steps: [
      {
        number: 1,
        instruction: 'Pegang pensil dengan ibu jari, telunjuk, dan jari tengah sesuai kemampuan.',
        visualCue: 'Pegang pensil pada bagian dekat penghapus/pangkal.',
        actionType: 'pegang',
        imageSrc: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step01_memegang_pensil.png',
        image: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step01_memegang_pensil.png'
      },
      {
        number: 2,
        instruction: 'Letakkan tangan dalam posisi yang nyaman.',
        visualCue: 'Lengan ditopang rileks di atas permukaan meja.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step02_posisi_tangan_nyaman.png',
        image: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step02_posisi_tangan_nyaman.png'
      },
      {
        number: 3,
        instruction: 'Gerakkan jari sedikit demi sedikit menyusuri batang pensil.',
        visualCue: 'Jalankan jari secara bergantian seperti merayap.',
        actionType: 'merayap',
        imageSrc: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step03_jari_merayap_di_pensil.png',
        image: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step03_jari_merayap_di_pensil.png'
      },
      {
        number: 4,
        instruction: 'Lanjutkan gerakan ke arah ujung pensil tanpa melepas kendali.',
        visualCue: 'Terus merayap ke arah mata pensil secara perlahan.',
        actionType: 'lanjut',
        imageSrc: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step04_menuju_ujung_pensil.png',
        image: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step04_menuju_ujung_pensil.png'
      },
      {
        number: 5,
        instruction: 'Ubah arah dan gerakkan jari kembali menuju posisi semula.',
        visualCue: 'Rayapkan jari mundur kembali ke pangkal pensil.',
        actionType: 'putar-arah',
        imageSrc: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step05_kembali_ke_pangkal_pensil.png',
        image: 'assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step05_kembali_ke_pangkal_pensil.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Gunakan pensil segitiga tebal atau tambahkan pegangan pensil karet (*pencil grip*). Jangan memaksakan pola tripod sempurna jika kondisi spastisitas membatasi bentuk jari.',
      observations: [
        'Kemampuan menggeser jari secara independen sepanjang pensil',
        'Kestabilan pensil agar tidak terjatuh',
        'Tingkat bantuan fisik pendamping'
      ],
      safetyNote: null
    },
    completionPraise: 'Bagus! Jarimu sudah bergerak sepanjang pensil.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Merayapkan Jari di Pensil">
        <defs>
          <linearGradient id="pencilBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#60a5fa"/>
            <stop offset="50%" stop-color="#2563eb"/>
            <stop offset="100%" stop-color="#1e40af"/>
          </linearGradient>
        </defs>
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <!-- Batang Pensil Miring Tegak Stabil -->
        <g transform="rotate(30 150 100)">
          <rect x="65" y="92" width="170" height="15" rx="3" fill="url(#pencilBlue)" stroke="#1e3a8a" stroke-width="2"/>
          <line x1="65" y1="96" x2="235" y2="96" stroke="#93c5fd" stroke-width="1.5"/>
          <polygon points="235,92 255,99.5 235,107" fill="#fde68a" stroke="#ca8a04" stroke-width="1.5"/>
          <polygon points="248,97 255,99.5 248,102" fill="#0f172a"/>

          <!-- Jari yang Merayap Bergantian Naik-Turun -->
          <g class="anim-crawl-fingers">
            <circle cx="110" cy="82" r="9" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
            <circle cx="130" cy="82" r="9" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
            <circle cx="120" cy="116" r="10" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
            <path d="M 106 80 Q 110 77 114 80" stroke="#f472b6" stroke-width="2" fill="none"/>
            <path d="M 126 80 Q 130 77 134 80" stroke="#f472b6" stroke-width="2" fill="none"/>
          </g>
        </g>

        <!-- Panah Bergerak Merayap Sepanjang Pensil -->
        <g opacity="0.9">
          <path d="M 80 60 L 115 40" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
          <polyline points="106,39 116,40 115,50" stroke="#16a34a" stroke-width="3" fill="none"/>
          <text x="110" y="30" fill="#166534" font-size="11" font-weight="800">2D Realistis: Rayapan Jari Ulat</text>
        </g>
      </svg>
    `
  },

  // ==========================================
  // KATEGORI B: KEKUATAN GENGGAMAN & KETANGKASAN JARI
  // ==========================================
  {
    id: 'ex-06',
    code: '06',
    categoryId: 'cat-b',
    titleEn: 'Sponge Squeezing',
    titleId: 'Meremas Spons',
    studentText: 'Ayo remas spons, lalu lepaskan perlahan.',
    goal: 'Melatih gerakan menggenggam dan melepaskan benda lunak secara terkendali.',
    tools: ['Spons bersih dan lembut yang pas dengan ukuran tangan'],
    imageSrc: 'assets/illustrations/06_meremas_spons.png',
    image: 'assets/illustrations/06_meremas_spons.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan spons pada telapak tangan.',
        visualCue: 'Spons berada tepat di tengah telapak tangan terbuka.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex06_meremas_spons_step01_meletakkan_spons_di_tangan.png',
        image: 'assets/illustrations/steps/ex06_meremas_spons_step01_meletakkan_spons_di_tangan.png'
      },
      {
        number: 2,
        instruction: 'Rapatkan jari mengelilingi spons.',
        visualCue: 'Tutup jari-jari tangan melingkari spons.',
        actionType: 'genggam',
        imageSrc: 'assets/illustrations/steps/ex06_meremas_spons_step02_merapatkan_jari_ke_spons.png',
        image: 'assets/illustrations/steps/ex06_meremas_spons_step02_merapatkan_jari_ke_spons.png'
      },
      {
        number: 3,
        instruction: 'Remas spons dengan tenaga yang nyaman.',
        visualCue: 'Tekan spons hingga mengecil secara terkontrol.',
        actionType: 'remas',
        imageSrc: 'assets/illustrations/steps/ex06_meremas_spons_step03_meremas_spons.png',
        image: 'assets/illustrations/steps/ex06_meremas_spons_step03_meremas_spons.png'
      },
      {
        number: 4,
        instruction: 'Lepaskan tekanan dan buka genggaman perlahan.',
        visualCue: 'Buka kembali jari secara perlahan dan biarkan spons mengembang.',
        actionType: 'lepas',
        imageSrc: 'assets/illustrations/steps/ex06_meremas_spons_step04_melepaskan_tekanan_spons.png',
        image: 'assets/illustrations/steps/ex06_meremas_spons_step04_melepaskan_tekanan_spons.png'
      },
      {
        number: 5,
        instruction: 'Coba kembali sesuai arahan guru.',
        visualCue: 'Ulangi remas-lepas dengan tempo yang teratur.',
        actionType: 'ulang',
        imageSrc: 'assets/illustrations/steps/ex06_meremas_spons_step05_mengulangi_remas_lepas.png',
        image: 'assets/illustrations/steps/ex06_meremas_spons_step05_mengulangi_remas_lepas.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Pilih spons berbusa lembut atau lebih besar agar mudah digenggam. Hindari remasan sekuat tenaga bila memicu kekakuan spastis atau rasa nyeri pada persendian jari.',
      observations: [
        'Kualitas bentuk genggaman (*power grasp*)',
        'Kemampuan membuka kembali jari secara perlahan (inhibisi fleksi)',
        'Kontrol tenaga dan tanda-tanda kelelahan'
      ],
      safetyNote: null
    },
    completionPraise: 'Selesai! Kamu sudah mencoba meremas dan melepas spons.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Meremas Spons Busa">
        <defs>
          <linearGradient id="spongeYellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="50%" stop-color="#fde047"/>
            <stop offset="100%" stop-color="#ca8a04"/>
          </linearGradient>
        </defs>
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <g transform="translate(150, 105)">
          <!-- Spons Busa yang Mengempis & Mengembang -->
          <g class="anim-sponge-body">
            <path d="M -42 -28 Q -10 -18 42 -28 Q 32 10 42 32 Q -10 22 -42 32 Q -32 5 -42 -28 Z" fill="url(#spongeYellow)" stroke="#a16207" stroke-width="2.5"/>
            <!-- Pori Busa Realistis -->
            <circle cx="-20" cy="-6" r="3.5" fill="#a16207" opacity="0.3"/>
            <circle cx="15" cy="8" r="4.5" fill="#a16207" opacity="0.3"/>
            <circle cx="6" cy="-14" r="3" fill="#a16207" opacity="0.3"/>
            <circle cx="-10" cy="18" r="3" fill="#a16207" opacity="0.3"/>
          </g>

          <!-- Jari Tangan yang Meremas Menekan -->
          <g class="anim-sponge-fingers">
            <rect x="-34" y="-48" width="16" height="38" rx="8" transform="rotate(12 -28 -30)" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
            <rect x="-10" y="-52" width="16" height="42" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
            <rect x="14" y="-48" width="16" height="38" rx="8" transform="rotate(-12 20 -30)" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
            <!-- Jempol Menjepit Samping -->
            <circle cx="-32" cy="15" r="14" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
          </g>
        </g>

        <!-- Garis Kompresi Spons -->
        <g opacity="0.9">
          <path d="M 85 105 L 105 105" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
          <polyline points="98,99 106,105 98,111" stroke="#059669" stroke-width="3" fill="none"/>
          <path d="M 215 105 L 195 105" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
          <polyline points="202,99 194,105 202,111" stroke="#059669" stroke-width="3" fill="none"/>
          <text x="95" y="178" fill="#065f46" font-size="11" font-weight="800">2D Realistis: Remas & Lepas Ritmis</text>
        </g>
      </svg>
    `
  },
  {
    id: 'ex-07',
    code: '07',
    categoryId: 'cat-b',
    titleEn: 'Clothespin Clipping',
    titleId: 'Menjepit Penjepit Baju',
    studentText: 'Ayo pasang penjepit pada tepi karton.',
    goal: 'Melatih gerakan menjepit dan melepaskan tekanan pada benda dengan tepat.',
    tools: ['Penjepit baju per ringan yang mudah dibuka', 'Karton tebal atau papan bertepi aman'],
    imageSrc: 'assets/illustrations/07_menjepit_penjepit_baju.png',
    image: 'assets/illustrations/07_menjepit_penjepit_baju.png',
    steps: [
      {
        number: 1,
        instruction: 'Pegang penjepit baju dengan ibu jari dan jari lainnya.',
        visualCue: 'Jempol dan telunjuk memegang ujung pangkal penjepit.',
        actionType: 'pegang',
        imageSrc: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step01_memegang_penjepit_baju.png',
        image: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step01_memegang_penjepit_baju.png'
      },
      {
        number: 2,
        instruction: 'Tekan penjepit sampai bagian ujungnya terbuka.',
        visualCue: 'Tekan pangkal hingga mulut penjepit membuka lebar.',
        actionType: 'tekan',
        imageSrc: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step02_membuka_penjepit_baju.png',
        image: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step02_membuka_penjepit_baju.png'
      },
      {
        number: 3,
        instruction: 'Arahkan penjepit menuju tepi karton.',
        visualCue: 'Selipkan bibir penjepit ke sisi luar papan/karton.',
        actionType: 'arah',
        imageSrc: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step03_mengarahkan_ke_tepi_karton.png',
        image: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step03_mengarahkan_ke_tepi_karton.png'
      },
      {
        number: 4,
        instruction: 'Lepaskan tekanan supaya penjepit terpasang.',
        visualCue: 'Lepaskan jari perlahan agar penjepit mengunci tepi karton.',
        actionType: 'kunci',
        imageSrc: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step04_melepaskan_tekanan_penjepit.png',
        image: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step04_melepaskan_tekanan_penjepit.png'
      },
      {
        number: 5,
        instruction: 'Ambil kembali penjepit dan ulangi sesuai kemampuan.',
        visualCue: 'Lepas kembali dan pasang di titik lainnya.',
        actionType: 'ulang',
        imageSrc: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step05_mengulangi_pemasangan_penjepit.png',
        image: 'assets/illustrations/steps/ex07_menjepit_penjepit_baju_step05_mengulangi_pemasangan_penjepit.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Pilih penjepit baju berbahan kayu/plastik dengan per pegas yang sangat ringan. Posisikan karton dalam keadaan kokoh (dapat disangga atau direkatkan ke meja dengan selotip bolak-balik).',
      observations: [
        'Kontrol jepitan jempol-telunjuk melawan tahanan pegas',
        'Ketepatan mengarahkan mulut penjepit ke tepi sasaran',
        'Kebutuhan bantuan pendamping dalam menahan papan karton'
      ],
      safetyNote: null
    },
    completionPraise: 'Bagus! Penjepit berhasil kamu pasang.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Menjepitkan Penjepit Baju">
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <!-- Karton Tebal Stabil di Meja -->
        <rect x="50" y="70" width="115" height="95" rx="5" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
        <text x="80" y="122" fill="#065f46" font-size="12" font-weight="800">TEPI KARTON</text>

        <!-- Grup Penjepit yang Bergerak Mendekat & Menjepit -->
        <g class="anim-peg-group" transform="translate(165, 80)">
          <!-- Rahang Atas Berputar Membuka -->
          <g class="anim-peg-top">
            <polygon points="-12,24 38,0 48,6 -4,34" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
            <circle cx="44" cy="2" r="7" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/> <!-- Jari Atas -->
          </g>
          <!-- Rahang Bawah Berputar Membuka -->
          <g class="anim-peg-bottom">
            <polygon points="-12,36 38,60 48,54 -4,26" fill="#ea580c" stroke="#c2410c" stroke-width="2"/>
            <circle cx="44" cy="58" r="7" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/> <!-- Jari Bawah -->
          </g>
          <!-- Per Pegas Logam -->
          <circle cx="15" cy="30" r="8" fill="#94a3b8" stroke="#334155" stroke-width="2.5"/>
        </g>

        <text x="90" y="40" fill="#047857" font-size="11" font-weight="800">2D Realistis: Tekan & Jepitkan</text>
      </svg>
    `
  },
  {
    id: 'ex-08',
    code: '08',
    categoryId: 'cat-b',
    titleEn: 'Putty Pinching',
    titleId: 'Mencubit Plastisin Lunak',
    studentText: 'Ayo bentuk plastisin menggunakan jari.',
    goal: 'Melatih penggunaan ujung jari untuk mencubit, menekan, dan mengubah bentuk benda lunak.',
    tools: ['Plastisin lunak, playdough, atau putty latihan yang bersih dan aman'],
    imageSrc: 'assets/illustrations/08_mencubit_plastisin_lunak.png',
    image: 'assets/illustrations/08_mencubit_plastisin_lunak.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan plastisin lunak di atas meja.',
        visualCue: 'Plastisin dibulatkan dan ditaruh di depan murid.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step01_meletakkan_plastisin.png',
        image: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step01_meletakkan_plastisin.png'
      },
      {
        number: 2,
        instruction: 'Pegang sedikit plastisin menggunakan ibu jari dan telunjuk.',
        visualCue: 'Ujung jempol dan telunjuk menyentuh permukaan plastisin.',
        actionType: 'pegang',
        imageSrc: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step02_memegang_plastisin.png',
        image: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step02_memegang_plastisin.png'
      },
      {
        number: 3,
        instruction: 'Cubit atau tekan plastisin perlahan.',
        visualCue: 'Tekan kedua ujung jari hingga plastisin gepeng/tercubit.',
        actionType: 'cubit',
        imageSrc: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step03_mencubit_plastisin.png',
        image: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step03_mencubit_plastisin.png'
      },
      {
        number: 4,
        instruction: 'Lepaskan, lalu ulangi pada bagian lainnya.',
        visualCue: 'Pindah posisi cubitan ke sekeliling adonan plastisin.',
        actionType: 'pindah',
        imageSrc: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step04_mengulangi_cubitan.png',
        image: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step04_mengulangi_cubitan.png'
      },
      {
        number: 5,
        instruction: 'Coba bentuk bulatan kecil atau pipihkan plastisin bila memungkinkan.',
        visualCue: 'Ubah plastisin menjadi bulatan atau lempeng pipih.',
        actionType: 'bentuk',
        imageSrc: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step05_membentuk_plastisin.png',
        image: 'assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step05_membentuk_plastisin.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Gunakan adonan yang sangat lunak (misalnya playdough buatan sendiri atau putty resistansi extra-soft). Hindari bahan yang terlalu alot atau meninggalkan residu lengket berlebih di tangan.',
      observations: [
        'Kekuatan dan presisi cubitan ujung jari (*tip-to-tip pinch*)',
        'Kelenturan sendi jari tanpa hiperekstensi berlebih',
        'Tingkat kelelahan otot intrinsik tangan'
      ],
      safetyNote: null
    },
    completionPraise: 'Hebat! Kamu sudah membentuk plastisin dengan jari.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Mencubit Plastisin Lunak">
        <defs>
          <linearGradient id="puttyBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="100%" stop-color="#0284c7"/>
          </linearGradient>
        </defs>
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>
        <line x1="20" y1="165" x2="280" y2="165" stroke="#cbd5e1" stroke-width="4"/>

        <!-- Plastisin yang Deformasi Realistis Saat Dicubit -->
        <g class="anim-putty-dough">
          <ellipse cx="150" cy="155" rx="55" ry="18" fill="url(#puttyBlue)" stroke="#0369a1" stroke-width="2.5"/>
          <path d="M 115 150 Q 150 115 185 150 Z" fill="#60a5fa" stroke="#0284c7" stroke-width="2"/>
          <ellipse cx="150" cy="132" rx="14" ry="7" fill="#0369a1" opacity="0.3"/>
        </g>

        <!-- Jari Menjepit Mencubit Lunak -->
        <g class="anim-pinch-fingers" transform="translate(150, 95)">
          <!-- Jempol Kiri -->
          <path d="M -24 15 C -22 28, -8 32, -4 32 C 0 32, 0 24, -2 15" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
          <!-- Telunjuk Kanan -->
          <path d="M 24 10 C 22 26, 8 32, 4 32 C 0 32, 0 22, 2 10" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
        </g>

        <text x="100" y="45" fill="#0284c7" font-size="11" font-weight="800">2D Realistis: Cubit & Bentuk Adonan</text>
      </svg>
    `
  },
  {
    id: 'ex-09',
    code: '09',
    categoryId: 'cat-b',
    titleEn: 'Tweezer Transfer',
    titleId: 'Memindahkan Benda dengan Penjepit',
    studentText: 'Ayo pindahkan benda ke dalam wadah.',
    goal: 'Melatih koordinasi jari dan mata-tangan ketika menggunakan alat penjepit mekanik.',
    tools: ['Penjepit tumpul yang ringan/mudah ditekan', 'Pom-pom atau benda kecil ringan', 'Dua wadah kecil'],
    imageSrc: 'assets/illustrations/09_memindahkan_benda_dengan_penjepit.png',
    image: 'assets/illustrations/09_memindahkan_benda_dengan_penjepit.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan benda-benda ringan di wadah pertama.',
        visualCue: 'Wadah asal berisi 3-5 pom-pom empuk.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step01_menata_pom_pom_di_wadah.png',
        image: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step01_menata_pom_pom_di_wadah.png'
      },
      {
        number: 2,
        instruction: 'Pegang penjepit dengan tangan yang digunakan beraktivitas.',
        visualCue: 'Pegang capit capit seperti memegang pensil.',
        actionType: 'pegang',
        imageSrc: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step02_memegang_penjepit.png',
        image: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step02_memegang_penjepit.png'
      },
      {
        number: 3,
        instruction: 'Buka penjepit dan arahkan ke satu benda.',
        visualCue: 'Arahkan ujung capit melingkari satu pom-pom.',
        actionType: 'arah',
        imageSrc: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step03_mengarahkan_penjepit_ke_pom_pom.png',
        image: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step03_mengarahkan_penjepit_ke_pom_pom.png'
      },
      {
        number: 4,
        instruction: 'Jepit benda, angkat, lalu pindahkan menuju wadah kedua.',
        visualCue: 'Pertahankan jepitan sambil menggeser tangan ke wadah kedua.',
        actionType: 'angkat',
        imageSrc: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step04_mengangkat_dan_memindahkan_pom_pom.png',
        image: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step04_mengangkat_dan_memindahkan_pom_pom.png'
      },
      {
        number: 5,
        instruction: 'Lepaskan benda perlahan dan ulangi sesuai kemampuan.',
        visualCue: 'Buka capit dan jatuhkan pom-pom ke wadah tujuan.',
        actionType: 'selesai',
        imageSrc: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step05_melepaskan_pom_pom_ke_wadah_tujuan.png',
        image: 'assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step05_melepaskan_pom_pom_ke_wadah_tujuan.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Gunakan penjepit capit ukuran jumbo (*jumbo tweezers*) atau objek yang lebih bertekstur/mudah dicengkeram jika kekuatan jari masih lemah.',
      observations: [
        'Kemampuan mempertahankan tekanan capit selama proses transfer',
        'Ketepatan sasaran motorik mata-tangan',
        'Apakah benda terjatuh di tengah jalan'
      ],
      safetyNote: null
    },
    completionPraise: 'Bagus! Kamu sudah memindahkan benda menggunakan penjepit.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Memindahkan Pom-pom dengan Penjepit Tweezer">
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <!-- Wadah Kiri & Kanan -->
        <ellipse cx="75" cy="155" rx="36" ry="12" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
        <ellipse cx="225" cy="155" rx="36" ry="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>

        <circle cx="70" cy="150" r="9" fill="#ec4899"/>
        <circle cx="85" cy="152" r="8" fill="#10b981"/>

        <!-- Tweezer yang Melayang Memindahkan Pom-pom Antar Mangkuk -->
        <g class="anim-tweezer-arm" transform="translate(150, 75)">
          <path d="M 0 0 L -18 55 L -10 55 L 4 10 L 18 55 L 26 55 L 8 0 Z" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
          <g class="anim-carried-pompom">
            <circle cx="4" cy="56" r="10" fill="#a855f7" stroke="#6b21a8" stroke-width="1.5"/>
          </g>
        </g>

        <!-- Jalur Lengkung Terbang -->
        <path d="M 80 135 C 110 70, 190 70, 220 135" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5 3"/>
        <text x="95" y="35" fill="#4338ca" font-size="11" font-weight="800">2D Realistis: Capit & Pindahkan</text>
      </svg>
    `
  },

  // ==========================================
  // KATEGORI C: MOTORIK FUNGSIONAL & BINA DIRI
  // ==========================================
  {
    id: 'ex-10',
    code: '10',
    categoryId: 'cat-c',
    titleEn: 'Bead Threading',
    titleId: 'Meronce Manik-Manik',
    studentText: 'Ayo masukkan manik-manik ke dalam tali.',
    goal: 'Melatih koordinasi mata-tangan dan penggunaan dua tangan dalam tugas fungsional.',
    tools: ['Manik-manik berukuran besar dengan lubang jelas', 'Tali yang ujungnya cukup kaku (berselotip)'],
    imageSrc: 'assets/illustrations/10_meronce_manik_manik.png',
    image: 'assets/illustrations/10_meronce_manik_manik.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan tali dan manik-manik pada meja yang stabil.',
        visualCue: 'Alat ditata rapi di atas alas antiselip.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex10_meronce_manik_manik_step01_menata_alat_meronce.png',
        image: 'assets/illustrations/steps/ex10_meronce_manik_manik_step01_menata_alat_meronce.png'
      },
      {
        number: 2,
        instruction: 'Pegang tali dengan satu tangan atau gunakan bantuan penyangga.',
        visualCue: 'Tangan non-dominan (atau penyangga) menahan ujung tali.',
        actionType: 'tahan',
        imageSrc: 'assets/illustrations/steps/ex10_meronce_manik_manik_step02_memegang_tali.png',
        image: 'assets/illustrations/steps/ex10_meronce_manik_manik_step02_memegang_tali.png'
      },
      {
        number: 3,
        instruction: 'Ambil satu manik-manik dengan tangan yang lebih fungsional.',
        visualCue: 'Jepit manik dengan jari jempol dan telunjuk.',
        actionType: 'ambil',
        imageSrc: 'assets/illustrations/steps/ex10_meronce_manik_manik_step03_memegang_manik_manik.png',
        image: 'assets/illustrations/steps/ex10_meronce_manik_manik_step03_memegang_manik_manik.png'
      },
      {
        number: 4,
        instruction: 'Arahkan lubang manik-manik ke ujung tali.',
        visualCue: 'Sejajarkan lubang manik dengan ujung tali yang kaku.',
        actionType: 'arah',
        imageSrc: 'assets/illustrations/steps/ex10_meronce_manik_manik_step04_mengarahkan_lubang_manik_ke_tali.png',
        image: 'assets/illustrations/steps/ex10_meronce_manik_manik_step04_mengarahkan_lubang_manik_ke_tali.png'
      },
      {
        number: 5,
        instruction: 'Masukkan manik-manik hingga melewati ujung tali; lanjutkan sesuai kemampuan.',
        visualCue: 'Dorong manik masuk dan tarik hingga ke pangkal tali.',
        actionType: 'ronce',
        imageSrc: 'assets/illustrations/steps/ex10_meronce_manik_manik_step05_memasukkan_manik_ke_tali.png',
        image: 'assets/illustrations/steps/ex10_meronce_manik_manik_step05_memasukkan_manik_ke_tali.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Gunakan manik-manik diameter besar (2-3 cm) berbahan kayu dengan lubang lebar, serta tali kaku (seperti tali sepatu bertrikot). Berikan penjepit penyangga tali jika tangan sisi kiri sulit menahan.',
      observations: [
        'Ketepatan memasukkan ujung tali ke dalam lubang manik',
        'Kerja sama bilateral (dua belah tangan)',
        'Tingkat bantuan fisik yang diperlukan'
      ],
      safetyNote: 'PERHATIAN: Hindari penggunaan manik-manik kecil yang berisiko tertelan.'
    },
    completionPraise: 'Bagus! Kamu sudah mencoba meronce.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Meronce Manik-manik ke Tali">
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <!-- Tali Panjang Biru Realistis -->
        <path d="M 40 140 C 90 140, 130 110, 185 110 L 215 110" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>
        <!-- Ujung Kaku Berselotip Oranye -->
        <rect x="195" y="107" width="22" height="6" rx="2" fill="#ea580c"/>

        <!-- Manik-manik yang Sudah Masuk -->
        <circle cx="85" cy="138" r="14" fill="#ec4899" stroke="#be185d" stroke-width="2"/>
        <circle cx="125" cy="122" r="14" fill="#10b981" stroke="#047857" stroke-width="2"/>

        <!-- Manik-Manik yang Sedang Dronce Bergerak Menembus Ujung Tali -->
        <g class="anim-threading-bead">
          <g transform="translate(230, 110)">
            <circle cx="0" cy="0" r="16" fill="#f59e0b" stroke="#b45309" stroke-width="2.5"/>
            <circle cx="0" cy="0" r="5" fill="#f8fafc" stroke="#b45309" stroke-width="2"/>
            <circle cx="12" cy="-18" r="8" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/> <!-- Jari -->
          </g>
        </g>

        <text x="85" y="45" fill="#6d28d9" font-size="11" font-weight="800">2D Realistis: Ronce Meluncur ke Tali</text>
      </svg>
    `
  },
  {
    id: 'ex-11',
    code: '11',
    categoryId: 'cat-c',
    titleEn: 'Bottle Cap Twisting',
    titleId: 'Memutar Tutup Botol',
    studentText: 'Ayo buka lalu tutup botol secara perlahan.',
    goal: 'Melatih putaran tangan/jari dan penggunaan tangan untuk aktivitas mandiri sehari-hari.',
    tools: ['Botol plastik stabil dengan tutup berukuran lebar/mudah digenggam', 'Alas antiselip'],
    imageSrc: 'assets/illustrations/11_memutar_tutup_botol.png',
    image: 'assets/illustrations/11_memutar_tutup_botol.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan botol pada meja yang stabil.',
        visualCue: 'Botol ditaruh di atas alas agar tidak mudah bergeser.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step01_meletakkan_botol_stabil.png',
        image: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step01_meletakkan_botol_stabil.png'
      },
      {
        number: 2,
        instruction: 'Tahan botol dengan tangan lain, alat bantu, atau bantuan pendamping.',
        visualCue: 'Tangan kiri memeluk badan botol agar berdiri tegak.',
        actionType: 'tahan',
        imageSrc: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step02_menahan_botol.png',
        image: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step02_menahan_botol.png'
      },
      {
        number: 3,
        instruction: 'Pegang tutup botol menggunakan tangan yang lebih fungsional.',
        visualCue: 'Ibu jari dan jari-jari tangan kanan mencengkeram tutup botol.',
        actionType: 'pegang',
        imageSrc: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step03_memegang_tutup_botol.png',
        image: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step03_memegang_tutup_botol.png'
      },
      {
        number: 4,
        instruction: 'Putar tutup perlahan sampai terbuka.',
        visualCue: 'Putar berlawanan arah jarum jam hingga lepas.',
        actionType: 'putar',
        imageSrc: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step04_memutar_tutup_hingga_terbuka.png',
        image: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step04_memutar_tutup_hingga_terbuka.png'
      },
      {
        number: 5,
        instruction: 'Pasang kembali tutup, lalu putar hingga menutup dengan nyaman.',
        visualCue: 'Pasang dan putar searah jarum jam sampai rapat.',
        actionType: 'tutup',
        imageSrc: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step05_memasang_dan_menutup_tutup_botol.png',
        image: 'assets/illustrations/steps/ex11_memutar_tutup_botol_step05_memasang_dan_menutup_tutup_botol.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Gunakan botol dengan tutup berdiameter besar (misal botol jus lebar) yang tidak dikunci terlalu rapat sebelumnya. Hindari memaksakan rotasi supinasi/pronasi jika timbul nyeri pada sendi pergelangan.',
      observations: [
        'Kerja sama bilateral (tangan penahan vs tangan pemutar)',
        'Kekuatan cengkeraman jari pada tutup botol',
        'Rentang rotasi pergelangan tangan'
      ],
      safetyNote: 'PERHATIAN: Jangan gunakan botol kaca. Pastikan tutup tidak licin atau tajam.'
    },
    completionPraise: 'Hebat! Kamu sudah mencoba membuka dan menutup botol.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Memutar Tutup Botol">
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <!-- Badan Botol Transparan -->
        <path d="M 125 110 L 120 170 C 120 178, 180 178, 180 170 L 175 110 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
        <rect x="135" y="92" width="30" height="18" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>

        <!-- Tangan Kiri Menstabilkan Badan Botol -->
        <ellipse cx="110" cy="142" rx="14" ry="22" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>

        <!-- Tutup Botol & Jari yang Berputar Membuka-Menutup -->
        <g class="anim-bottle-cap">
          <rect x="130" y="74" width="40" height="18" rx="3" fill="#ef4444" stroke="#b91c1c" stroke-width="2.5"/>
          <line x1="138" y1="74" x2="138" y2="92" stroke="#b91c1c" stroke-width="1.5"/>
          <line x1="150" y1="74" x2="150" y2="92" stroke="#b91c1c" stroke-width="1.5"/>
          <line x1="162" y1="74" x2="162" y2="92" stroke="#b91c1c" stroke-width="1.5"/>
          <!-- Jari Pemutar Kanan -->
          <ellipse cx="185" cy="78" rx="16" ry="12" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
        </g>

        <!-- Panah Rotasi -->
        <path d="M 120 58 A 28 14 0 1 1 180 58" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"/>
        <polyline points="183,52 183,62 173,62" stroke="#7c3aed" stroke-width="3" fill="none"/>
        <text x="100" y="38" fill="#6d28d9" font-size="11" font-weight="800">2D Realistis: Rotasi Buka & Tutup</text>
      </svg>
    `
  },
  {
    id: 'ex-12',
    code: '12',
    categoryId: 'cat-c',
    titleEn: 'Buttoning Practice',
    titleId: 'Latihan Mengancingkan Baju',
    studentText: 'Ayo masukkan kancing ke dalam lubangnya.',
    goal: 'Melatih keterampilan manipulasi jari yang digunakan saat berpakaian (bina diri).',
    tools: ['Papan latihan kancing atau pakaian dengan kancing berukuran besar'],
    imageSrc: 'assets/illustrations/12_latihan_mengancingkan_baju.png',
    image: 'assets/illustrations/12_latihan_mengancingkan_baju.png',
    steps: [
      {
        number: 1,
        instruction: 'Letakkan papan kancing atau pakaian pada meja.',
        visualCue: 'Kain dibentangkan rata dan stabil di hadapan murid.',
        actionType: 'posisi',
        imageSrc: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step01_meletakkan_papan_kancing.png',
        image: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step01_meletakkan_papan_kancing.png'
      },
      {
        number: 2,
        instruction: 'Pegang kain atau sisi lubang kancing agar tidak bergeser.',
        visualCue: 'Satu tangan meregangkan bibir lubang kancing.',
        actionType: 'tahan',
        imageSrc: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step02_menahan_kain_dan_lubang_kancing.png',
        image: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step02_menahan_kain_dan_lubang_kancing.png'
      },
      {
        number: 3,
        instruction: 'Pegang satu kancing dengan tangan yang paling fungsional.',
        visualCue: 'Jepit tepian kancing dengan ujung jari jempol-telunjuk.',
        actionType: 'pegang',
        imageSrc: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step03_memegang_kancing.png',
        image: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step03_memegang_kancing.png'
      },
      {
        number: 4,
        instruction: 'Arahkan kancing menuju lubangnya dan dorong perlahan hingga masuk.',
        visualCue: 'Miringkan kancing dan selipkan separuh badan kancing ke celah.',
        actionType: 'selip',
        imageSrc: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step04_memasukkan_kancing_ke_lubang.png',
        image: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step04_memasukkan_kancing_ke_lubang.png'
      },
      {
        number: 5,
        instruction: 'Rapikan kain, lalu lanjutkan ke kancing berikutnya jika mampu.',
        visualCue: 'Tarik kancing dari sisi sebaliknya sampai terpasang sempurna.',
        actionType: 'kancing',
        imageSrc: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step05_merapikan_kain_setelah_kancing_terpasang.png',
        image: 'assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step05_merapikan_kain_setelah_kancing_terpasang.png'
      }
    ],
    teacherGuide: {
      adaptation: 'Awali dengan kancing berdiameter besar (minimal 2.5 - 3 cm) dengan lubang kancing yang elastis/longgar. Kain dapat ditempelkan atau dijepit pada papan meja agar tidak bergeser.',
      observations: [
        'Ketepatan manipulasi jempol dan telunjuk',
        'Kemampuan menyelipkan kancing secara miring ke dalam celah lubang',
        'Tingkat kemandirian bina diri saat berpakaian'
      ],
      safetyNote: null
    },
    completionPraise: 'Bagus! Kamu sudah mencoba mengancingkan baju.',
    illustrationSvg: `
      <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animasi 2D Realistis Memasukkan Kancing ke Lubang Baju">
        <rect width="300" height="200" rx="12" fill="#f8fafc"/>

        <!-- Kain Baju dengan Celah Lubang Kancing -->
        <rect x="50" y="50" width="100" height="120" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
        <rect x="150" y="50" width="100" height="120" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
        <line x1="135" y1="85" x2="135" y2="125" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>

        <!-- Kancing yang Bergerak Menyelip Miring ke Celah Lubang -->
        <g class="anim-button-piece" transform="translate(140, 105)">
          <ellipse cx="0" cy="0" rx="11" ry="19" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5"/>
          <circle cx="0" cy="-6" r="2.5" fill="#fff"/>
          <circle cx="0" cy="6" r="2.5" fill="#fff"/>
          <!-- Jari yang Menyelipkan -->
          <circle cx="22" cy="-8" r="8" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
          <circle cx="-16" cy="8" r="8" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
        </g>

        <text x="95" y="38" fill="#1e40af" font-size="11" font-weight="800">2D Realistis: Selipkan ke Celah</text>
      </svg>
    `
  }
];
