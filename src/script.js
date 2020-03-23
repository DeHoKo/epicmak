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
    nextEl: '#button1-next',
    prevEl: '#button1-prev',
  },
});
const swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '#button2-next',
    prevEl: '#button2-prev',
  },
});
const swiper3 = new Swiper('.swiper-container3', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '#button3-next',
    prevEl: '#button3-prev',
  },
});
const swiper4 = new Swiper('.swiper-container4', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '#button4-next',
    prevEl: '#button4-prev',
  },
});
const swiper5 = new Swiper('.swiper-container5', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '#button5-next',
    prevEl: '#button5-prev',
  },
});
const swiper6 = new Swiper('.swiper-container6', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '#button6-next',
    prevEl: '#button6-prev',
  },
});
const swiper7 = new Swiper('.swiper-container7', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '#button7-next',
    prevEl: '#button7-prev',
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