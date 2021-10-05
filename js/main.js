// math.floor - округление

// function getRandomNumber(min, max) {
//   if (max > min && min >= 0) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   } else {
//     return false;
//   }
// }

// function getRandomNumberCoordination(min, max, numberSymbol) {
//   if (max > min && min >= 0 && numberSymbol >= 0) {
//     return (Math.random() * (max - min) + min).toFixed(numberSymbol);
//   } else {
//     return false;
//   }
// }

function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const TITLE = [
  "у моря",
  "не у моря",
  "у кекса",
  "не у кекса",
  "дом у дороги",
  "дом не у дороги",
  "дом который построил кекс",
  "дом,который не строил кекс",
];

const TYPE = ["palace", "flat", "house", "bungalow", "hotel"];
const CHECKIN = ["12:00", "13:00", "14:00"];
const CHECKOUT = ["12:00", "13:00", "14:00"];
const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];
const DESCRIPTION = [
  "чудесное место",
  "я бы жил",
  "я живу",
  "посоветовал бы всем друзьям",
  "не жил,но хвалю",
];

const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

const COORDINATIONX = getRandomPositiveFloat(35.65, 35.7, 5);
const COORDINATIONY = getRandomPositiveFloat(139.7, 139.8, 5);

// Аватар (но числа повторяются...)
function getAvatar() {
  const avatarIndex = getRandomPositiveInteger(1, 10);
  return `img/avatars/user${avatarIndex}.png`;
}

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

// массив случайной длины без повторяющихся строк

const getRandomArray = (elements) =>
  elements
    .sort(() => Math.random() - Math.random())
    .slice(0, getRandomPositiveInteger(0, elements.length - 1));

const createHotel = () => {
  return {
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
  };
};

const similarHotel = Array.from({ length: 10 }, createHotel);

console.log(similarHotel);
