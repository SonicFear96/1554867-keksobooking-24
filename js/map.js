import { useActiveState } from './state.js';
import { createHotels } from './createHotel.js';
import {createCustomPopup} from './popup.js'
// import {similarHotels, similarHotelTemplate} from './popup.js'

const TOKYO_LAT = 35.6895;
const TOKYO_LNG = 139.6920;

const map = L.map('map-canvas').on('load', () => {
  useActiveState()
})
  .setView({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);


/*massive hotels */
const similarHotels = createHotels();

similarHotels.forEach((hotel) => {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: hotel.location.lat,
      lng: hotel.location.lng,
    },
    {
      icon,
    },
  );

  marker.addTo(map).bindPopup(createCustomPopup(hotel));
});

/*Placeholder */

address.setAttribute('placeholder', `${TOKYO_LAT}, ${TOKYO_LNG}`);

mainPinMarker.on('moveend', (evt) => {
  address.setAttribute('placeholder', `${parseFloat((evt.target.getLatLng().lat).toFixed(4))}, ${parseFloat((evt.target.getLatLng().lng)).toFixed(4)}`);
});
