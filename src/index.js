import './css/style.css';
import { createCard } from './js/createCard';
import Notiflix from 'notiflix';
import { Axios } from 'axios';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('#input'),
  button: document.querySelector('#button'),
  card: document.querySelector('.gallery'),
};
const API_KEY = '32003673-6678ea5058f0970b487cd30b2';
let items = [];

const render = () => {
  const card = cards.map(createCard);
  refs.card.innerHTML = '';
  refs.card.insertAdjacentHTML('beforeend', card.join(''));
};
const showLoader = () => {
  refs.input.classList.add('show');
};
const hideLoader = () => {
  refs.input.classList.remove('show');
};

const lockForm = () => {
  refs.button.setAttribute('disabled', true);
};
const unlockForm = () => {
  refs.button.removeAttribute('disabled');
};
const onInputSearch = e => {
  const { value } = e.target.element.query;
  e.preventDefault();

  showLoader();
  lockForm();
  fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=searchQuery&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(resp =>
      resp.json().then(({ hits }) => {
        items = hits;
        render();
      })
    )
    .finally(() => {
      hideLoader();
      unlockForm();
    });
};
refs.button.addEventListener('submit', onInputSearch);
