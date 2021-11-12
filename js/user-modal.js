import { isEscapeKey } from './utils/util.js';
import { setInitialMap } from './map.js';

const success = document.querySelector('.success');
const onPopupSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    success.classList.add('hidden');
  }
};
const error = document.querySelector('.error');
const onPopupErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    error.classList.add('hidden');
  }
};


// success
const OpenPopupSuccess = () => {
  success.classList.remove('hidden');
  document.querySelector('.ad-form').reset();
  setInitialMap()
  success.addEventListener('click', () => {
    success.classList.add('hidden');
  });
  document.addEventListener('keydown', onPopupSuccessEscKeydown);
}

//error
const OpenPopupError = () => {
  error.classList.remove('hidden');
  error.addEventListener('click', () => {
    error.classList.add('hidden');
  });
  document.addEventListener('keydown', onPopupErrorEscKeydown);
}


export {OpenPopupError, OpenPopupSuccess};
