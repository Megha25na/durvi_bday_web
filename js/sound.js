// Web Audio API Synthesizer for Romantic Music Box & Retro Sound Effects
// NO AI voice, NO speech synthesis. Pure music & sound effects.

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.isPlayingMusic = true; // Audio is ON by default!
    this.musicTimer = null;
    this.musicStep = 0;
    this.isUnlocked = false;

    // In case any browser speech synthesis was queued by prior script, cancel it immediately!
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      
      // Master gain node
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isUnlocked = true;
  }

  // Cute bubble pop sound for button clicks
  playPop() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {}
  }

  // Dreamy bell chime for slide transitions
  playChime() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      freqs.forEach((freq, idx) => {
        const noteTime = now + (idx * 0.06);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.25, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.7);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(noteTime);
        osc.stop(noteTime + 0.75);
      });
    } catch (e) {}
  }

  // Camera shutter click-whirr
  playCameraShutter() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      
      // Click 1
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'square';
      osc1.frequency.setValueAtTime(140, now);
      gain1.gain.setValueAtTime(0.25, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(now);
      osc1.stop(now + 0.06);

      // Click 2
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(240, now + 0.07);
      gain2.gain.setValueAtTime(0.2, now + 0.07);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc2.connect(gain2);
      gain2.connect(this.masterGain);
      osc2.start(now + 0.07);
      osc2.stop(now + 0.15);
    } catch (e) {}
  }

  // Celebration fanfare for finale slide
  playCelebration() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const notes = [392.00, 493.88, 587.33, 783.99, 987.77, 1174.66, 1567.98];
      notes.forEach((freq, i) => {
        const noteTime = now + (i * 0.08);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.28, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.2);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(noteTime);
        osc.stop(noteTime + 1.25);
      });
    } catch (e) {}
  }

  // Romantic music box note (gentle kalimba/celesta)
  playMusicBoxNote(freq) {
    if (!this.ctx || this.isMuted || !this.isPlayingMusic) return;
    try {
      const now = this.ctx.currentTime;
      
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);

      gain1.gain.setValueAtTime(0.22, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(now);
      osc1.stop(now + 0.75);

      // Sweet harmonic
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, now);

      gain2.gain.setValueAtTime(0.06, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

      osc2.connect(gain2);
      gain2.connect(this.masterGain);
      osc2.start(now);
      osc2.stop(now + 0.45);
    } catch (e) {}
  }

  // Soft romantic music box loop (Canon in D romantic melody)
  startMusicLoop() {
    if (this.musicTimer) return; // Already running

    const melody = [
      523.25, 659.25, 783.99, 659.25, // C - E - G - E
      587.33, 698.46, 880.00, 698.46, // D - F - A - F
      659.25, 783.99, 987.77, 783.99, // E - G - B - G
      698.46, 880.00, 1046.5, 880.00, // F - A - C - A
      783.99, 987.77, 1174.6, 987.77, // G - B - D - B
      659.25, 783.99, 1046.5, 783.99, // E - G - C - G
      880.00, 1046.5, 1318.5, 1046.5  // A - C - E - C
    ];

    this.musicStep = 0;
    this.musicTimer = setInterval(() => {
      if (!this.isPlayingMusic || this.isMuted) return;
      this.init();
      const freq = melody[this.musicStep % melody.length];
      this.musicStep++;
      this.playMusicBoxNote(freq);
    }, 320);
  }

  stopMusicLoop() {
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }
}

window.soundEngine = new SoundEffects();
