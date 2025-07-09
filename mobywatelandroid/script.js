const video = document.getElementById("introVideo");
const kot1 = document.getElementById("kot1");
const kot2 = document.getElementById("kot2");

// Obsługa zakończenia filmu
video.onended = () => {
  video.classList.add("fade-out");

  setTimeout(() => {
    video.style.display = "none";
    kot1.classList.remove("hidden");
    history.pushState({ page: "kot1" }, "", "#kot1");
  }, 1000);
};

// Kliknięcie w pierwsze zdjęcie
kot1.onclick = () => {
  kot1.classList.add("hidden");
  kot2.classList.remove("hidden");
  history.pushState({ page: "kot2" }, "", "#kot2");
};

// Obsługa wstecznego nawigowania
window.onpopstate = (event) => {
  if (location.hash === "#kot1" || !location.hash) {
    kot2.classList.add("hidden");
    kot1.classList.remove("hidden");
  }
};

// Rejestracja Service Workera (do offline)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
