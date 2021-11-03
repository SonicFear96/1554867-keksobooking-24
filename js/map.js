import { useActiveState } from './state.js';
import { getRandomPositiveFloat } from './utils/get-random-positive-float.js';

const TOKYO_LAT = 35.4200;
const TOKYO_LNG = 139.2530;

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

address.setAttribute('placeholder', `${TOKYO_LAT}, ${TOKYO_LNG}`);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  // console.log(evt.target.getLatLng());
  address.setAttribute('placeholder', `${parseFloat((evt.target.getLatLng().lat).toFixed(4))}, ${parseFloat((evt.target.getLatLng().lng)).toFixed(4)}`);
});
