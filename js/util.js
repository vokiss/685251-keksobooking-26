const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];
const getRandomElements = (array, length) =>
  array.slice(getRandomPositiveInteger(0, length));
const getShuffledRandomArray = (array) => {
  let newArray = [];
  const x = Math.floor(Math.random() * (array.length));
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  newArray = array.slice(x);
  return newArray;
};

const setData = (element, valueToCheck, elementProperty = 'textContent', content) => {
  if (valueToCheck === undefined || valueToCheck.includes(undefined)) {
    element.classList.add('hidden');
  } else {
    element[elementProperty] = content ? content : valueToCheck;
  }
};

const changeState = (state) => {
  const adForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  if (state === 0) {
    adForm.classList.add('ad-form--disabled');
    adForm.setAttribute('disabled', 'disabled');
    mapFilters.classList.add('map__filters--disabled');
    mapFilters.setAttribute('disabled', 'disabled');
  }  else if (state === 1) {
    adForm.classList.remove('ad-form--disabled');
    adForm.removeAttribute('disabled');
    mapFilters.classList.remove('map__filters--disabled');
    mapFilters.removeAttribute('disabled');
  }};

export {changeState, setData, getRandomArrayElement,
  getRandomPositiveInteger, getRandomPositiveFloat,
  getRandomElements, getShuffledRandomArray};
