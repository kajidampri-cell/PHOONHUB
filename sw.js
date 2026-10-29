/**
 * Service Worker: Offline Caching untuk Web Bina Gerak
 */

const CACHE_NAME = 'binagerak-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/tokens.css',
  './css/animations.css',
  './css/main.css',
  './css/print.css',
  './js/app.js',
  './js/data/exercisesData.js',
  './js/services/storageService.js',
  './js/services/speechService.js',
  './assets/illustrations/01_menggulingkan_pensil.png',
  './assets/illustrations/02_membuka_jari_dengan_karet.png',
  './assets/illustrations/03_mengambil_koin.png',
  './assets/illustrations/04_melepaskan_koin_satu_per_satu.png',
  './assets/illustrations/05_merayapkan_jari_di_pensil.png',
  './assets/illustrations/06_meremas_spons.png',
  './assets/illustrations/07_menjepit_penjepit_baju.png',
  './assets/illustrations/08_mencubit_plastisin_lunak.png',
  './assets/illustrations/09_memindahkan_benda_dengan_penjepit.png',
  './assets/illustrations/10_meronce_manik_manik.png',
  './assets/illustrations/11_memutar_tutup_botol.png',
  './assets/illustrations/12_latihan_mengancingkan_baju.png',
  './assets/illustrations/steps/ex01_menggulingkan_pensil_step01_lengan_posisi_awal.png',
  './assets/illustrations/steps/ex01_menggulingkan_pensil_step02_memegang_pensil.png',
  './assets/illustrations/steps/ex01_menggulingkan_pensil_step03_memutar_pensil.png',
  './assets/illustrations/steps/ex01_menggulingkan_pensil_step04_menjaga_pensil_dalam_kendali.png',
  './assets/illustrations/steps/ex01_menggulingkan_pensil_step05_mengembalikan_pensil_ke_awal.png',
  './assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step01_posisi_tangan_nyaman.png',
  './assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step02_memasang_karet_di_jari.png',
  './assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step03_membuka_jari.png',
  './assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step04_merapatkan_jari.png',
  './assets/illustrations/steps/ex02_membuka_jari_dengan_karet_step05_mengulangi_gerakan_nyaman.png',
  './assets/illustrations/steps/ex03_mengambil_koin_step01_menata_koin_di_meja.png',
  './assets/illustrations/steps/ex03_mengambil_koin_step02_mendekat_ke_koin.png',
  './assets/illustrations/steps/ex03_mengambil_koin_step03_menjepit_koin.png',
  './assets/illustrations/steps/ex03_mengambil_koin_step04_mengangkat_koin.png',
  './assets/illustrations/steps/ex03_mengambil_koin_step05_memindahkan_koin_ke_wadah.png',
  './assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step01_koin_di_tangan.png',
  './assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step02_menahan_koin_cadangan.png',
  './assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step03_menggeser_koin_ke_ujung_jari.png',
  './assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step04_meletakkan_koin_ke_wadah.png',
  './assets/illustrations/steps/ex04_melepaskan_koin_satu_per_satu_step05_mengulangi_pemindahan_koin.png',
  './assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step01_memegang_pensil.png',
  './assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step02_posisi_tangan_nyaman.png',
  './assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step03_jari_merayap_di_pensil.png',
  './assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step04_menuju_ujung_pensil.png',
  './assets/illustrations/steps/ex05_merayapkan_jari_di_pensil_step05_kembali_ke_pangkal_pensil.png',
  './assets/illustrations/steps/ex06_meremas_spons_step01_meletakkan_spons_di_tangan.png',
  './assets/illustrations/steps/ex06_meremas_spons_step02_merapatkan_jari_ke_spons.png',
  './assets/illustrations/steps/ex06_meremas_spons_step03_meremas_spons.png',
  './assets/illustrations/steps/ex06_meremas_spons_step04_melepaskan_tekanan_spons.png',
  './assets/illustrations/steps/ex06_meremas_spons_step05_mengulangi_remas_lepas.png',
  './assets/illustrations/steps/ex07_menjepit_penjepit_baju_step01_memegang_penjepit_baju.png',
  './assets/illustrations/steps/ex07_menjepit_penjepit_baju_step02_membuka_penjepit_baju.png',
  './assets/illustrations/steps/ex07_menjepit_penjepit_baju_step03_mengarahkan_ke_tepi_karton.png',
  './assets/illustrations/steps/ex07_menjepit_penjepit_baju_step04_melepaskan_tekanan_penjepit.png',
  './assets/illustrations/steps/ex07_menjepit_penjepit_baju_step05_mengulangi_pemasangan_penjepit.png',
  './assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step01_meletakkan_plastisin.png',
  './assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step02_memegang_plastisin.png',
  './assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step03_mencubit_plastisin.png',
  './assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step04_mengulangi_cubitan.png',
  './assets/illustrations/steps/ex08_mencubit_plastisin_lunak_step05_membentuk_plastisin.png',
  './assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step01_menata_pom_pom_di_wadah.png',
  './assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step02_memegang_penjepit.png',
  './assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step03_mengarahkan_penjepit_ke_pom_pom.png',
  './assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step04_mengangkat_dan_memindahkan_pom_pom.png',
  './assets/illustrations/steps/ex09_memindahkan_benda_dengan_penjepit_step05_melepaskan_pom_pom_ke_wadah_tujuan.png',
  './assets/illustrations/steps/ex10_meronce_manik_manik_step01_menata_alat_meronce.png',
  './assets/illustrations/steps/ex10_meronce_manik_manik_step02_memegang_tali.png',
  './assets/illustrations/steps/ex10_meronce_manik_manik_step03_memegang_manik_manik.png',
  './assets/illustrations/steps/ex10_meronce_manik_manik_step04_mengarahkan_lubang_manik_ke_tali.png',
  './assets/illustrations/steps/ex10_meronce_manik_manik_step05_memasukkan_manik_ke_tali.png',
  './assets/illustrations/steps/ex11_memutar_tutup_botol_step01_meletakkan_botol_stabil.png',
  './assets/illustrations/steps/ex11_memutar_tutup_botol_step02_menahan_botol.png',
  './assets/illustrations/steps/ex11_memutar_tutup_botol_step03_memegang_tutup_botol.png',
  './assets/illustrations/steps/ex11_memutar_tutup_botol_step04_memutar_tutup_hingga_terbuka.png',
  './assets/illustrations/steps/ex11_memutar_tutup_botol_step05_memasang_dan_menutup_tutup_botol.png',
  './assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step01_meletakkan_papan_kancing.png',
  './assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step02_menahan_kain_dan_lubang_kancing.png',
  './assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step03_memegang_kancing.png',
  './assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step04_memasukkan_kancing_ke_lubang.png',
  './assets/illustrations/steps/ex12_latihan_mengancingkan_baju_step05_merapikan_kain_setelah_kancing_terpasang.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
