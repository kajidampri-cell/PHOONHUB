/**
 * Service Penyimpanan Lokal & Rekapitulasi Data Evaluasi
 * Mengamankan catatan observasi guru secara lokal pada peramban (Zero Cloud Leaks)
 */

const STORAGE_KEY = 'binagerak_evaluations_v1';
const DRAFT_KEY = 'binagerak_session_draft';

export const StorageService = {
  /**
   * Mengambil semua riwayat evaluasi yang tersimpan
   */
  getAllEvaluations() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Gagal mengambil data evaluasi:', e);
      return [];
    }
  },

  /**
   * Menyimpan satu catatan evaluasi baru
   */
  saveEvaluation(evalData) {
    try {
      const records = this.getAllEvaluations();
      const newRecord = {
        id: 'eval_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        timestamp: new Date().toISOString(),
        ...evalData
      };
      records.unshift(newRecord); // Catatan terbaru di awal
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      return newRecord;
    } catch (e) {
      console.error('Gagal menyimpan evaluasi:', e);
      return null;
    }
  },

  /**
   * Mengambil evaluasi khusus sesi hari ini
   */
  getTodayEvaluations() {
    const todayStr = new Date().toISOString().slice(0, 10);
    return this.getAllEvaluations().filter(item => item.timestamp && item.timestamp.startsWith(todayStr));
  },

  /**
   * Mengunduh berkas laporan dalam format CSV (Excel-compatible)
   */
  exportToCSV() {
    const records = this.getAllEvaluations();
    if (!records.length) {
      alert('Belum ada catatan evaluasi untuk diekspor.');
      return;
    }

    const headers = [
      'Waktu Sesi',
      'Kode Murid',
      'Guru Pendamping',
      'Aktivitas',
      'Kategori',
      'Tugas Dilakukan',
      'Tingkat Bantuan',
      'Ketepatan Gerakan',
      'Kondisi Tangan',
      'Catatan Observasi',
      'Tindak Lanjut'
    ];

    const rows = records.map(r => {
      const localTime = new Date(r.timestamp).toLocaleString('id-ID');
      const cleanNotes = (r.qualitativeNotes || '').replace(/"/g, '""');
      return [
        `"${localTime}"`,
        `"${r.studentCode || '-'}"`,
        `"${r.teacherName || '-'}"`,
        `"${r.exerciseTitle || '-'}"`,
        `"${r.categoryTitle || '-'}"`,
        `"${r.taskExecution || '-'}"`,
        `"${r.assistanceLevel || '-'}"`,
        `"${r.movementAccuracy || '-'}"`,
        `"${r.handCondition || '-'}"`,
        `"${cleanNotes}"`,
        `"${r.followUpAction || '-'}"`
      ];
    });

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Rekap_Evaluasi_BinaGerak_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  /**
   * Menghapus semua riwayat evaluasi setelah konfirmasi
   */
  clearAllEvaluations() {
    if (confirm('Apakah Anda yakin ingin menghapus seluruh riwayat evaluasi latihan pada perangkat ini?')) {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    }
    return false;
  }
};
