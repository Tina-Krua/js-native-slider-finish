/* eslint-disable no-underscore-dangle */

import Carousel from './carousel.js';

class SwipeCarousel extends Carousel {

  /*
   * в данном случае переопределение конструктора не требуется
   *
   * constructor(...args) {
   *   super(...args);
   *   В ES6 ключевое слово extends позволяет классу-потомку
   *   наследовать от родительского класса.
   *   Важно отметить, что конструктор класса-потомка
   *   должен вызывать super().
   * }
   */

  _initListeners() {
    super._initListeners(); // в классе-потомке можно вызвать метод родительского класса с помощью super.имяМетодаРодителя().
    this.container.addEventListener('touchstart', this._swipeStart.bind(this));
    this.container.addEventListener('touchend', this._swipeEnd.bind(this));
  }

  /* private, _swipeStart function */
  _swipeStart(e) {
    this.swipeStartX = e.changedTouches[0].pageX;
  }

  /* private, _swipeEnd function */
  _swipeEnd(e) {
    this.swipeEndX = e.changedTouches[0].pageX;
    this.swipeStartX - this.swipeEndX > 100 && this.next();
    this.swipeStartX - this.swipeEndX < -100 && this.prev();
  }
}

export default SwipeCarousel;