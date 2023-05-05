"use strict";

// Swiper for recommendation section

const swiperRecommendation = new Swiper(".js-recommendation-slider", {
	slidesPerView: 3,
	spaceBetween: 70,
	centeredSlides: true,
	loop: true,
	initialSlide: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//Swiper for hero

const swiperHero = new Swiper(".js-hero-slider", {
	slidesPerView: 1,
	centeredSlides: true,
	initialSlide: 0,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

console.log(swiperHero);
