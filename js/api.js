const getData = async (onSuccess, onError) => {
  try {
    const response = await fetch(
      'https://24.javascript.pages.academy/keksobooking/data44',
    );
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError(error);
  }
};

const sendData = async (onSuccess, onError, body) => {
  try {
    const response = await fetch(
      'https://24.javascript.pages.academy/keksobooking/',
      {
        method: 'POST',
        body,
      },
    );
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError(error);
    document.querySelector('.error__status').innerHTML = `${error.status}`;
  }
};

export { getData, sendData };
