import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function initSwiper() {
  const swiperEl = document.querySelector('[data-swiper-atm]');

  if (!swiperEl) {
    console.warn('Swiper container not found!');
    return;
  }
  const swiper = new Swiper(swiperEl, {
    direction: 'horizontal',
    loop: true,
    modules: [Navigation],

    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
  });
}
