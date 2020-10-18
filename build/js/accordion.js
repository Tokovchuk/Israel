const trigger = document.querySelectorAll('.accordion__item');

trigger.forEach(function (i) {
  i.addEventListener('click', function () {
    i.classList.toggle('accordion__item--active');
  })
})
