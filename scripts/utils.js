import {FormValidator} from './FormValidator.js';

// const popupCard = document.querySelector('.popup_card');
// const popupText = popupCard.querySelector('.popup__text_type_image');
// const popupImage = popupCard.querySelector('.popup__image');

const popupClose = (element) => {
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', escForm);
}

const openPopup = (popupName) => {
    popupName.classList.add('popup_is-opened');
    document.addEventListener('keydown', escForm);
    FormValidation();
}

const popupCreate = (element) =>{
    popupImage.src = element.querySelector('.element__image').src
    popupText.textContent = element.querySelector('.element__text').textContent
    openPopup(popupCard);
}
const escForm = (evt) => {
    const popupOpenNow = document.querySelector('.popup_is-opened')
    if (evt.key === 'Escape') {
        popupClose(popupOpenNow);
    }
}
const FormValidation = () =>{
    const popupOpenNow = document.querySelector('.popup_is-opened');

    const Validation = new FormValidator(popupOpenNow);
    Validation.enableValidation()
}


export {popupClose, openPopup, popupCreate, escForm}