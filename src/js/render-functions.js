
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

export const renderImages = (images) => {
    const listPhotos = document.querySelector('.list-photos');
    listPhotos.innerHTML = ''; 

    if (images.length === 0) {
        showNoResultsMessage();
        return;
    }

    const imageElements = images.map(image => `
        <li>
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            </a>
            <div>
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
        </li>
    `).join('');

    listPhotos.insertAdjacentHTML('beforeend', imageElements);

    const lightbox = new SimpleLightbox('.list-photos a');
    lightbox.refresh();
};

export const showNoResultsMessage = () => {
    iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
};
