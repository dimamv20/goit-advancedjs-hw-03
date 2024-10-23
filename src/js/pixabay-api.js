const API_KEY = '46669299-ebb68efeed7427af4171916f3';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query) => {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error fetching images');
    }
    
    const data = await response.json();
    return data.hits;
};
