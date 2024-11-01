let currentIndex = 0;
let currentPresentation = 1;
const lastViewedSlide = { 1: 0, 2: 0 };
const presentations = {
  1: document.querySelectorAll('.presentation-1'),
  2: document.querySelectorAll('.presentation-2'),
};
const slideCountDisplay = document.getElementById('slide-count');

document.getElementById('next-slide').addEventListener('click', () => {
  if (currentIndex < presentations[currentPresentation].length - 1) {
    changeSlide(currentIndex + 1);
  }
});

document.getElementById('previous-slide').addEventListener('click', () => {
  if (currentIndex > 0) {
    changeSlide(currentIndex - 1);
  }
});

document.getElementById('next-presentation').addEventListener('click', () => {
  changePresentation(2);
});

document.getElementById('previous-presentation').addEventListener('click', () => {
  changePresentation(1);
});

function changeSlide(index) {
  const slides = presentations[currentPresentation];
  slides[currentIndex].classList.remove('active', 'prev');
  slides[currentIndex].classList.add(index > currentIndex ? 'prev' : 'next');
  currentIndex = index;
  slides[currentIndex].classList.remove('next', 'prev');
  slides[currentIndex].classList.add('active');
  updateSlideCount();
  lastViewedSlide[currentPresentation] = currentIndex;
}

function changePresentation(presentation) {

  lastViewedSlide[currentPresentation] = currentIndex;

  currentPresentation = presentation;
  currentIndex = lastViewedSlide[currentPresentation];

  presentations[1].forEach((slide) => slide.classList.add('hidden'));
  presentations[2].forEach((slide) => slide.classList.add('hidden'));

  presentations[currentPresentation].forEach((slide) => slide.classList.remove('hidden'));
  changeSlide(currentIndex);

  const header = document.querySelector('header');
  const buttons = document.querySelectorAll('button');

  if (currentPresentation === 1) {
    header.style.backgroundColor = '#4c9f70';
    buttons.forEach(button => button.style.backgroundColor = '#4c9f70');
  } else {
    header.style.backgroundColor = '#e65c4c';
    buttons.forEach(button => button.style.backgroundColor = '#e65c4c');
  }
}

function updateSlideCount() {
  slideCountDisplay.innerText = `${currentIndex + 1} / ${presentations[currentPresentation].length}`;
}

changeSlide(0);
