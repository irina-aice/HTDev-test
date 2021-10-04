'use strict';

(function (){
	const slider = document.querySelector('.js-slider-staff');

	if (!slider) {
		return false;
	}

	const pagination = slider.querySelector('.js-slider-pagination');
	const nextElement = slider.querySelector('.js-slider-next');

	new window.Swiper(slider, {
		loop: true,
		pagination: {
			el: pagination,
			type: 'bullets',
			clickable: true,
			bulletClass: 'slider__pagination-bullet slider__pagination-bullet--staff',
			bulletActiveClass: 'slider__pagination-bullet--active',
			bulletElement: 'span',
		},

		navigation: {
			nextEl: nextElement,
		},
	});
})();
