// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const link = document.querySelector('.gallery');

const itemOfImgString = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" 
            />
          </a>
        </li>
    `
  )
  .join('');

link.innerHTML = itemOfImgString;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
