import { Card } from './Card.js';
// import { FormValidator } from './FormValidator.js';
import {popupClose, openPopup, popupCreate} from './utils.js'

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const formAdd = document.querySelector('.popup_add');
const formEdit = document.querySelector('.popup_edit');
const name = document.querySelector('.profile__name');
const nameChange = document.querySelector('.popup__input_value_name');
const nameImage = document.querySelector('.popup__input_value_name-image');
const job = document.querySelector('.profile__job');
const urlImage = document.querySelector('.popup__input_value_url')
const jobChange = document.querySelector('.popup__input_value_job');
const editButton = document.querySelector('.profile__btn-edit');
const addButton = document.querySelector('.profile__btn-add');
const elements = document.querySelector('.elements');
const template = '#elements';

const popupCard = document.querySelector('.popup_card');

const cardCloseBtn = popupCard.querySelector('.popup__btn-close');
const editCloseBtn = formEdit.querySelector('.popup__btn-close');
const addCloseBtn = formAdd.querySelector('.popup__btn-close');




const addItem = element => {
            const listItem = new Card(element, template);
            listItem.render(elements);
}

function renderList(){
    initialCards.forEach(addItem)
}

const addFormCreate = () => {
    openPopup(formAdd);
}

const editFormCreate = () => {
    nameChange.setAttribute('value', name.textContent);
    jobChange.setAttribute('value', job.textContent);
    openPopup(formEdit);
}

function sumbitCard(event) {
    event.preventDefault();
    const data = {}
    data.name = nameImage.value;
    data.link = urlImage.value; 
    const listItem = new Card(data, template);
    listItem.render(elements);
    nameImage.value = ''
    urlImage.value = ''
    popupClose(event.target.closest('.popup'));
}

function onClickFormBackground(event) {
    if (event.target !== event.currentTarget) {
    	return;
    } else {
        console.log(event.target.closest('.popup'))
        popupClose(event.target.closest('.popup'));
    }
}

function formSubmitHandler (event) {
	event.preventDefault(); 
	name.textContent = nameChange.value;
	job.textContent = jobChange.value;
    popupClose(event.target.closest('.popup'));
}

renderList();
editButton.addEventListener('click', editFormCreate);
addButton.addEventListener('click', addFormCreate);
popupCard.addEventListener('submit', popupCreate);
formAdd.addEventListener('submit', sumbitCard);
formEdit.addEventListener('submit', formSubmitHandler);
cardCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
editCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
addCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
popupCard.addEventListener('click', onClickFormBackground);
formEdit.addEventListener('click', onClickFormBackground);
formAdd.addEventListener('click', onClickFormBackground);