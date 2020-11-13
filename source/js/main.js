'use strict';
(function () {
  // Модалки

  const callHeader = document.querySelector('.header__call');
  const modalOrder = document.querySelector('.modal-order');
  const modalOrderClose = modalOrder.querySelector('.modal-order__close');
  const modalSuccess = document.querySelector('.modal-success');
  const form = document.querySelector('.modal-order__form');
  const username = document.querySelector('#username');
  const phone = document.querySelector('#phone');
  const successButtons = modalSuccess.querySelectorAll('button');
  const overlayOrder = document.querySelector('.modal-order__overlay');
  const overlaySuccess = document.querySelector('.modal-success__overlay');
  const body = document.querySelector('body');
  const checkboxText = document.querySelector('.modal-order__form span');
  const iWantToGoForm = document.querySelector('.iwanttogo__form');
  const detailsForm = document.querySelector('.details__form');

  callHeader.addEventListener('click', function (evt) {
    evt.preventDefault();
    body.style.overflow = 'hidden';
    modalOrder.classList.remove('visually-hidden');
    phone.value = '';
    username.value = '';
    checkboxText.style.color = '#787878';
    username.focus();
    modalOrderClose.addEventListener('click', function (eve) {
      if (eve.button === 0) {
        modalOrder.classList.add('visually-hidden');
        body.style.overflow = 'visible';
      }
    });

    overlayOrder.addEventListener('click', function (eve) {
      if (eve.button === 0) {
        modalOrder.classList.add('visually-hidden');
        body.style.overflow = 'visible';
      }
    });

    document.addEventListener('keydown', function (eve) {
      if (eve.key === 'Escape') {
        modalOrder.classList.add('visually-hidden');
        body.style.overflow = 'visible';
      }
    });
  });

  form.addEventListener('submit', function (evtSubmit) {
    evtSubmit.preventDefault();
    modalOrder.classList.add('visually-hidden');
    modalSuccess.classList.remove('visually-hidden');
  });

  successButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.button === 0) {
        modalSuccess.classList.add('visually-hidden');
        body.style.overflow = 'visible';
        form.submit();
      }
    });

    overlaySuccess.addEventListener('click', function (e) {
      if (e.button === 0) {
        modalSuccess.classList.add('visually-hidden');
        body.style.overflow = 'visible';
        form.submit();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        modalSuccess.classList.add('visually-hidden');
        body.style.overflow = 'visible';
        form.submit();
      }
    });
  });

  iWantToGoForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    modalSuccess.classList.remove('visually-hidden');
    body.style.overflow = 'hidden';
  });

  detailsForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    modalSuccess.classList.remove('visually-hidden');
  });

  // Кнопка скрола

  const scrollButton = document.querySelector('.header__scroll');

  scrollButton.addEventListener('click', function () {
    window.scrollBy(0, 300);
  });

  // Табы

  const link = document.querySelectorAll('.panel__link');
  const card = document.querySelectorAll('.description__item');
  const changeActive = function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');

    link.forEach(function (child) {
      child.classList.remove('panel__item--active');
    });
    card.forEach(function (child) {
      child.classList.remove('description__item--active');
    });

    e.target.classList.add('panel__item--active');
    document.querySelector(id).classList.add('description__item--active');
  };

  link.forEach(function (item) {
    item.addEventListener('click', changeActive);
  });

  document.querySelector('.panel__link').click();

  // Аккордион

  const trigger = document.querySelectorAll('.accordion__item');

  trigger.forEach(function (i) {
    i.addEventListener('click', function () {
      i.classList.toggle('accordion__item--active');
    });
  });

  // Слайдер Life

  const slides = document.querySelectorAll('.life__slide');
  const wrapper = document.querySelector('.life__wrapper');
  const slider = document.querySelector('.life__slides');
  const bigSlide = document.querySelector('.life__slide--big');
  const cloneBigSlide = bigSlide.cloneNode(true);
  const container = document.querySelector('.life__container');

  window.addEventListener('resize', function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
      bigSlide.remove();
      container.insertBefore(cloneBigSlide, slides[1]);
      const newSlides = document.querySelectorAll('.life__slide');
      wrapper.append(lifeDots);
      const dots = wrapper.querySelectorAll('.life__dot');
      let index = 0;
      const activeSlide = function (n) {
        newSlides.forEach(function (slide) {
          slide.classList.remove('life__slide--active');
        });
        newSlides[n].classList.add('life__slide--active');
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
      dots[0].click();
      const nextSlide = function () {
        if (index === slides.length - 1) {
          index = 0;
          activeSlide(index);
          activeDot(index);
        } else {
          index++;
          activeSlide(index);
          activeDot(index);
        }
      };

      const prevSlide = function () {
        if (index === 0) {
          index = slides.length - 1;
          activeSlide(index);
          activeDot(index);
        } else {
          index--;
          activeSlide(index);
          activeDot(index);
        }
      };

      const handleTouchMove = function (evt) {
        if (!xDown || !yDown) {
          return;
        }

        let xUp = evt.touches[0].pageX;
        let yUp = evt.touches[0].pageY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
        xDown = null;
        yDown = null;
      };
      slider.addEventListener('touchstart', handleTouchStart, false);
      slider.addEventListener('touchmove', handleTouchMove, false);
    } else {
      lifeDots.remove();
      cloneBigSlide.remove();
      slider.insertBefore(bigSlide, container);
    }
  });

  let addDot = function (n) {
    for (let i = 1; i <= n; i++) {
      let dot = document.createElement('span');
      dot.className = 'life__dot';
      lifeDots.append(dot);
    }
  };

  let lifeDots = document.createElement('div');
  lifeDots.className = 'life__dots';
  addDot(5);

  // Слайдер Feedback

  const slidesF = document.querySelectorAll('.feedback__item');
  const prevs = document.querySelectorAll('.review__button--prev');
  const nexts = document.querySelectorAll('.review__button--next');
  const sliderF = document.querySelector('.feedback__slider');
  const track = document.querySelector('.feedback__track');
  let currentIndex = 2;
  let widthSlide = sliderF.clientWidth;
  let indexF = widthSlide * currentIndex;

  const setPosition = function () {
    if (currentIndex === 0) {
      prevs.forEach(function (btn) {
        btn.setAttribute('disabled', 'true');
      });
    } else {
      prevs.forEach(function (btn) {
        btn.removeAttribute('disabled');
      });
    }

    if (currentIndex === (slidesF.length - 1)) {
      nexts.forEach(function (btn) {
        btn.setAttribute('disabled', 'true');
      });
    } else {
      nexts.forEach(function (btn) {
        btn.removeAttribute('disabled');
      });
    }

    indexF = widthSlide * currentIndex;
    track.style.transform = `translateX(-${indexF}px)`;
  };

  setPosition();

  window.addEventListener('resize', function () {
    widthSlide = sliderF.clientWidth;
    setPosition();
  });

  const nextSlideF = function () {
    currentIndex++;
    setPosition();
  };

  const prevSlideF = function () {
    currentIndex--;
    setPosition();
  };

  const activePressNext = function () {
    nexts.forEach(function (it) {
      it.addEventListener('click', nextSlideF);
    });
  };

  const activePressPrev = function () {
    prevs.forEach(function (i) {
      i.addEventListener('click', prevSlideF);
    });
  };

  activePressNext();
  activePressPrev();

  let xDown = null;
  let yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].pageX;
    yDown = evt.touches[0].pageY;
  }

  const handleTouchMoveF = function (evt) {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].pageX;
    let yUp = evt.touches[0].pageY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        nextSlideF();
      } else {
        prevSlideF();
      }
    }
    xDown = null;
    yDown = null;
  };

  if (currentIndex >= 0 && currentIndex <= slidesF.length) {
    sliderF.addEventListener('touchstart', handleTouchStart, false);
    sliderF.addEventListener('touchmove', handleTouchMoveF, false);
  }
})();
