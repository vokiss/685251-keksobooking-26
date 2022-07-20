import {createAdds} from './map.js';
const MAX_BOOKING_ADDS = 10;

const BASE_URL = 'https://26.javascript.pages.academy/keksobooking';

const Error = {
  GET_DATA: 'Не удалось загрузить данные',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};
const ALERT_SHOW_TIME = 5000;

const getFetchError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);

};
const getData = (onError) => {
  fetch(`${BASE_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      onError(Error.GET_DATA);
    })
    .then((data) => {
      data.slice(0, MAX_BOOKING_ADDS).forEach((element) => createAdds(element));
    })
    .catch(() => {
      onError(Error.GET_DATA);
    });
};

getData(getFetchError);

const sendData = (onSuccess, onError, body) => {
  fetch(
    BASE_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError(Error.GET_DATA);
      }
    })
    .catch(() => {
      onError(Error.GET_DATA);
    });
};

export { getData, sendData };
