console.log('Hello world')
let form = document.querySelector('.form');
let name = document.querySelector('.Profile__name');
let nameChange = document.querySelector('.form__name');
let job = document.querySelector('.profile__job');
let jobChange = document.querySelector('.form__job');
let editButton = document.querySelector('.Profile__btn_action_edit');
let closeButton = document.querySelector('.form__btn_close');
let saveButton = document.querySelector('.form__btn_save');

function formToggle(){
    form.classList.toggle('form_is-opened');
    nameChange.setAttribute('value', name.innerHTML);
    jobChange.setAttribute('value', job.innerHTML);
}
editButton.addEventListener('click', formToggle);
closeButton.addEventListener('click', formToggle);

let formElement = document.querySelector('form__list');
function formSubmitHandler (evt) {
	evt.preventDefault(); 
	
	let nameChange = form.querySelector('.form__name');
	let jobChange = form.querySelector('.form__job');


	let nameChangeValue = nameChange.value;
	let jobChangeValue = jobChange.value;


	let name = document.querySelector('.Profile__name');
	let job = document.querySelector('.profile__job');


	name.innerHTML = nameChangeValue;
	job.innerHTML = jobChangeValue;


	formToggle();

}

form.addEventListener('submit', formSubmitHandler);

function onClickFormBackground(event) {
	if (event.target === event.currentTarget) {
		formToggle();
	}
}

form.addEventListener('click', onClickFormBackground);