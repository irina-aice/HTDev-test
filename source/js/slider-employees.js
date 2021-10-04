'use strict';

(function (){
	const slider = document.querySelector('.js-slider-employees');

	if (!slider) {
		return false;
	}

	const pagination = slider.querySelector('.js-slider-pagination');
	const nextElement = slider.parentElement.querySelector('.js-slider-next');

	new window.Swiper(slider, {
		loop: true,
		pagination: {
			el: pagination,
			type: 'bullets',
			clickable: true,
			bulletClass: 'slider__pagination-bullet',
			bulletActiveClass: 'slider__pagination-bullet--active',
			bulletElement: 'span',
		},

		navigation: {
			nextEl: nextElement,
		},
	});

})();
