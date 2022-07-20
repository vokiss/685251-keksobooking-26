/* eslint-disable no-unused-vars */
import './form.js';
import './data.js';
import './formvalid.js';
import './util.js';
import './map.js';
import './api.js';


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
