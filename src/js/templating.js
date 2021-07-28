import feedback from '../templates/feedback.hbs';
import list from '../list.json';
const listRef = document.querySelector('.splide__list');
const markup = feedback(list);
listRef.insertAdjacentHTML('beforeend', markup);
