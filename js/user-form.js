const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM_NUMBER = 100;

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomNumberInput = document.querySelector('#room_number');
const guestNumberInput = document.querySelector('#capacity');
const typeAccommodation = document.querySelector('#type')
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

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
  } else if (valuePrice > MAX_TITLE_LENGTH) {
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
  } else {
    guestNumberInput.setCustomValidity('');
  }
  guestNumberInput.reportValidity();
};

roomNumberInput.addEventListener('change', onSelectRoomChange);
guestNumberInput.addEventListener('change', onSelectRoomChange);


/*time in/time out*/

const getSameTimeIn = () => {
  timeIn.value = timeOut.value;
};

const getSameTimeOut = () => {
  timeOut.value = timeIn.value;
};

timeIn.addEventListener('change', getSameTimeOut);
timeOut.addEventListener('change', getSameTimeIn);

/*TYPE */

typeAccommodation.addEventListener('change', () => {
  switch (typeAccommodation.value) {
    case 'flat':
      priceInput.setAttribute('min', 1000);
      priceInput.setAttribute('placeholder', 1000);
      break;
    case 'bungalow':
      priceInput.setAttribute('min', 0);
      priceInput.setAttribute('placeholder', 0);
      break;
    case 'house':
      priceInput.setAttribute('min', 5000);
      priceInput.setAttribute('placeholder', 5000);
      break;
    case 'palace':
      priceInput.setAttribute('min', 10000);
      priceInput.setAttribute('placeholder', 10000);
      break;
    case 'hotel':
      priceInput.setAttribute('min', 3000);
      priceInput.setAttribute('placeholder', 3000);
      break;
  }
});
