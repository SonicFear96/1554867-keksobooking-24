import { createHotels } from './createHotel.js'

const mapCanvas = document.querySelector('#map-canvas');
const similarHotelTemplate = document.querySelector('#card').content;
const similarHotels = createHotels();
console.log(similarHotels)

similarHotels.forEach((hotel) => {
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
      hotel.offer.features.forEach((feature) => {
      const featuresItem = document.createElement('li');
      featuresItem.className = `popup__feature popup__feature--${feature}`;
      featuresItem.textContent = feature;
      features.append(featuresItem);
    });
      hotelElement.querySelector('.popup__description').textContent = hotel.offer.description;
      const photos = hotelElement.querySelector('.popup__photos');
      photos.innerHTML = '';
      hotel.offer.photos.forEach((photo) => {
      const photosItem = document.createElement('img');
      photosItem.className = 'popup__photo';
      photosItem.src = photo;
      photos.prepend(photosItem);
  });
  hotelElement.querySelector('.popup__avatar').src = hotel.author.avatar;
  mapCanvas.append(hotelElement);
});

export {similarHotelTemplate}
