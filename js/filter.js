

const getFilterData = (data) => {
  const ANY_VALUE = 'any';
  const LOW_COST = 10000;
  const HIGH_COST = 50000;
  const typeValue = document.querySelector('#housing-type').value;
  const priceValue = document.querySelector('#housing-price').value;
  const roomsValue = document.querySelector('#housing-rooms').value;
  const guestsValue = document.querySelector('#housing-guests').value;

  const selectType = (hotel) => {
    if (typeValue === ANY_VALUE) {
      return true;
    }
    return hotel.offer.type === typeValue;
  };

  const selectPrice = (hotel) => {
    switch(priceValue) {
      case 'low':
        return hotel.offer.price < LOW_COST;
      case 'middle':
        return hotel.offer.price >= LOW_COST && hotel.offer.price <= HIGH_COST;
      case 'high':
        return hotel.offer.price >= HIGH_COST;
      default:
        return true;
    }
  };

  const selectRooms = (hotel) => {
    switch(roomsValue) {
      case '1':
        return 1 <= hotel.offer.rooms;
      case '2':
        return 2 <= hotel.offer.rooms;
      case '3':
        return 3 <= hotel.offer.rooms;
      default:
        return true;
    }
  };

  const selectGuests = (hotel) => {
    switch(guestsValue) {
      case '0':
        return 0 === hotel.offer.guests;
      case '1':
        return 1 <= hotel.offer.guests;
      case '2':
        return 2 <= hotel.offer.guests;
      case '3':
        return 3 <= hotel.offer.guests;
      default:
        return true;
    }
  };

  const selectFeatures = (hotel) => {
    const featuresInput = document.querySelectorAll('input[name="features"]:checked');
    if (!hotel.offer.features) {
      return false;
    }
    return Array.from(featuresInput).every((feature) => hotel.offer.features.includes(feature.value));
  };

  return selectType(data) && selectRooms(data) && selectGuests(data) && selectPrice(data) && selectFeatures(data);
};

export {getFilterData};
