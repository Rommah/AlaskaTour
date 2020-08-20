const openVideoSlide = document.querySelectorAll('.site-video');
const closeVideo = document.querySelectorAll('.video__exit');
const siteVideoWrapper = document.querySelectorAll('.site-video__wrapper');
const siteVideoItem = document.querySelectorAll('.site-video__slide');



openVideoSlide.forEach(function(item, index){
	item.addEventListener('click', function(event) {
		if(!event.target.closest('.site-video__wrapper')){
			siteVideoWrapper[index].classList.add('show-video');
			siteVideoItem[index].play();
		}
	});
})

closeVideo.forEach(function(item, index){
	item.addEventListener('click', function() {
		siteVideoWrapper[index].classList.remove('show-video');
		siteVideoItem[index].pause();
	})
});
siteVideoWrapper.forEach(function(item, index){
	item.addEventListener('click', function(event) {
		if (!event.target.closest('.site-video__container')) {
			siteVideoWrapper[index].classList.remove('show-video');
			siteVideoItem[index].pause();
		}
	})
});
window.addEventListener('keydown', function() {
	if (event.code == 'Escape') {
		siteVideoWrapper.forEach(function(item, index) {
			item.classList.remove('show-video');
			siteVideoItem[index].pause();
		});
	}
});
