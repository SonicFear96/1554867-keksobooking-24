import './state.js';
import {createMap} from './map.js';
import {getData} from './api.js';
import './popup.js';
import { setUserFormSubmit } from './user-form.js';

const SIMILAR_HOTEL_COUNT = 10;

getData((data) => {
  createMap(data.slice(0, SIMILAR_HOTEL_COUNT));
});
setUserFormSubmit();
