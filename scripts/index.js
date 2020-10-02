let form = document.querySelector('.form');
let name = document.querySelector('.profile__name');
let nameChange = document.querySelector('.form__input_value_name');
let job = document.querySelector('.profile__job');
let jobChange = document.querySelector('.form__input_value_job');
let editButton = document.querySelector('.profile__btnEdit');
let closeButton = document.querySelector('.form__btnClose');


function formToggleOpen(){
    form.classList.toggle('form_is-opened');
    nameChange.setAttribute('value', name.textContent);
    jobChange.setAttribute('value', job.textContent);
}
function formToggleClose() {
	form.classList.toggle('form_is-opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault(); 
	name.textContent = nameChange.Value;
	job.textContent = jobChange.Value;
	formToggleClose();
}


function onClickFormBackground(event) {
	if (event.target === event.currentTarget) {
		formToggleClose();
	}
}

editButton.addEventListener('click', formToggleOpen);
closeButton.addEventListener('click', formToggleClose);
form.addEventListener('submit', formSubmitHandler);