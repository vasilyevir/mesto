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

let formAdd = document.querySelector('.form_add');
let formEdit = document.querySelector('.form_edit');
let name = document.querySelector('.profile__name');
let nameChange = document.querySelector('.form__input_value_name');
let nameImage = document.querySelector('.form__input_value_name-image');
let job = document.querySelector('.profile__job');
let urlImage = document.querySelector('.form__input_value_url')
let jobChange = document.querySelector('.form__input_value_job');
let editButton = document.querySelector('.profile__btn-edit');
let closeButtonEdit = formEdit.querySelector('.form__btn-close_edit');
let closeButtonAdd = formAdd.querySelector('.form__btn-close_add');
let addButton = document.querySelector('.profile__btn-add');
let elements = document.querySelector('.elements');
let template = document.querySelector('#elements');
let addCard = document.querySelector('#addButton');
let popup = document.querySelector('#popup-image');
let body = document.querySelector('.root');


const renderList = () => {
        const items = initialCards.map(element => getItems(element))
        elements.append(...items)
}

const removeCard = (event) => {
    event.target.closest('.element').remove();
}

const hearttoggle = (element) =>{
    element.target.closest('.element__heart').classList.toggle('element__heart_active')
}

function onClickFormBackgroundPopup(event) {
    if (event.target !== event.currentTarget) {
		return;
	} else {
	closePopup();
	}
}

const closePopup = () =>{
    const popupImage = document.querySelector('.popup-image')
    body.classList.toggle('root_overflow')
    popupImage.remove()
}

const popupToggle = (element) =>{
    const popupOpen = popup.content.cloneNode(true);
    popupOpen.querySelector('.popup-image__image').src = element.target.closest('.element__image').src
    popupOpen.querySelector('.popup-image__text').textContent = element.target.closest('.element').querySelector('.element__text').textContent
    const popupImage = popupOpen.querySelector('.popup-image');
    const popupCloseBtn = popupOpen.querySelector('.form__btn-close')
    popupImage.classList.toggle('popup-image_active');
    body.prepend(popupOpen)
    popupCloseBtn.addEventListener('click', closePopup)
    popupOpen.addEventListener('click', onClickFormBackgroundPopup)
    body.classList.toggle('root_overflow')
}

const getItems = (data) => {
    const card = template.content.cloneNode(true);
    card.querySelector('.element__text').textContent = data.name;
    card.querySelector('.element__image').src = data.link;
    const deleteButton = card.querySelector('.element__btn-delete');
    const heart = card.querySelector('.element__heart') 
    const elementImage = card.querySelector('.element__image');

    elementImage.addEventListener('click', popupToggle)
    heart.addEventListener('click', hearttoggle)
    deleteButton.addEventListener('click', removeCard)

    return card;
}

function sumbitCard(event) {
    event.preventDefault();
    let perem = {}
    perem.name = nameImage.value;
    perem.link = urlImage.value; 
    const item = getItems(perem)
    elements.prepend(item);
    formAddToggle()
}


function formEditToggleOpen(){
    nameChange.setAttribute('value', name.textContent);
	jobChange.setAttribute('value', job.textContent);
	formEdit.classList.toggle('form_is-opened');
}

function formEditToggleClose() {
	formEdit.classList.toggle('form_is-opened');
}

function formAddToggle() {
	formAdd.classList.toggle('form_is-opened');
}

function formSubmitHandler (event) {
	event.preventDefault(); 
	name.textContent = nameChange.value;
	job.textContent = jobChange.value;
	formEditToggleClose();
}

function onClickFormBackgroundEdit(event) {
	if (event.target !== event.currentTarget) {
		return;
	} else {
	formEditToggleClose();
	}
}

function onClickFormBackgroundAdd(event) {
	if (event.target !== event.currentTarget) {
		return;
	} else {
	formAddToggle();
	}
}




renderList();
editButton.addEventListener('click', formEditToggleOpen);
closeButtonEdit.addEventListener('click', formEditToggleClose);
closeButtonAdd.addEventListener('click', formAddToggle);
addButton.addEventListener('click', formAddToggle);
formEdit.addEventListener('submit', formSubmitHandler);
formEdit.addEventListener('click', onClickFormBackgroundEdit);
formAdd.addEventListener('click', onClickFormBackgroundAdd);
formAdd.addEventListener('submit', sumbitCard)