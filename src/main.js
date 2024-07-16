// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import icon from './img/error.svg'

import axios from 'axios';

import { getFhotos } from "./js/pixabay-api.js";

import { createMarcap } from "./js/render-function.js";

const refs = {
    form: document.querySelector('.form'),
    list: document.querySelector('.gallery'),
    buttonLoadMore: document.querySelector('[data-action="load-more"]'),
    spinner: document.querySelector('.loader')
};


const params = {
  q: "",
  page: 1,
  pageSize: 15,
    maxPage: 0,
    orientationPhoto: 'horizontal',
    typeImage: 'photo',
   safesearch:'true',
};

refs.form.addEventListener('submit', handleSearch);


// ховаємо кнопку при першому завантаженні сторінки
hide(refs.buttonLoadMore);

console.log(refs.buttonLoadMore);
async function handleSearch(event) {
    event.preventDefault(); // step 1.1

    // step 1.2.
    refs.list.innerHTML = "";
    params.page = 1;

    const form = event.currentTarget;
    params.q = form.elements.query.value.trim(); // step 1.3.

    // 1.4.
    if (!params.q) {
        iziToast.show({
      backgroundColor: '#ef4040',
      close: false,
      closeOnClick: true,
      progressBarColor: 'white',
      title: 'Error',
      titleColor: 'white',
      position: 'topRight',
      messageColor: 'white',
      messageSize: '16px',
      message: 'Sorry, there are no images matching your search query. Please try again!',
      icon: 'icon-error.svg',
      iconUrl: icon
        });
        form.reset();
        return;
    }
    console.log(params.q);
    
    // перед запитом показую кнопку та включаю спінер
    try {
        const photos = await getFhotos(params);
        console.log(photos);
    } catch(err) {
        console.log(err);
 }

}

// console.log(getFhotos(params));

function hide(button) {
  button.classList.add('is-hidden');
}

function show(button) {
  button.classList.remove('is-hidden');
}

function disable(button, spinner) {
  button.disabled = true;
  spinner.classList.remove('is-hidden');
}

function enable(button, spinner) {
  button.disabled = false;
  spinner.classList.add('is-hidden');
}