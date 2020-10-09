"use strict";

var link = document.querySelectorAll(".panel__item");
var card = document.querySelectorAll(".description__item");
var previewButton = document.querySelectorAll(".card__button");
link.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    var id = evt.target.getAttribute("href");
    link.forEach(function (child) {
      return child.classList.remove("panel__item--active");
    });
    card.forEach(function (child) {
      return child.classList.remove("description__item--active");
    });
    item.classList.add("panel__item--active");
    document.querySelector(id).classList.add("description__item--active");
  });
});
document.querySelector(".panel__link").click();


// const link = document.querySelectorAll(".panel__item");
// const card = document.querySelectorAll(".description__item");
// const previewButton = document.querySelectorAll(".card__button");

// link.forEach((item) => {
//     item.addEventListener("click", function (evt) {
//         evt.preventDefault();
//         const id = evt.target.getAttribute("href");

//         link.forEach((child) => child.classList.remove("panel__item--active"));
//         card.forEach((child) => child.classList.remove("description__item--active"));

//         item.classList.add("panel__item--active");
//         document.querySelector(id).classList.add("description__item--active");
//     })
// });

// document.querySelector(".panel__link").click();
