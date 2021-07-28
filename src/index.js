import './sass/main.scss';
import '/js/templating';

import Splide from '@splidejs/splide';
new Splide('.splide', {
  type: 'slide',
  perPage: 1,
  padding: {
    right: '5rem',
    left: '5rem',
  },
  pagination: false,
  autoplay: true,
  pauseOnFocus: false,
}).mount();
