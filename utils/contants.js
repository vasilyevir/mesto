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

const popupCard = document.querySelector('.popup_card');
const popupText = popupCard.querySelector('.popup__text_type_image');
const popupImage = popupCard.querySelector('.popup__image');
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
const elements = '.elements';
const template = '#elements';
const cardCloseBtn = popupCard.querySelector('.popup__btn-close');
const editCloseBtn = formEdit.querySelector('.popup__btn-close');
const addCloseBtn = formAdd.querySelector('.popup__btn-close');

export {initialCards, popupText, popupImage, formAdd, formEdit, name, nameChange, nameImage, job, urlImage, jobChange,
    editButton, addButton, elements, template, popupCard, cardCloseBtn, editCloseBtn, addCloseBtn}