import {createBookingAd} from './data.js';
import {setData} from './util.js';

const addressField = document.querySelector('#address');

const similarCards = Array.from({length: 10}, createBookingAd);
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
// const mapCanvas = document.querySelector('#map-canvas');

const spawnCard = function (data) {
  const cardElement = cardTemplate.cloneNode(true);

  const popupTitle = cardElement.querySelector('.popup__title');
  const popupTextAdress = cardElement.querySelector('.popup__text--address');
  const popupTextPrice = cardElement.querySelector('.popup__text--price');
  const popupType = cardElement.querySelector('.popup__type');
  const popupText = cardElement.querySelector('.popup__text--capacity');
  const popupTextTime = cardElement.querySelector('.popup__text--time');
  const popupDescription = cardElement.querySelector('.popup__description');
  const popupPhoto = cardElement.querySelector('.popup__photo');
  const popupAvatar = cardElement.querySelector('.popup__avatar');

  const popupFeatures = cardElement.querySelector('.popup__features')
    .querySelectorAll('.popup__feature');
  const modifiers = data.offer.features.map((feature) => `popup__feature--${  feature}`);
  popupFeatures.forEach((featureListItem) => {
    const modifier = featureListItem.classList[1];
    if (!modifiers.includes(modifier)) {
      featureListItem.remove();
    }
  });
  setData(popupTitle, data.offer.title, 'textContent');
  setData(popupTextAdress, data.offer.address, 'textContent');
  setData(popupType, data.offer.type, 'textContent');
  setData(popupTextPrice, `${data.offer.price  }₽/ночь`, 'textContent');
  setData(popupDescription, data.offer.description, 'textContent');
  setData(popupAvatar, data.author.avatar, 'src');
  setData(popupPhoto, data.offer.photos[0], 'src');
  setData(popupText, [data.offer.rooms, data.offer.guests], 'textContent', `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`);
  setData(popupTextTime,[data.offer.checkin, data.offer.checkout], 'textContent', `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`);
  return cardElement;
};
similarCards.forEach((element) => spawnCard(element));
// LEAFLET
const map = L.map('map-canvas').setView(
  {
    lat: 35.652832,
    lng: 139.839478,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const bookingPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const marker = L.marker(
  {
    lat: 35.652832,
    lng: 139.839478,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
marker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  addressField.value = `${latLng.lat.toFixed(5)  } ${  latLng.lng.toFixed(5)}`;
});

marker.addTo(map);

const createAdds = (element) => {
  const addMarker = L.marker(
    {
      lat: element.location.lat,
      lng: element.location.lng
    },
    {
      icon:bookingPinIcon,
    }
  );
  addMarker
    .addTo(map)
    .bindPopup(spawnCard(element));
};

similarCards.forEach((element) => {
  createAdds(element);
});
