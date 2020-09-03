let input = document.querySelectorAll('.choise-form__input-field');
let optionList = document.querySelectorAll('.choise-form__option-list'); // list of variants

// используются в файле календарь.джэс внутри функции xCal для изменения даты:
let calendar = document.querySelectorAll('.datepicker'); // (input внутри поля)
let calendarText = document.querySelectorAll('.input__date');

let calendarField = document.querySelector('.choise-form__input-field--datepicker');


for (let i =  0; i < input.length; i++) {
	// for of и forEach не работают - только стандартный for!

	if (input[i].querySelector('.choise-form__option-list') != null) {
		input[i].addEventListener('click', function(e) {
			
			optionList.forEach(function(item) {
				if (item.classList.contains('list--shown')) {
					item.classList.remove('list--shown');
				}
			})

			input[i].querySelector('.choise-form__option-list').classList.add('list--shown');

			let optionItem = input[i].querySelectorAll('.choise-form__option-item');
			let choisenItem = input[i].querySelector('.input__text'); // text inside of Input

			optionItem.forEach(function(item){
				item.addEventListener('click', function(e) {
					choisenItem.innerHTML = '<b>'+item.innerHTML+'</b>';
				});
			})
			
		});

	}
}

window.addEventListener('click', function(event) {
	if (!event.target.closest('.input__text')) {
		optionList.forEach(function(item) {
			item.classList.remove('list--shown');
		})
	}
})
window.addEventListener('keydown', function() {
	if (event.code == 'Escape') {
		optionList.forEach(function(item) {
			item.classList.remove('list--shown');
		})
	}
});











