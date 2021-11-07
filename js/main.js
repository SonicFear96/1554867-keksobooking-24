import './state.js';
import './user-form.js';
import {createMap} from './map.js';
import './map.js';
// import { setUserFormSubmit } from './user-form.js'
// import './user-modal.js';

const SIMILAR_HOTEL_COUNT = 10;

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    createMap(data.slice(0, SIMILAR_HOTEL_COUNT));
  });
