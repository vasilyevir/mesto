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
const closeButtonEdit = formEdit.querySelector('.popup__btn-close_edit');
const closeButtonAdd = formAdd.querySelector('.popup__btn-close_add');
const addButton = document.querySelector('.profile__btn-add');
const elements = document.querySelector('.elements');
const template = document.querySelector('#elements');
const addCard = document.querySelector('#addButton');
const popup = document.querySelector('.popup_card');
const popupText = popup.querySelector('.popup__text_type_image');
const popupImage = popup.querySelector('.popup__image');
const popupCloseBtn = popup.querySelector('.popup__btn-close');
let formAddOpen = false;
let formEditOpen = false;
let popupOpen = false;


const renderList = () => {
        const items = initialCards.map(element => getItems(element))
        elements.append(...items)
}

const removeCard = (event) => {
    event.target.closest('.element').remove();
}

const toggleLike = (element) =>{
    element.target.closest('.element__heart').classList.toggle('element__heart_active')
}

function onClickFormBackgroundPopup(event) {
    if (event.target !== event.currentTarget) {
		return;
	} else {
    closePopup();
	}
}

// const closePopup = (element) => {

// }

const closePopup = () =>{
    popup.classList.toggle('popup-image_active')
    if (popupOpen === false) {
        popupOpen = true;
    } else {
        popupOpen = false;
    }
}

const popupToggle = (element) =>{
    popupImage.src = element.target.closest('.element__image').src
    popupText.textContent = element.target.closest('.element').querySelector('.element__text').textContent
    popup.classList.toggle('popup-image_active');
    if (popupOpen === false) {
        popupOpen = true;
    } else {
        popupOpen = false;
    }
}


const getItems = (data) => {
    const card = template.content.cloneNode(true);
    card.querySelector('.element__text').textContent = data.name;
    const elementImage = card.querySelector('.element__image');
    elementImage.src = data.link;
    const deleteButton = card.querySelector('.element__btn-delete');
    const heart = card.querySelector('.element__heart') 


    elementImage.addEventListener('click', popupToggle)
    heart.addEventListener('click', toggleLike)
    deleteButton.addEventListener('click', removeCard)

    return card;
}

function sumbitCard(event) {
    event.preventDefault();
    const data = {}
    data.name = nameImage.value;
    data.link = urlImage.value; 
    const item = getItems(data)
    elements.prepend(item);
    nameImage.value = ''
    urlImage.value = ''
    formAddToggle()
}


function formEditToggleOpen(){
    nameChange.setAttribute('value', name.textContent);
	jobChange.setAttribute('value', job.textContent);
    formEdit.classList.toggle('form_is-opened');
    formEditOpen = true;
}

function formEditToggleClose() {
    formEdit.classList.toggle('form_is-opened');
    formEditOpen = false;
}

function formAddToggle() {
    formAdd.classList.toggle('form_is-opened');
    if (formAddOpen === false) {
        formAddOpen = true;
    } else {
        formAddOpen = false;
    }
}

function formSubmitHandler (event) {
	event.preventDefault(); 
	name.textContent = nameChange.value;
	job.textContent = jobChange.value;
    formEditToggleClose();
    formEditOpen = false;
}

function onClickFormBackgroundEdit(event) {
	if (event.target !== event.currentTarget) {
		return;
	} else {
    formEditToggleClose();
    formEditOpen = false;
	}
}

function onClickFormBackgroundAdd(event) {
	if (event.target !== event.currentTarget) {
		return;
	} else {
    formAddToggle();
	}
}

function escForm(evt) {
    if (evt.key === 'Escape') {
        if (formEditOpen === true) {
            formEditToggleClose()
        } else if (formAddOpen === true){
            formAddToggle()
        } else if (popupOpen === true){
            closePopup()
        }
    }
    console.log(formEditOpen, formAddOpen, popupOpen)
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
popupCloseBtn.addEventListener('click', closePopup)
popup.addEventListener('click', onClickFormBackgroundPopup)
document.addEventListener('keydown', escForm)
