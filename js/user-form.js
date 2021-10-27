const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM_NUMBER = 100;

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomNumberInput = document.querySelector('#room_number');
const guestNumberInput = document.querySelector('#capacity');

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

