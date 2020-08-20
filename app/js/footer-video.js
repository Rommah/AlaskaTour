const openVideoSlide = document.querySelectorAll('.site-video');
const closeVideo = document.querySelector('.video__exit');
const siteVideoWrapper = document.querySelector('.site-video__wrapper');
const siteVideoItem = document.querySelectorAll('.site-video__slide');

let opendVideo;

openVideoSlide.forEach(function(item, index){
	item.addEventListener('click', function(e) {
		siteVideoWrapper.classList.add('show-video');
		siteVideoItem[index].classList.add('show-video');
		opendVideo = index;
	});
})

closeVideo.addEventListener('click', function(e) {
	siteVideoWrapper.classList.remove('show-video');

		siteVideoItem[opendVideo].classList.remove('show-video');
});


// openVideoSlide.addEventListener('click', function(e) {
// 	siteVideoWrapper.classList.add('show-video');
// 	siteVideoItem.classList.add('show-video');
// });
// closeVideo.addEventListener('click', function(e) {
// 	siteVideoWrapper.classList.remove('show-video');
// 	siteVideoItem.classList.remove('show-video');
// });
