// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import icon from './img/error.svg'



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
  per_page: 15,
  maxPage: 0,
  orientationPhoto: 'horizontal',
  typeImage: 'photo',
  safesearch:'true',
};

refs.form.addEventListener('submit', handleSearch);


// ховаємо кнопку при першому завантаженні сторінки
refs.buttonLoadMore.classList.add('visually-hidden');

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
   refs.buttonLoadMore.classList.remove('visually-hidden');
  
   refs.buttonLoadMore.disabled = true;
   refs.spinner.classList.remove('visually-hidden');
  
    // перед запитом показую кнопку та включаю спінер
  try {
      
    const { hits, total } = await getFhotos(params);
        
    params.maxPage = Math.ceil(total / params.per_page);
    // Функція для розмальовки 
    createMarcap(hits);
      
    //перевірка на те, що по-перше, у нас взагалі є результати, і на те, що кількість статей не дорівнює кількості всіх результатів (якщо вони рівні, то у нас не існує наступних сторінок)
    if (hits.length > 0 && hits.length !== total) {
      // розблоковуємо кнопку для натискань
      // refs.loadMoreBtn.disabled = false;
      refs.buttonLoadMore.disabled = false;
      refs.spinner.classList.add('visually-hidden');
      // коли кнопка розблокується і стане доступною для взаємодії - ми повісимо на неї обробник
      // refs.loadMoreBtn.addEventListener("click", handleLoadMore);
      refs.buttonLoadMore.addEventListener("click", handleLoadMore);
    } else {
      // ховаємо кнопку якщо немає результатів по запиту, або не існує наступної сторінки
      refs.buttonLoadMore.classList.add('visually-hidden');
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
    }
    } catch(err) {
    console.log(err);
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
      message: 'Схоже виникла помилка!',
      icon: 'icon-error.svg',
      iconUrl: icon
        });
 }finally {
    form.reset();
  }

}



async function handleLoadMore() {
  params.page += 1;
  
  refs.buttonLoadMore.disabled = true;
  refs.spinner.classList.remove('visually-hidden');
  try {
    // отримали відповідь від серверу з новинами
    const { hits } = await getFhotos(params);

    // малюємо розмітку
    createMarcap(hits);
  } catch (err) {
    console.log(err);
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
  } finally {
    // розблоковуємо кнопку для натискань
    
    refs.buttonLoadMore.disabled = false;
    refs.spinner.classList.add('visually-hidden');

    // якщо поточна сторінка рівна максимальні сторінці, то наступних сторінок не існує
    if (params.page === params.maxPage) {
      refs.buttonLoadMore.classList.add('visually-hidden');
      refs.buttonLoadMore.removeEventListener("click", handleLoadMore);
    }
  }
}




