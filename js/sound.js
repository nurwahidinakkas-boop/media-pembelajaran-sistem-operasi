// Web Audio API Sound Generator
// Generates pleasant UI sound effects natively without any audio files

window.AudioFX = {
  enabled: true,
  ctx: null,

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  },

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.08) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  },

  playClick() {
    this.playTone(800, 'sine', 0.05, 0.03);
  },

  playCorrect() {
    if (!this.enabled) return;
    const now = Date.now();
    this.playTone(523.25, 'sine', 0.15, 0.06); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.18, 0.06), 100); // E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.25, 0.06), 200); // G5
  },

  playWrong() {
    if (!this.enabled) return;
    this.playTone(280, 'triangle', 0.2, 0.06);
    setTimeout(() => this.playTone(220, 'triangle', 0.25, 0.06), 120);
  },

  playFanfare() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.25, 0.07), idx * 120);
    });
  },

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('os_sound_enabled', this.enabled ? '1' : '0');
    return this.enabled;
  }
};

// Load saved sound preference
const savedSound = localStorage.getItem('os_sound_enabled');
if (savedSound !== null) {
  window.AudioFX.enabled = savedSound === '1';
}
