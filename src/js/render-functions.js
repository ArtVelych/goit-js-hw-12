import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let galleryLightbox;

function initializeLightbox() {
  galleryLightbox = new SimpleLightbox('.image-link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

initializeLightbox();

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

function renderPhotos(photos) {
  gallery.innerHTML = '';

  if (photos.length === 0) {
    showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
    return;
  }

  photos.forEach(photo => {
    const photoElement = createPhotoMarkup(photo);
    gallery.insertAdjacentHTML('beforeend', photoElement);
  });

  refreshLightbox();
}

function createPhotoMarkup(photo) {
  const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = photo;

  return `<li class="photo">
    <div class="photo-card">
      <a class="image-link" data-lightbox="image" href="${largeImageURL}">
        <img class="gallery-image" data-source="${largeImageURL}"  src="${webformatURL}" alt="${tags}">
      </a>
    </div>
    <div class="description">
      <p class="description-item"> Likes ${likes}</p>
      <p class="description-item"> Views ${views}</p>
      <p class="description-item"> Comments ${comments}</p>
      <p class="description-item"> Downloads ${downloads}</p>
    </div>
  </li>`;
}

function refreshLightbox() {
  galleryLightbox.refresh();
}

function showErrorMessage(message) {
  iziToast.show({
    message: message,
    backgroundColor: 'red',
    messageColor: 'white',
    messageSize: '25',
  });
}

export {
	galleryLightbox,
	loader,
	gallery,
    renderPhotos,
    showErrorMessage,
}

