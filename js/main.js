import './form.js';
import './data.js';
import './formvalid.js';
import './map.js';


const createLoader = (onSuccess, onError) => () => fetch(
  'https://26.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });
const loadAnimals = createLoader(console.log, console.error);

const test1 = loadAnimals();

export {test1};
