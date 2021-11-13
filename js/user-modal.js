import { isEscapeKey } from './utils/util.js';
import { setInitialMap } from './map.js';

const successElement = document.querySelector('.success');
const onPopupSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successElement.classList.add('hidden');
  }
};
const errorElement = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');
const onPopupErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorElement.classList.add('hidden');
  }
};

// success
const OpenPopupSuccess = () => {
  successElement.classList.remove('hidden');
  document.querySelector('.ad-form').reset();
  setInitialMap()
  successElement.addEventListener('click', () => {
    successElement.classList.add('hidden');
  });
  document.addEventListener('keydown', onPopupSuccessEscKeydown);
};

//error
const OpenPopupError = (error) => {
  console.log(error);
  errorElement.classList.remove('hidden');
  errorElement.addEventListener('click', () => {
    errorElement.classList.add('hidden');
  });
  errorButton.addEventListener('click', () => {
    errorElement.classList.add('hidden');
  });
  document.addEventListener('keydown', onPopupErrorEscKeydown);
};

export { OpenPopupError, OpenPopupSuccess };
