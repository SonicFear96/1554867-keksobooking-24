import './use-state.js';
import { createMarkerMap } from './map.js';
import './map.js';
import { getData } from './api.js';
import './popup.js';
import { setUserFormSubmit } from './user-form.js';
import { showAlert } from './utils/util.js';
import './user-modal.js';

getData(
  createMarkerMap,
  () => {
    showAlert('Не удалось загрузить карту. Попробуйте ещё раз');
  },
);

setUserFormSubmit();
