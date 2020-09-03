let menu = document.querySelector('.header__links-list');
let menuButton = document.querySelector('.header__menu-button ');
let menuButtonText = document.querySelector('.menu-text');
let menuButtonArrow = document.querySelector('.menu-icon--arrow');
let menuButtonCross = document.querySelector('.menu-icon--cross');
let contacts = document.querySelector('.header__contacts-wrapper');

menuButton.addEventListener('click', function(e) {
	menuButtonArrow.classList.toggle('menu-icon--shown');
	menuButtonCross.classList.toggle('menu-icon--shown');
	menu.classList.toggle('header__links-list--shown');
	menuButton.classList.toggle('header__menu-button--shown');
	contacts.classList.toggle('header__contacts-wrapper--shown');
	if (menuButtonText.innerHTML == 'Menu') {
		menuButtonText.innerHTML = 'Close menu'
	} else {
		menuButtonText.innerHTML = 'Menu'
	}
});


