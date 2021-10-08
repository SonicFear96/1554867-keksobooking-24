import {
  TITLE,
  TYPE,
  CHECKIN,
  DESCRIPTION,
  CHECKOUT,
  FEATURES,
  PHOTOS
} from './data.js';
import { getRandomPositiveInteger } from './utils/get-random-positive-integer.js';
import { getRandomPositiveFloat } from './utils/get-random-positive-float.js';
import { getRandomArrayElement } from './utils/get-random-array-element.js';
import { getAvatar } from './utils/get-avatar.js';
import { getRandomArray } from './utils/get-random-array.js';

const COORDINATIONX = getRandomPositiveFloat(35.65, 35.7, 5);
const COORDINATIONY = getRandomPositiveFloat(139.7, 139.8, 5);

export const createHotel = () => ({
  author: {
    avatar: getAvatar(),
  },
  offer: {
    title: getRandomArrayElement(TITLE),
    address: `${COORDINATIONX} , ${COORDINATIONY}`,
    price: getRandomPositiveInteger(1000, 9000),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomPositiveInteger(1, 10),
    guests: getRandomPositiveInteger(1, 40),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    description: getRandomArrayElement(DESCRIPTION),
    features: getRandomArray(FEATURES),
    photos: getRandomArray(PHOTOS),
  },
  location: {
    lat: COORDINATIONX,
    lng: COORDINATIONY,
  },
});
