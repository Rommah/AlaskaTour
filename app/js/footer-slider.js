const footerVideoItems = document.querySelectorAll('.video__item'),
	footerVideoItemsLength = footerVideoItems.length - 1,
	nextFooterSlider = document.querySelector('.info-slider__arrow--right'),
	prevFooterSlider = document.querySelector('.info-slider__arrow--left');

const footerSliderClasses = ['showRightButton', 'hideRightButton', 'showLeftButton', 'hideLeftButton'];

let currentFooterSlide = 0;
footerVideoItems[currentFooterSlide].classList.add('showRightButton');

nextFooterSlider.addEventListener('click', function(e) {
	deleteAllClassesFromAllSlides();
	footerVideoItems[currentFooterSlide].classList.add('hideRightButton');
	currentFooterSlide++;
	if (currentFooterSlide > footerVideoItemsLength) currentFooterSlide = 0;
	footerVideoItems[currentFooterSlide].classList.add('showRightButton');
});

prevFooterSlider.addEventListener('click', function(e) {
	deleteAllClassesFromAllSlides();
	footerVideoItems[currentFooterSlide].classList.add('hideLeftButton');
	currentFooterSlide--;
	if (currentFooterSlide < 0) currentFooterSlide = footerVideoItemsLength;
	footerVideoItems[currentFooterSlide].classList.add('showLeftButton');
});


function deleteAllClassesFromAllSlides() {
	footerVideoItems.forEach(function(slide){
		footerSliderClasses.forEach(function(item){
			slide.classList.remove(item);
		})
	})
}



