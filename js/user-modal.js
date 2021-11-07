import { isEscapeKey } from "./utils/util.js";

const userPopupError = document.querySelector('.error');
const userPopupSuccess = document.querySelector('.success');


const useClosePopupSuccess = () => {
  userPopupSuccess.addEventListener('click', () => {
    userPopupSuccess.classList.add('hidden');
  });
}

const useClosePopupError = () => {
  userPopupError.addEventListener('click', () => {
    userPopupError.classList.add('hidden');
  });
}

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userPopupError.classList.add('hidden');
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userPopupSuccess.classList.add('hidden');
  }
});


export { useClosePopupSuccess, useClosePopupError}
