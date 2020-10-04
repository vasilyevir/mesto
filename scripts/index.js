let form = document.querySelector('.form');
let name = document.querySelector('.profile__name');
let nameChange = document.querySelector('.form__input_value_name');
let job = document.querySelector('.profile__job');
let jobChange = document.querySelector('.form__input_value_job');
let editButton = document.querySelector('.profile__btn-edit');
let closeButton = document.querySelector('.form__btn-close');

function formToggleOpen(){
    nameChange.setAttribute('value', name.textContent);
	jobChange.setAttribute('value', job.textContent);
	form.classList.toggle('form_is-opened');
}

function formToggleClose() {
	form.classList.toggle('form_is-opened');
}

function formSubmitHandler (event) {
	event.preventDefault(); 
	name.textContent = nameChange.value;
	job.textContent = jobChange.value;
	formToggleClose();
}


function onClickFormBackground(event) {
	if (event.target !== event.currentTarget) {
		return;
	} else {
	formToggleClose();
	}
}

editButton.addEventListener('click', formToggleOpen);
closeButton.addEventListener('click', formToggleClose);
form.addEventListener('submit', formSubmitHandler);
form.addEventListener('click', onClickFormBackground);