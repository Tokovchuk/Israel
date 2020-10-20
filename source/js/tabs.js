'use strict';

const link = document.querySelectorAll('.panel__item');
const card = document.querySelectorAll('.description__item');

link.forEach((item) => {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    const id = evt.target.getAttribute('href');

    link.forEach((child) => child.classList.remove('panel__item--active'));
    card.forEach((child) => child.classList.remove('description__item--active'));

    item.classList.add('panel__item--active');
    document.querySelector(id).classList.add('description__item--active');
  });
});

document.querySelector('.panel__link').click();
