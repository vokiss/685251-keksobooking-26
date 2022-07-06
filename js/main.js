import './form.js';
import './data.js';
import './pagestate.js';
import './formvalid.js';

const sliderElement = document.querySelector('#slider');
const valueElement = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  valueElement.placeholder = valueElement.value;
});
