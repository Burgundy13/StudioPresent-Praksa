"use strict";

// Swiper for recommendation section

const swiperRecommendation = new Swiper(".js-recommendation-slider", {
	slidesPerView: 3,
	spaceBetween: 70,
	centeredSlides: true,
	initialSlide: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//Swiper for hero

const swiperHero = new Swiper(".js-hero-slider", {
	slidesPerView: 1,
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

// Dark Light Theme

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-toggle-right";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
	document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme)
		? "bx-toggle-left"
		: "bx-toggle-right";

if (selectedTheme) {
	document.body.classList[selectedTheme === "light" ? "add" : "remove"](
		lightTheme
	);
	themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
		iconTheme
	);
}

themeButton.addEventListener("click", () => {
	document.body.classList.toggle(lightTheme);
	themeButton.classList.toggle(iconTheme);

	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
