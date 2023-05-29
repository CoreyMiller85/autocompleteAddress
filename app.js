import { addresses } from './addresses.js';

const addressInput = document.querySelector('#address-input');
const list = document.querySelector('.list');
const listContent = list.querySelectorAll('li');

let filteredAddress = [];

addressInput.addEventListener('input', (e) => {
  const results = filterAddress(e.target.value, addresses);
  removeListItems();
  addListItems();
});

const filterAddress = (inputVal, addresses) => {
  const results = addresses.filter((address) => address.includes(inputVal));
  filteredAddress = results;
};

const addListItems = () => {
  for (let element of filteredAddress) {
    const newElement = document.createElement('li');
    newElement.textContent = element;
    list.appendChild(newElement);
    newElement.addEventListener('click', (e) => {
      addressInput.value = newElement.textContent;
    });
    newElement.addEventListener('keydown', (e) => {});
  }
};

const removeListItems = () => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};
