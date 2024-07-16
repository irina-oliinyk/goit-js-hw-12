// Функції для відображення елементів інтерфейсу

// Функції для відображення елементів інтерфейсу

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

 const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
const list = document.querySelector('.gallery');
  
function createMarcap(images) {
  list.innerHTML = '';
  const markup = images
    .map(
      ({ largeImageURL, webformatURL ,tags, likes, views, comments, downloads }) =>
               `<li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" width="320" height=200" class="card-img"/>
        </a>
        <ul class="galery-item-description">
          <li>
            <p class="count-text">Likes</p>
            <p class="count">${likes}</p>
          </li>
          <li>
            <p class="count-text">Views</p>
            <p class="count">${views}</p>
          </li>
          <li>
            <p class="count-text">Comments</p>
            <p class="count">${comments}</p>
          </li>
          <li>
            <p class="count-text">Downloads</p>
            <p class="count">${downloads}</p>
          </li>
        </ul>
      </li>
      `
    )
        .join('');
    list.insertAdjacentHTML('afterbegin', markup);

  lightbox.refresh();
};

export { createMarcap };