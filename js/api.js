import {createSuccessPopup, createErrorPopup} from './popup.js'



const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    });
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        createSuccessPopup();
      } else {
        createErrorPopup();
      }
    })
    .catch(() => {
      createErrorPopup();
    });
};

export {getData, sendData};
