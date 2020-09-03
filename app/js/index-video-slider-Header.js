const videoSlide = document.querySelectorAll('.video__slider-item'),
	videoSlideLenght = videoSlide.length - 1,
	prevVideoSlide = document.querySelector('.video__toggle-item--left'),
	nextVideoSlide = document.querySelector('.video__toggle-item--right');


let currentVideoSlide = 0;
videoSlide[currentVideoSlide].classList.add('video__slider-item--show');


nextVideoSlide.addEventListener('click', showNextVideoSlide);
prevVideoSlide.addEventListener('click', showPrevVideoSlide);

let VideoSliderToggleTime = setInterval(VideoSliderCarosel, 5000);


function showNextVideoSlide(){
	clearInterval(VideoSliderToggleTime);
	VideoSliderCarosel()
}
function showPrevVideoSlide(){
	clearInterval(VideoSliderToggleTime);
	videoSlide[currentVideoSlide].classList.remove('video__slider-item--show');
	currentVideoSlide--;
	if (currentVideoSlide < 0) currentVideoSlide = videoSlideLenght;
	videoSlide[currentVideoSlide].classList.add('video__slider-item--show');
}
function VideoSliderCarosel(){
	videoSlide[currentVideoSlide].classList.remove('video__slider-item--show');
	currentVideoSlide++;
	if (currentVideoSlide > videoSlideLenght) currentVideoSlide = 0;
	videoSlide[currentVideoSlide].classList.add('video__slider-item--show');
}

