let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideCountDisplay = document.getElementById('slide-count');
updateSlideCount();

document.getElementById('next-slide').addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    changeSlide(currentIndex + 1);
  }
});

document.getElementById('previous-slide').addEventListener('click', () => {
  if (currentIndex > 0) {
    changeSlide(currentIndex - 1);
  }
});

function changeSlide(index) {
  slides[currentIndex].classList.remove('active', 'prev');
  slides[currentIndex].classList.add(index > currentIndex ? 'prev' : 'next');
  currentIndex = index;
  slides[currentIndex].classList.remove('next', 'prev');
  slides[currentIndex].classList.add('active');
  updateSlideCount();
}

function updateSlideCount() {
  slideCountDisplay.innerText = `${currentIndex + 1} / ${slides.length}`;
}

changeSlide(0);
