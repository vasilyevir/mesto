console.log('Hello world')
let form = document.querySelector('.form')
let name = document.querySelector('.Profile__name');
let nameChange = document.querySelector('.form__name');
let job = document.querySelector('.profile__job');
let jobChange = document.querySelector('.form__job')
let editButton = document.querySelector('.Profile__btn_action_edit');
let closeButton = document.querySelector('.form__btn_close');

function formToggle(){
    form.classList.toggle('form_is-opened');
    nameChange.setAttribute('value', name.innerHTML);
    jobChange.setAttribute('value', job.textContent);
}
editButton.addEventListener('click', formToggle);
closeButton.addEventListener('click', formToggle);


