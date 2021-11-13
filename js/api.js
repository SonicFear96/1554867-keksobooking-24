const getData = async (onSuccess, onError) => {
  try {
    const response = await fetch(
      "https://24.javascript.pages.academy/keksobooking/data"
    );
    const data = await response.json();
    if (!response.ok) {
      throw response;
    }
    onSuccess(data);
  } catch (error) {
    onError(error);
  }
};

const sendData = async (onSuccess, onError, body) => {
  try {
    const response = await fetch(
      "https://24.javascript.pages.academy/keksobooking/",
      {
        method: "POST",
        body,
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw response;
    }
    onSuccess(data);
  } catch (error) {
    onError(error);
    document.querySelector(".error__status").innerHTML = `${error.status}`;
  }
};

export { getData, sendData };
