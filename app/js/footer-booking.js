const choiseItem = document.querySelectorAll('.choise__item');
const itemInput = document.querySelectorAll('.choise-form__fieldset');

let currentChoiseItem = 0;
choiseItem[currentChoiseItem].classList.add('choise__item--active');
itemInput[currentChoiseItem].classList.add('choise-form__fieldset--shown');

choiseItem.forEach(function(item, number){
	item.addEventListener('click', function() {
		choiseItem[currentChoiseItem].classList.remove('choise__item--active');
		itemInput[currentChoiseItem].classList.remove('choise-form__fieldset--shown');
		currentChoiseItem = number;
		item.classList.add('choise__item--active');
		itemInput[currentChoiseItem].classList.add('choise-form__fieldset--shown');
	});
})