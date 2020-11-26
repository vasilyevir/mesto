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

export {initialCards, popupText, popupImage, formAdd, formEdit, name, nameChange, nameImage, job, urlImage, jobChange,
    editButton, addButton, addBtn, elements, template, popupCard, elementText, elementImage}