

const getFilterData = (hotel) => {

  const LOW_COST = 10000;
  const HIGH_COST = 50000;
  const TypeValue = document.querySelector('#housing-type').value;
  const PriceValue = document.querySelector('#housing-price').value;
  const RoomsValue = document.querySelector('#housing-rooms').value;
  const GuestsValue = document.querySelector('#housing-guests').value;

  // switch (TypeValue) {
  //   case 'flat':
  //   hotel.offer.type === 'flat';
  //   break;
  //   case 'bungalow':
  //   hotel.offer.type === 'bungalow';
  //   break;
  //   case 'house':
  //   hotel.offer.type === 'house';
  //   break;
  //   case 'palace':
  //   hotel.offer.type === 'palace';
  //   break;
  //   case 'hotel':
  //   hotel.offer.type === 'hotel';
  //   break;
  //   case 'any':
  //   hotel.offer.type;
  //   break;
  // }

  // switch (PriceValue) {
  //   case 'low':
  //    return hotel.offer.price <= LOW_COST;
  //   case 'middle':
  //   return LOW_COST <= hotel.offer.price <= HIGH_COST;
  //   case 'high':
  //   return HIGH_COST <= hotel.offer.price;
  //   case 'any':
  //   return hotel.offer.price;
  // }
  // switch (RoomsValue) {
  //   case '1':
  //   return 1 <= hotel.offer.rooms;
  //   case '2':
  //   return 2 <= hotel.offer.rooms;
  //   case '3':
  //   return 3 <= hotel.offer.rooms;
  //   case 'any':
  //   return hotel.offer.rooms;
  // }

  // switch (GuestsValue) {
  //   case '1':
  //   return 1 <= hotel.offer.guests
  //   case '2':
  //   return 2 <= hotel.offer.guests;
  //   case '0':
  //   return 0 === hotel.offer.guests;
  //   case 'any':
  //   return hotel.offer.guests;
  // }

  // return selectTypeValue && selectPriceValue && selectPriceValue && selectGuestsValue
//   const RERENDER_DELAY = 500;
// const ELEMENTS_QUANTITY = 10;
// const ANY_RANGE = 'any';
// const priceRange = {
//   low: {min: 0, max: 10000},
//   middle: {min: 10000, max: 50000},
//   high: {min: 50000, max: 1000000},
// };

// const filterSelect = document.querySelector('.map__filters');
// const housingSelect = filterSelect.querySelector('#housing-type');
// const priceSelect = filterSelect.querySelector('#housing-price');
// const roomsSelect = filterSelect.querySelector('#housing-rooms');
// const guestsSelect = filterSelect.querySelector('#housing-guests');



// const checkType = (element) => {
//   if (housingSelect.value === ANY_RANGE) {
//     return true;
//   }
//   return element.offer.type === housingSelect.value;
// };

// const checkNumberRooms = (element) => {
//   if (roomsSelect.value === ANY_RANGE) {
//     return true;
//   }
//   return element.offer.rooms === +roomsSelect.value;
// };

// const checkPrice = (element) => {
//   if (priceSelect.value === ANY_RANGE) {
//     return true;
//   }
//   return element.offer.price >= priceRange[priceSelect.value].min &&  element.offer.price <= priceRange[priceSelect.value].max;
// };

// const checkGuests = (element) => {
//   if (guestsSelect.value === ANY_RANGE) {
//     return true;
//   }
//   return element.offer.guests === +guestsSelect.value;
// };

// return checkType(hotel) && checkNumberRooms(hotel) && checkGuests(hotel) && checkPrice(hotel)
}




export {getFilterData};
