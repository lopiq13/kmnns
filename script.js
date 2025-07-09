const video = document.getElementById('introVideo');
const gallery = document.getElementById('gallery');
const slideContainer = document.getElementById('slideContainer');

let currentSlide = 0;

// Po zakończeniu filmu
video.addEventListener('ended', () => {
  video.style.display = 'none';
  gallery.classList.remove('hidden');
});

// Kliknięcie w pierwszy obraz — przejście do drugiego
slideContainer.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = 1;
    slideContainer.style.transform = 'translateX(-100%)';
    history.pushState({ slide: 1 }, '');
  }
});

// Obsługa przycisku "Wstecz"
window.addEventListener('popstate', (event) => {
  currentSlide = 0;
  slideContainer.style.transform = 'translateX(0)';
});

