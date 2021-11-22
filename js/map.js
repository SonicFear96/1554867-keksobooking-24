import {  useActiveStateForm, useActiveStateMap } from './use-state.js';
import { createCustomPopup } from './popup.js';
import { address } from './user-form.js';
import { getFilterData } from './filter.js';
import { debounce } from './utils/debounce.js';

const SIMILAR_HOTEL_COUNT = 10;
const TOKYO_LAT = 35.6895;
const TOKYO_LNG = 139.692;
const mapFilters = document.querySelector('.map__filters');
const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const ICON_SIZE = [40, 40];
const ICON_ANCHOR = [20, 40];

const map = L.map('map-canvas').on('load', useActiveStateForm).setView(
  {
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  },
  10,
);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCHOR,
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

address.setAttribute('value', `${TOKYO_LAT}, ${TOKYO_LNG}`);

mainPinMarker.on('moveend', (evt) => {
  address.setAttribute(
    'value',
    `${parseFloat(evt.target.getLatLng().lat.toFixed(4))}, ${parseFloat(
      evt.target.getLatLng().lng,
    ).toFixed(4)}`,
  );
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (hotel) => {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: ICON_SIZE,
    iconAnchor: ICON_ANCHOR,
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
  marker.addTo(markerGroup).bindPopup(createCustomPopup(hotel));
};

const createMarkerMap = (data) => {
  data.slice(0, SIMILAR_HOTEL_COUNT).forEach((hotel) => {
    createMarker(hotel);
    useActiveStateMap();
  });

  /*FILTER */
  mapFilters.addEventListener('change', () => {
    markerGroup.clearLayers();
    data
      .filter(getFilterData)
      .slice(0, SIMILAR_HOTEL_COUNT)
      .forEach((hotel) => {
        debounce(createMarker(hotel));
      });
    mapFilters.addEventListener(
      'reset',
      () => {
        markerGroup.clearLayers();
        createMarkerMap(data);
      },
      { once: true },
    );
  });
};

const setInitialMap = () => {
  mainPinMarker.setLatLng({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  });
  map.setView(
    {
      lat: TOKYO_LAT,
      lng: TOKYO_LNG,
    },
    10,
  );
  mapFilters.reset();
};

export { createMarkerMap, setInitialMap, mapFilters };
