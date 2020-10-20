'use strict';

const slides = document.querySelectorAll('.life__slide');
const dots = document.querySelectorAll('.life__dot');

let index = 0;

const activeSlide = function (n) {
  slides.forEach(function (slide) {
    slide.classList.remove('life__slide--active');
  });
  slides[n].classList.add('life__slide--active');
};

const activeDot = function (n) {
  dots.forEach(function (dot) {
    dot.classList.remove('life__dot--active');
  });
  dots[n].classList.add('life__dot--active');
};

dots.forEach(function (item, indexDot) {
  item.addEventListener('click', function () {
    index = indexDot;
    activeSlide(index);
    activeDot(index);
  });
});
