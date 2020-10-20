'use strict';

const slidesF = document.querySelectorAll('.feedback__item');
const prevs = document.querySelectorAll('.review__button--prev');
const nexts = document.querySelectorAll('.review__button--next');

let indexF = 2;

const activeSlideF = function (n) {
  slidesF.forEach(function (slide) {
    slide.classList.remove('feedback__item--active');
  });
  slidesF[n].classList.add('feedback__item--active');
};

const nextSlide = function () {
  if (indexF === slidesF.length - 1) {
    indexF = 0;
    activeSlideF(indexF);
  } else {
    indexF++;
    activeSlideF(indexF);
  }
};

const prevSlide = function () {
  if (indexF === 0) {
    indexF = slidesF.length - 1;
    activeSlideF(indexF);
  } else {
    indexF--;
    activeSlideF(indexF);
  }
};

const activePressNext = function () {
  nexts.forEach(function (it) {
    it.addEventListener('click', nextSlide);
  });
};

const activePressPrev = function () {
  prevs.forEach(function (i) {
    i.addEventListener('click', prevSlide);
  });
};

activePressNext();
activePressPrev();
