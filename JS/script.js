
// SLIDER
const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
	$(document).ready(function(){
		$(".projects__container").slick({
			arrows: true,
			dots: false,
			adaptiveHeight: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 500,
			infinite: true,
			swipe: true,
			touchThreshold: 10,
			variableWidth: true,
		});
	});
}
// SLIDER

// BURGER
const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav')
burger.addEventListener('click', function() {
	headerNav.classList.toggle('active');
	burger.classList.toggle('active');
})
// BURGER

// FORM-VALIDATION
function validation(form) {
	let result = true;

	function validationDefault(input) {
		if (input.classList.contains('input-invalid')) {
			input.classList.remove('input-invalid')
		}
	}

	function errorClear(input) {
		const parent = input.parentNode;
		if (parent.querySelector('.error')) {
			parent.querySelector('.error').remove();
		}
	}

	function errorCreate(input, text) {
		const parent = input.parentNode;

		const errorEl = document.createElement('div');
		errorEl.classList.add('error');
		errorEl.textContent = text;

		parent.append(errorEl);
	}

	let inputs = form.querySelectorAll('.order-form__input')
	for (const input of inputs) {
		validationDefault(input)
		errorClear(input)		
		if (input.value == "") {
			console.log('них')
			errorCreate(input, 'Введите данные корректно')
			input.classList.add('input-invalid');
			result = false;
		}
	}
	
	return result;
}
document.querySelector('.order-form__form').addEventListener('submit', function(event) {
	event.preventDefault();
	if (validation(this) == true) {
		alert('гуд')
	}
})

// FORM-VALIDATION