import {useClosePopupError, useClosePopupSuccess} from './user-modal.js';

const createCustomPopup = (hotel) => {
  const similarHotelTemplate = document.querySelector('#card').content;
  const hotelElement = similarHotelTemplate.cloneNode(true);
  hotelElement.querySelector('.popup__title').textContent = hotel.offer.title;
  hotelElement.querySelector('.popup__text--address').textContent = hotel.offer.address;
  hotelElement.querySelector('.popup__text--price').textContent =  `${hotel.offer.price} ₽/ночь`;
  const type = hotelElement.querySelector('.popup__type');
  switch (hotel.offer.type) {
    case 'flat':
      type.textContent = 'Квартира';
      break;
    case 'bungalow':
      type.textContent = 'Бунгало';
      break;
    case 'house':
      type.textContent = 'Дом';
      break;
    case 'palace':
      type.textContent = 'Дворец';
      break;
    case 'hotel':
      type.textContent = 'Отель';
      break;
    default:
      break;
  }
  hotelElement.querySelector('.popup__text--capacity').textContent =  `${hotel.offer.rooms} комнат(ы) для ${hotel.offer.guests} гостей`;
  hotelElement.querySelector('.popup__text--time').textContent =  `Заезд после ${hotel.offer.checkin}, выезд до ${hotel.offer.checkout}`;
  const features = hotelElement.querySelector('.popup__features');
  features.innerHTML = '';
  if (hotel.offer.features === undefined) {
    features.remove();
  }
  else {
    hotel.offer.features.forEach((feature) => {
      const featuresItem = document.createElement('li');
      featuresItem.className = `popup__feature popup__feature--${feature}`;
      features.append(featuresItem);
    },
    );
  }
  hotelElement.querySelector('.popup__description').textContent = hotel.offer.description;
  const photos = hotelElement.querySelector('.popup__photos');
  photos.innerHTML = '';
  if (hotel.offer.photos === undefined) {
    photos.remove();
  }
  else {hotel.offer.photos.forEach((photo) => {
    const photosItem = document.createElement('img');
    photosItem.className = 'popup__photo';
    photosItem.src = photo;
    photosItem.width = '45';
    photosItem.height = '40';
    photos.append(photosItem);
  });
  }
  hotelElement.querySelector('.popup__avatar').src = hotel.author.avatar;

  const hotelElementContainer = document.createElement('div');
  hotelElementContainer.append(hotelElement);
  return hotelElementContainer;
};

/*POPUP AND EVENTS */
// const userPopupError = document.querySelector('.error');
// const userPopupSuccess = document.querySelector('.success');
const footer = document.querySelector('footer');

const createSuccessPopup = () => {
  footer.insertAdjacentHTML('afterend', `<div class="success">
  <p class="success__message">Ваше объявление<br />успешно размещено!</p>
</div>`);
  useClosePopupSuccess();
};

const createErrorPopup = () => {
  footer.insertAdjacentHTML('afterend', `<div class="error">
  <p class="error__message">Ошибка размещения объявления</p>
  <button type="button" class="error__button">Попробовать снова</button>
</div>`);
  useClosePopupError();
};

export {createCustomPopup, createSuccessPopup, createErrorPopup};
