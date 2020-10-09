'use strict';

const callHeader = document.querySelector('.header__call');
const modalOrder = document.querySelector('.modal-order');
const modalOrderClose = modalOrder.querySelector('.modal-order__close');
const modalSuccess = document.querySelector('.modal-success');
const username = document.querySelector('#username');
const phone = document.querySelector('#phone');
const button = document.querySelector('.modal-order__form button');
const successButtons = modalSuccess.querySelectorAll('button');
const form = document.querySelector('.modal-order form');
const checkbox = document.querySelector('#checkbox');

callHeader.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalOrder.classList.remove('visually-hidden');
  phone.value = '';
  username.value = '';
  username.style.border = '2px solid #e3e3e3';
  phone.style.border = '2px solid #e3e3e3';

  modalOrderClose.addEventListener('click', function (eve) {
    if (eve.button === 0) {
      modalOrder.classList.add('visually-hidden');
    }
  });
  document.addEventListener('keydown', function (eve) {
    if (eve.key === 'Escape') {
      modalOrder.classList.add('visually-hidden');
    }
  });
})


button.addEventListener('click', function (evt) {
  let inputError=false
  evt.preventDefault();

  if (!username.value) {
    username.style.border = '2px solid rgba(255, 0, 0, 0.5)';
    inputError=true;
  }
  if (!phone.value) {
    phone.style.border = '2px solid rgba(255, 0, 0, 0.5)';
    phone.innerHTML = 'dsadsadas';
  }
  if (!checkbox.checked) {
    inputError=true;
    checkbox.innerHTML = 'dsadsadas';
  }
  if (!inputError) {
    // form.submit();
    modalOrder.classList.add('visually-hidden');
    modalSuccess.classList.remove('visually-hidden');
    successButtons.forEach(function(item) {
      item.addEventListener('click', function (evt) {
        if(evt.button === 0) {
          modalSuccess.classList.add('visually-hidden');
        }
      })
    })
    document.addEventListener('keydown', function (evt) {
      if(evt.key === 'Escape') {
        modalSuccess.classList.add('visually-hidden');
      }
    })
  }
});

// let uploadForm = function (data, onSuccess) {
//   let xhr = new XMLHttpRequest();
//   xhr.responseType = 'json';

//   xhr.addEventListener('load', function () {
//     if (xhr.status === 200) {
//       onSuccess();
//     } else {
//       onError();
//     }
//   });

//   xhr.addEventListener('error', function () {
//     onError();
//   });

//   xhr.addEventListener('timeout', function () {
//     onError();
//   });

//   xhr.timeout = 10000; // 10s

//   xhr.open('POST', '');
//   xhr.send(data);
// };

// let onSuccessUpload = function () {
//   modalSuccess.classList.remove('visually-hidden');
//   successButtons.forEach(function(item) {
//     item.addEventListener('click', function (evt) {
//       if(evt.button === 0) {
//         modalSuccess.classList.add('visually-hidden');
//       }
//     })
//   })
//   document.addEventListener('keydown', function (evt) {
//     if(evt.key === 'Escape') {
//       modalSuccess.classList.add('visually-hidden');
//     }
//   })
// }

// form.addEventListener('submit', function (evt) {
//   uploadForm(new FormData(form), onSuccessUpload);
//   evt.preventDefault();
// });
