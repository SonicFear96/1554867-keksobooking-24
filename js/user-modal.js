import { isEscapeKey } from './utils/util.js';
import { setInitialMap } from './map.js';
import { adForm } from './use-state.js';

const successElement = document.querySelector('.success');
const errorElement = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');

const onPopupSuccessUseEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successElement.classList.add('hidden');
  }
};
const onPopupErrorUseEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorElement.classList.add('hidden');
  }
};

const OpenPopupSuccess = () => {
  successElement.classList.remove('hidden');
  adForm.reset();
  setInitialMap();
  successElement.addEventListener('click', () => {
    successElement.classList.add('hidden');
  }, { once: true });
  document.addEventListener('keydown', onPopupSuccessUseEscKeydown, { once: true });
};

//error
const OpenPopupError = () => {
  errorElement.classList.remove('hidden');
  errorElement.addEventListener('click', () => {
    errorElement.classList.add('hidden'),{ once: true } ;
  });
  errorButton.addEventListener('click', () => {
    errorElement.classList.add('hidden');
  },{ once: true });
  document.addEventListener('keydown', onPopupErrorUseEscKeydown, { once: true });
};

//recet form


export { OpenPopupError, OpenPopupSuccess };
