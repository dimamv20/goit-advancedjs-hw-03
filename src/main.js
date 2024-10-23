// main.js
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.getElementById('search-form');
const searchField = document.getElementById('search-field');
const loadingIndicator = document.createElement('div');
loadingIndicator.textContent = 'Loading...';
loadingIndicator.classList.add('loading-indicator'); 

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const query = searchField.value.trim();
    if (!query) {
        return;
    }


    document.body.appendChild(loadingIndicator);

    try {
        const images = await fetchImages(query);
        renderImages(images);
    } catch (error) {
        console.error(error);
    } finally {

        loadingIndicator.remove();
    }

    searchField.value = ''; 
});
