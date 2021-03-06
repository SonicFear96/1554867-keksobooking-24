import { sendData } from './api.js';
import { adForm } from './use-state.js';
import { OpenPopupSuccess, OpenPopupError } from './user-modal.js';
import { setInitialMap } from './map.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM_NUMBER = 100;
const PRICE_INPUT_FLAT = 1000;
const PRICE_INPUT_HOUSE = 5000;
const PRICE_INPUT_PALACE = 10000;
const PRICE_INPUT_HOTEL = 3000;

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomNumberInput = document.querySelector('#room_number');
const guestNumberInput = document.querySelector('#capacity');
const typeAccommodation = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');


titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } символов`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  const valuePrice = priceInput.value;
  if (valuePrice < MIN_PRICE ) {
    priceInput.setCustomValidity(`Цена не может быть ниже ${ MIN_PRICE }`);
  } else if (valuePrice > MAX_PRICE) {
    priceInput.setCustomValidity(`Цена не может быть выше ${ MAX_PRICE }`);
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

const onSelectRoomChange = () => {
  const roomsValue = roomNumberInput.value;
  const guestValue = guestNumberInput.value;
  if (parseInt(roomsValue, 10) === MAX_ROOM_NUMBER && parseInt(guestValue, 10) !== 0) {
    guestNumberInput.setCustomValidity('Нужно выбрать поле "не для гостей"');
  } else if (guestValue > roomsValue) {
    guestNumberInput.setCustomValidity('Гостей больше,чем комнат');
  } else if (guestValue === '0' && roomsValue !== MAX_ROOM_NUMBER) {
    guestNumberInput.setCustomValidity('Нужно выбрать поле, c корректным количеством гостей');
  }
  else {
    guestNumberInput.setCustomValidity('');
  }
  guestNumberInput.reportValidity();
};

roomNumberInput.addEventListener('change', onSelectRoomChange);
guestNumberInput.addEventListener('change', onSelectRoomChange);

/*time in/time out*/

const onTimeChange = (evt) => {
  if (evt.target === timeIn) {
    timeOut.value = timeIn.value;
  }
  else if (evt.target === timeOut) {
    timeIn.value = timeOut.value;
  }
};

adForm.addEventListener('change', onTimeChange);

/*TYPE */

typeAccommodation.addEventListener('change', () => {
  switch (typeAccommodation.value) {
    case 'flat':
      priceInput.setAttribute('min', PRICE_INPUT_FLAT);
      priceInput.setAttribute('placeholder', PRICE_INPUT_FLAT);
      break;
    case 'bungalow':
      priceInput.setAttribute('min', 0);
      priceInput.setAttribute('placeholder', 0);
      break;
    case 'house':
      priceInput.setAttribute('min', PRICE_INPUT_HOUSE);
      priceInput.setAttribute('placeholder', PRICE_INPUT_HOUSE);
      break;
    case 'palace':
      priceInput.setAttribute('min', PRICE_INPUT_PALACE);
      priceInput.setAttribute('placeholder', PRICE_INPUT_PALACE);
      break;
    case 'hotel':
      priceInput.setAttribute('min', PRICE_INPUT_HOTEL);
      priceInput.setAttribute('placeholder', PRICE_INPUT_HOTEL);
      break;
  }
});

resetButton.addEventListener('click', () => {
  adForm.reset();
  setInitialMap();
});

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    await sendData(
      OpenPopupSuccess,
      OpenPopupError,
      new FormData(evt.target),
    );
  });
};


export {address, setUserFormSubmit};
