import * as pixabay from './js/pixabay-api';
import * as galleryToRender from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.form-input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    galleryToRender.showErrorMessage('Please enter a search query');
    return;
  }

  const url = pixabay.buildApiUrl(searchQuery);

  pixabay.fetchPhotos(url)
      .then(data => {
          galleryToRender.renderPhotos(data.hits);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
    
    form.reset();
}

export {
	form,
	searchInput,
}