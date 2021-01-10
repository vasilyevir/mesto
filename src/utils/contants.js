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

const popupCard = '.popup_card';
const popupText = '.popup__text_type_image';
const popupImage = '.popup__image';
const elementText = '.element__text';
const elementImage = '.element__image';
const formAdd = '.popup_add';
const formEdit = '.popup_edit';
const name = '.profile__name';
const nameChange = document.querySelector('.popup__input_value_name');
const nameImage = document.querySelector('.popup__input_value_name-image');
const job = '.profile__job';
const urlImage = document.querySelector('.popup__input_value_url')
const jobChange = document.querySelector('.popup__input_value_job');
const editButton = document.querySelector('.profile__btn-edit');
const addButton = document.querySelector('.profile__btn-add');
const addBtn = '.profile__btn-add'
const elements = '.elements';
const template = '#elements';
const validationConfigProfile = {};
const validationConfigCard = {};
validationConfigProfile.inputSelector = Array.from(document.querySelector(formEdit).querySelectorAll('.popup__input')),
validationConfigProfile.submitButtonSelector = document.querySelector(formEdit).querySelector('.popup__btn-save'),
validationConfigProfile.inactiveButtonClass = 'popup__btn-save_invalid';
validationConfigProfile.inputErrorClass = 'popup__input_state_invalid';


validationConfigCard.inputSelector = Array.from(document.querySelector(formAdd).querySelectorAll('.popup__input')),
validationConfigCard.submitButtonSelector = document.querySelector(formAdd).querySelector('.popup__btn-save'),
validationConfigCard.inactiveButtonClass = 'popup__btn-save_invalid';
validationConfigCard.inputErrorClass = 'popup__input_state_invalid';

const obj = {};
obj.name = '.profile__name';
obj.job = '.profile__job';

const configImage = {};
configImage.popupText = popupText;
configImage.popupImage = popupImage;
configImage.elementText = elementText;
configImage.elementImage = elementImage;

export {initialCards, formAdd, formEdit, name, nameChange, nameImage, job, urlImage, jobChange,
    editButton, addButton, addBtn, elements, template, popupCard, validationConfigProfile, validationConfigCard, obj, configImage}