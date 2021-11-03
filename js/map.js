import { useNonActiveState, useActiveState } from './state.js';

const TOKYO_LAT = 35.41220;
const TOKYO_LNG = 139.41300;

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

