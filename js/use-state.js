const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const adFormFields = Array.from(adForm.querySelectorAll('fieldset'));
const mapFiltersFields = Array.from(mapFilters.children);

const useNonActiveState = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  adFormFields.forEach((item) => {
    item.disabled = true;
  });
  mapFiltersFields.forEach((item) => {
    item.disabled = true;
  });
};

const useActiveStateMap = () => {
  mapFilters.classList.remove('map__filters--disabled');
  adFormFields.forEach((item) => {
    item.disabled = false;
  });
  mapFiltersFields.forEach((item) => {
    item.disabled = false;
  });
};

const useActiveStateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFields.forEach((item) => {
    item.disabled = false;
  });
};

useNonActiveState();

export { useNonActiveState, useActiveStateMap, useActiveStateForm, adForm };
