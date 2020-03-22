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
// STICKY HEADER start
window.onscroll = function() {myFunction()};
const header = document.getElementById("header");
const sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// STICKY HEADER end