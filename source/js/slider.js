'use strict';

(function (){
	const slider = document.querySelector('.js-slider');
	const pagination = document.querySelector('.js-slider-pagination');
	const prevElement = document.querySelector('.js-slider-prev');
	const nextElement = document.querySelector('.js-slider-next');

	if (!slider || !pagination || !prevElement || !nextElement) {
		return false;
	}

	new Swiper(slider, {
		pagination: {
			el: pagination,
			type: 'bullets',
			clickable: true,
			bulletClass: 'slider__pagination-bullet',
			bulletActiveClass: 'slider__pagination-bullet--active',
			bulletElement: 'span',
		},

		autoplay: {
			delay: 4000,
		},
	});

	const sliderStaff = document.querySelector('.js-slider-staff');
	const paginationStaff = document.querySelector('.js-slider-pagination-staff');

	if (!sliderStaff || !paginationStaff || !prevElement || !nextElement) {
		return false;
	}

	new Swiper(sliderStaff, {
		pagination: {
			el: paginationStaff,
			type: 'bullets',
			clickable: true,
			bulletClass: 'slider__pagination-bullet--staff',
			bulletActiveClass: 'slider__pagination-bullet--active',
			bulletElement: 'span',
		},

		autoplay: {
			delay: 5000,
		},
	});

	const sliderEmployees = document.querySelector('.js-slider-employees');
	const paginationEmployees = document.querySelector('.js-slider-pagination-employees');

	if (!sliderEmployees || !paginationEmployees || !prevElement || !nextElement) {
		return false;
	}

	new Swiper(sliderEmployees, {
		pagination: {
			el: paginationEmployees,
			type: 'bullets',
			clickable: true,
			bulletClass: 'slider__pagination-bullet',
			bulletActiveClass: 'slider__pagination-bullet--active',
			bulletElement: 'span',
		},

		autoplay: {
			delay: 4000,
		},
	});

})();
