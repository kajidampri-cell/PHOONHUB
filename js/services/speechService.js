/**
 * Service Aksesibilitas Suara (Text-to-Speech)
 * Menggunakan Web Speech API untuk membacakan instruksi secara ramah bagi murid
 */

export const SpeechService = {
  isSupported() {
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  },

  speak(text, onEnd) {
    if (!this.isSupported()) {
      console.warn('Text-to-speech tidak didukung di peramban ini.');
      return;
    }

    // Hentikan suara yang sedang berjalan sebelumnya
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.9; // Kecepatan sedikit lebih santai untuk murid
    utterance.pitch = 1.0;

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  },

  stop() {
    if (this.isSupported()) {
      window.speechSynthesis.cancel();
    }
  }
};
