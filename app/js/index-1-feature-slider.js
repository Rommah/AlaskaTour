const slides = document.querySelectorAll('.advice-slider__item'),
	slidesLength = slides.length - 1,
	left = document.querySelector('.advice-slider__arrow--left'),
	right = document.querySelector('.advice-slider__arrow--right'),
	toggles = document.querySelectorAll('.features-advice__toggle');

let currentSlide = 0;

slides[currentSlide].classList.add('bringFromRightSide');
toggles[currentSlide].classList.add('features-advice__toggle--current');

left.addEventListener('click', showPreviousSlide);
right.addEventListener('click', showNextSlide);

let sliderClasses = ['hideSlideToLeft', 'bringFromRightSide', 'hideSlideToRight', 'bringFromLeftSide']
let sliderToggleTime = setInterval(sliderCarusel, 2000);

toggles.forEach(function(key, index){
	key.addEventListener('click', ()=>{
		NextSlideByDot(index);
		temporaryPauseSlider(3000);
	})
})

function showPreviousSlide(){
	temporaryPauseSlider(3000);
	removeAllClasses(slides, sliderClasses);
	slides[currentSlide].classList.add('hideSlideToLeft');
	toggles[currentSlide].classList.remove('features-advice__toggle--current');
	currentSlide--;
	if (currentSlide < 0) currentSlide = slidesLength;
	slides[currentSlide].classList.add('bringFromRightSide');
	toggles[currentSlide].classList.add('features-advice__toggle--current');
}

function showNextSlide(){
	sliderCarusel();
	temporaryPauseSlider(3000);
}

function sliderCarusel(){
	removeAllClasses(slides, sliderClasses);
	slides[currentSlide].classList.add('hideSlideToRight');
	toggles[currentSlide].classList.remove('features-advice__toggle--current');
	currentSlide++;
	if (currentSlide > slidesLength) currentSlide = 0;
	slides[currentSlide].classList.add('bringFromLeftSide');
	toggles[currentSlide].classList.add('features-advice__toggle--current');
}

function NextSlideByDot(index){
	removeAllClasses(slides, sliderClasses);
	slides[currentSlide].classList.add('hideSlideToLeft');
	toggles[currentSlide].classList.remove('features-advice__toggle--current');
	currentSlide = index;
	slides[currentSlide].classList.add('bringFromRightSide');
	toggles[currentSlide].classList.add('features-advice__toggle--current');
}

function temporaryPauseSlider(time){
	clearInterval(sliderToggleTime);
	sliderToggleTime = setTimeout( () =>{
	sliderToggleTime = setInterval(sliderCarusel, 2000)
	}, time);
}

function removeAllClasses(itemsArray, classArray){
	let classesNumber = classArray.length;
	for(i = 0; i < classesNumber; i++){
		removeClassFrom(itemsArray, classArray[i])
	}
}

function removeClassFrom(itemsArray, className){
	for(singleItem of itemsArray) {
		singleItem.classList.remove(className);
	}
}




