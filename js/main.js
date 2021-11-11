import './state.js';
import {createMap} from './map.js';
import {getData} from './api.js';
import './popup.js';
import { setUserFormSubmit } from './user-form.js';

getData((data) => {
  console.log(data)
  createMap(data);
});


setUserFormSubmit();
