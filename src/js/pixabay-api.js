import { renderPhotos, loader, gallery } from './render-functions';

function buildApiUrl(searchQuery) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '42444486-bc4896f356324bce186cf1418';

  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return `${BASE_URL}${END_POINT}?${params}`;
}

function fetchPhotos(url) {
    loader.style.display = 'block';
    gallery.innerHTML = '';

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      loader.style.display = 'none';
      return response.json();
    });
}

export {
	buildApiUrl,
	fetchPhotos,
}