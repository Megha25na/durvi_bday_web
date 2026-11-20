/**
 * Application Logic for Birthday Surprise Interactive Scrapbook
 */

document.addEventListener('DOMContentLoaded', () => {
  // Total number of slides
  const TOTAL_SLIDES = 9;
  let currentSlide = 1;
  let isGridView = false;

  // DOM Elements
  const storyStage = document.getElementById('storyStage');
  const gridView = document.getElementById('gridView');
  const gridCardsContainer = document.getElementById('gridCardsContainer');
  const dotsContainer = document.getElementById('dotsContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const viewToggleBtn = document.getElementById('viewToggleBtn');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const sfxToggleBtn = document.getElementById('sfxToggleBtn');
  const voiceToggleBtn = document.getElementById('voiceToggleBtn');
  const customizeBtn = document.getElementById('customizeBtn');
  const customizerModal = document.getElementById('customizerModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');
  const saveCustomBtn = document.getElementById('saveCustomBtn');

  // Interactive buttons
  const startBtn = document.getElementById('startBtn');
  const yesReadyBtn = document.getElementById('yesReadyBtn');
  const runawayNoBtn = document.getElementById('runawayNoBtn');
  const yesDateBtn = document.getElementById('yesDateBtn');
  const confettiAgainBtn = document.getElementById('confettiAgainBtn');
  const restartBtn = document.getElementById('restartBtn');
  const printTicketBtn = document.getElementById('printTicketBtn');

  // Slide selectors
  const slides = Array.from(document.querySelectorAll('.surprise-card[data-slide]'));

  // -------------------------------------------------------------
  // 1. Initialize Progress Dots
  // -------------------------------------------------------------
  function initDots() {
    dotsContainer.innerHTML = '';
    for (let i = 1; i <= TOTAL_SLIDES; i++) {
      const dot = document.createElement('div');
      dot.className = `dot ${i === 1 ? 'active' : ''}`;
      dot.setAttribute('title', `Slide ${i}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
  }

  // -------------------------------------------------------------
  // 2. Slide Navigation Logic
  // -------------------------------------------------------------
  function goToSlide(slideNum) {
    if (slideNum < 1 || slideNum > TOTAL_SLIDES) return;

    // Hide all slides
    slides.forEach(slide => {
      slide.style.display = 'none';
      slide.classList.remove('active');
    });

    // Show target slide
    const targetSlide = document.querySelector(`.surprise-card[data-slide="${slideNum}"]`);
    if (targetSlide) {
      targetSlide.style.display = 'flex';
      setTimeout(() => targetSlide.classList.add('active'), 20);
    }

    currentSlide = slideNum;

    // Update controls & dots
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === TOTAL_SLIDES;

    const allDots = dotsContainer.querySelectorAll('.dot');
    allDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx + 1 === currentSlide);
    });

    // Sound chime effect
    if (window.soundEngine) {
      window.soundEngine.playChime();
    }

    // Special behavior for Slide 9 (Finale)
    if (currentSlide === 9) {
      setTimeout(() => {
        if (window.aestheticConfetti) {
          window.aestheticConfetti.fire({ count: 140 });
        }
        if (window.soundEngine) {
          window.soundEngine.playCelebration();
        }
      }, 300);
    }
  }

  // Next / Prev listeners
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 1) goToSlide(currentSlide - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide < TOTAL_SLIDES) goToSlide(currentSlide + 1);
  });

  // Individual next buttons inside slides
  document.querySelectorAll('.next-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentSlide < TOTAL_SLIDES) {
        goToSlide(currentSlide + 1);
      }
    });
  });

  // Start button on Slide 1
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (window.soundEngine) {
        window.soundEngine.init();
        if (window.soundEngine.isPlayingMusic && !window.soundEngine.musicTimer) {
          window.soundEngine.startMusicLoop();
        }
      }
      goToSlide(2);
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (isGridView || customizerModal.classList.contains('open')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
      if (currentSlide < TOTAL_SLIDES) goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
      if (currentSlide > 1) goToSlide(currentSlide - 1);
    }
  });

  // Mobile swipe navigation
  let touchStartX = 0;
  let touchEndX = 0;
  storyStage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  storyStage.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 60) {
      if (diff < 0 && currentSlide < TOTAL_SLIDES) {
        // Swipe left -> Next
        goToSlide(currentSlide + 1);
      } else if (diff > 0 && currentSlide > 1) {
        // Swipe right -> Previous
        goToSlide(currentSlide - 1);
      }
    }
  }

  // -------------------------------------------------------------
  // 3. Playful "Runaway No" Button
  // -------------------------------------------------------------
  if (runawayNoBtn) {
    const playfulTexts = [
      "Wait no! 😜",
      "Try again! 🥺",
      "Wrong button! 😂",
      "You know you want to! 💕",
      "Are you sure? 👀",
      "Just say YES! 🥰"
    ];
    let textIdx = 0;

    const dodgeButton = (e) => {
      e.preventDefault();
      const xOffset = (Math.random() - 0.5) * 160;
      const yOffset = (Math.random() - 0.5) * 80;
      runawayNoBtn.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      textIdx = (textIdx + 1) % playfulTexts.length;
      runawayNoBtn.innerText = playfulTexts[textIdx];
      if (window.soundEngine) window.soundEngine.playPop();
    };

    runawayNoBtn.addEventListener('mouseenter', dodgeButton);
    runawayNoBtn.addEventListener('click', dodgeButton);
    runawayNoBtn.addEventListener('touchstart', dodgeButton);
  }

  // -------------------------------------------------------------
  // 4. Slide 8 & 9 Finale Interactions
  // -------------------------------------------------------------
  if (yesDateBtn) {
    yesDateBtn.addEventListener('click', () => {
      goToSlide(9);
    });
  }

  if (confettiAgainBtn) {
    confettiAgainBtn.addEventListener('click', () => {
      if (window.aestheticConfetti) {
        window.aestheticConfetti.fire({ count: 150 });
      }
      if (window.soundEngine) {
        window.soundEngine.playCelebration();
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      goToSlide(1);
    });
  }

  if (printTicketBtn) {
    printTicketBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Button sound triggers for all pill buttons
  document.querySelectorAll('.pill-btn, .btn-icon').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.soundEngine) window.soundEngine.playPop();
    });
  });

  // Sound triggers for clicking polaroids & memories
  document.querySelectorAll('.polaroid-card, .memory-item, .photobooth-strip-vertical').forEach(el => {
    el.addEventListener('click', () => {
      if (window.soundEngine) window.soundEngine.playCameraShutter();
    });
  });

  // -------------------------------------------------------------
  // 5. Dual View Toggle (Story Mode vs Grid Scrapbook)
  // -------------------------------------------------------------
  function buildGridView() {
    gridCardsContainer.innerHTML = '';
    slides.forEach((origSlide, index) => {
      const slideNum = index + 1;
      const cardClone = origSlide.cloneNode(true);
      cardClone.style.display = 'flex';
      cardClone.style.opacity = '1';
      cardClone.classList.add('grid-card-preview');

      // Remove internal event blocker
      cardClone.querySelectorAll('.next-step-btn, .pill-btn, .btn-no').forEach(b => {
        b.style.pointerEvents = 'none';
      });

      const wrapper = document.createElement('div');
      wrapper.className = 'grid-card-wrapper';
      wrapper.setAttribute('title', `Click to open Slide ${slideNum}`);
      wrapper.appendChild(cardClone);

      wrapper.addEventListener('click', () => {
        toggleView(false);
        goToSlide(slideNum);
      });

      gridCardsContainer.appendChild(wrapper);
    });
  }

  function toggleView(showGrid) {
    isGridView = showGrid;
    if (isGridView) {
      buildGridView();
      storyStage.classList.add('hidden');
      gridView.classList.add('active');
      viewToggleBtn.innerHTML = '<span class="icon">📖</span> <span class="label">Story View</span>';
      viewToggleBtn.classList.add('active');
    } else {
      storyStage.classList.remove('hidden');
      gridView.classList.remove('active');
      viewToggleBtn.innerHTML = '<span class="icon">🗂️</span> <span class="label">Grid View</span>';
      viewToggleBtn.classList.remove('active');
      goToSlide(currentSlide);
    }
  }

  if (viewToggleBtn) {
    viewToggleBtn.addEventListener('click', () => {
      toggleView(!isGridView);
    });
  }

  // -------------------------------------------------------------
  // 6. Audio Toggles
  // -------------------------------------------------------------
  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      if (window.soundEngine) {
        window.soundEngine.toggleMusic(musicToggleBtn);
      }
    });
  }

  if (sfxToggleBtn) {
    sfxToggleBtn.addEventListener('click', () => {
      if (window.soundEngine) {
        window.soundEngine.isMuted = !window.soundEngine.isMuted;
        sfxToggleBtn.innerHTML = window.soundEngine.isMuted ? '<span class="icon">🔇</span>' : '<span class="icon">🔊</span>';
      }
    });
  }

  // -------------------------------------------------------------
  // 7. Personalization & LocalStorage
  // -------------------------------------------------------------
  const STORAGE_KEY = 'surprise_storybook_data_v2';

  function loadSavedCustomizations() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const data = JSON.parse(raw);
      applyCustomizations(data);
    } catch (e) {
      console.warn("Could not parse saved customizations", e);
    }
  }

  function applyCustomizations(data) {
    if (data.recipient) {
      document.getElementById('ticketGuestName').innerText = data.recipient;
      document.getElementById('recipientInput').value = data.recipient;
      const bdayText = document.getElementById('bdayHeadingText');
      if (bdayText) {
        bdayText.innerText = `HAPPY ${data.occasionUpper || 'BIRTHDAY'} ${data.recipient.toUpperCase()}!`;
      }
    }

    if (data.occasion) {
      const occasionMap = {
        birthday: "Birthday Celebration",
        anniversary: "Anniversary Special",
        date: "Date Night Special",
        valentines: "Valentine's Day",
        love: "Just Because I Love You"
      };
      document.getElementById('ticketOccasion').innerText = occasionMap[data.occasion] || data.occasion;
      document.getElementById('occasionSelect').value = data.occasion;
    }

    if (data.dateQuestion) {
      document.getElementById('dateQuestionText').innerText = data.dateQuestion;
      document.getElementById('dateQuestionInput').value = data.dateQuestion;
    }

    if (data.letterMessage) {
      document.getElementById('letterContentText').innerHTML = `<p>${data.letterMessage.replace(/\n/g, '<br>')}</p>`;
      document.getElementById('letterMessageInput').value = data.letterMessage;
    }

    if (data.photos) {
      if (data.photos.couple) {
        document.getElementById('windowPhoto').src = data.photos.couple;
      }
      if (data.photos.bouquet) {
        document.getElementById('bouquetPhoto').src = data.photos.bouquet;
      }
      if (data.photos.fave) {
        document.getElementById('favePhoto').src = data.photos.fave;
      }
    }
  }

  function openCustomizer() {
    customizerModal.classList.add('open');
  }

  function closeCustomizer() {
    customizerModal.classList.remove('open');
  }

  if (customizeBtn) customizeBtn.addEventListener('click', openCustomizer);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeCustomizer);

  customizerModal.addEventListener('click', (e) => {
    if (e.target === customizerModal) closeCustomizer();
  });

  // Handle Photo Uploads (Convert to Data URL)
  const uploadedPhotos = {};

  function setupPhotoUpload(inputId, photoKey, previewImgId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          uploadedPhotos[photoKey] = dataUrl;
          const targetImg = document.getElementById(previewImgId);
          if (targetImg) targetImg.src = dataUrl;
          if (input.parentElement) {
            input.parentElement.style.borderColor = '#22c55e';
            input.parentElement.querySelector('span').innerText = '✓ Photo Loaded';
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  setupPhotoUpload('uploadCouple', 'couple', 'windowPhoto');
  setupPhotoUpload('uploadBouquet', 'bouquet', 'bouquetPhoto');
  setupPhotoUpload('uploadFave', 'fave', 'favePhoto');

  // Save Customizations
  if (saveCustomBtn) {
    saveCustomBtn.addEventListener('click', () => {
      const recipient = document.getElementById('recipientInput').value.trim() || 'My Love';
      const occasion = document.getElementById('occasionSelect').value;
      const dateQuestion = document.getElementById('dateQuestionInput').value.trim();
      const letterMessage = document.getElementById('letterMessageInput').value.trim();

      const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      const savedPhotos = existingData.photos || {};
      const newPhotos = { ...savedPhotos, ...uploadedPhotos };

      const configData = {
        recipient,
        occasion,
        occasionUpper: occasion.toUpperCase(),
        dateQuestion,
        letterMessage,
        photos: newPhotos
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(configData));
      applyCustomizations(configData);
      closeCustomizer();

      if (window.soundEngine) window.soundEngine.playChime();
      if (window.aestheticConfetti) window.aestheticConfetti.fire({ count: 60 });
    });
  }

  // Reset to Defaults
  if (resetDefaultsBtn) {
    resetDefaultsBtn.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    });
  }

  // Memory Modal Elements & Close Handler
  const memoryModal = document.getElementById('memoryModal');
  const closeMemoryModalBtn = document.getElementById('closeMemoryModalBtn');
  const memoryModalImg = document.getElementById('memoryModalImg');
  const memoryModalTitle = document.getElementById('memoryModalTitle');
  const memoryModalDesc = document.getElementById('memoryModalDesc');

  function closeMemoryModal() {
    if (memoryModal) memoryModal.classList.remove('open');
  }

  if (closeMemoryModalBtn) {
    closeMemoryModalBtn.addEventListener('click', closeMemoryModal);
  }

  if (memoryModal) {
    memoryModal.addEventListener('click', (e) => {
      if (e.target === memoryModal) closeMemoryModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMemoryModal();
      if (customizerModal) customizerModal.classList.remove('open');
    }
  });

  // Global Memory Opener
  window.openMemoryModal = function(cardEl) {
    if (window.soundEngine) window.soundEngine.playCameraShutter();
    const imgEl = cardEl.querySelector('img');
    const title = cardEl.getAttribute('data-title') || 'Sweet Memory';
    const desc = cardEl.getAttribute('data-desc') || '';

    if (memoryModalImg && imgEl) memoryModalImg.src = imgEl.src;
    if (memoryModalTitle) memoryModalTitle.innerText = title;
    if (memoryModalDesc) memoryModalDesc.innerText = `"${desc}"`;

    if (memoryModal) memoryModal.classList.add('open');
  };

  // -------------------------------------------------------------
  // Initial Run & Auto-Start Audio on First Interaction
  // -------------------------------------------------------------
  const autoStartAudio = () => {
    if (window.soundEngine) {
      window.soundEngine.init();
      if (window.soundEngine.isPlayingMusic && !window.soundEngine.musicTimer) {
        window.soundEngine.startMusicLoop();
      }
    }
  };
  document.addEventListener('click', autoStartAudio);
  document.addEventListener('touchstart', autoStartAudio);
  document.addEventListener('keydown', autoStartAudio);

  initDots();
  loadSavedCustomizations();
  goToSlide(1);
});

// Quick global photo modal zoom
function openPhotoModal(cardEl) {
  if (window.soundEngine) window.soundEngine.playCameraShutter();
  const img = cardEl.querySelector('img');
  if (img) {
    img.style.transition = 'transform 0.3s ease';
    img.style.transform = 'scale(1.08)';
    setTimeout(() => {
      img.style.transform = 'scale(1)';
    }, 400);
  }
}
