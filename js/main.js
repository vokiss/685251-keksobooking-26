/* eslint-disable no-unused-vars */
import './form.js';
import './data.js';
import './formvalid.js';
import {getFetchError} from './util.js';
import {createAdds} from './map.js';
import {getData} from './api.js';

const MAX_BOOKING_ADDS = 10;
getData(createAdds, getFetchError, MAX_BOOKING_ADDS);


const getErrorMessage = () => {
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const errorPopup = errorTemplate.cloneNode(true);
  const bodyDocument = document.querySelector('body');
  bodyDocument.appendChild(errorPopup);
};


const getSuccessMessage = () => {
  const successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const successPopup = successTemplate.cloneNode(true);
  document.body.appendChild(successPopup);
};
