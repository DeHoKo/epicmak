// SWIPER start
const swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// SWIPER end
// SMOOTH SCROLLING start
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});
// SMOOTH SCROLLING end