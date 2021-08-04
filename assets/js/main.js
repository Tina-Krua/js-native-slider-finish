/* eslint-disable no-unused-vars */

import Carousel from './carousel.js';
import SwipeCarousel from './swipe-carousel.js';

let carousel = new SwipeCarousel({
  containerID: '#carousel',
  interval: 2000
  // isPlaying: false
});

carousel.init();