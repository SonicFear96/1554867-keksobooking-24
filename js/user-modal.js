import { isEscapeKey } from './utils/util.js';
import { setInitialMap } from './map.js';


// success
const success = document.querySelector('.success');

const onPopupSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    success.classList.add('hidden');
  }
};

function OpenPopupSuccess () {
  success.classList.remove('hidden');
  document.querySelector('.ad-form').reset();
  setInitialMap()
  success.addEventListener('click', () => {
    success.classList.add('hidden');
  });
  success.addEventListener('keydown', onPopupSuccessEscKeydown);
}

//error
const error = document.querySelector('.error');

function OpenPopupError () {
  error.classList.remove('hidden');
  error.addEventListener('click', () => {
    error.classList.add('hidden');
  });
}


export {OpenPopupError, OpenPopupSuccess};
