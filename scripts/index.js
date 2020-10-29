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
const template = document.querySelector('#elements');
const addCard = document.querySelector('#addButton');
const popupCard = document.querySelector('.popup_card');
const popupText = popupCard.querySelector('.popup__text_type_image');
const popupImage = popupCard.querySelector('.popup__image');
const cardCloseBtn = popupCard.querySelector('.popup__btn-close');
const editCloseBtn = formEdit.querySelector('.popup__btn-close');
const addCloseBtn = formAdd.querySelector('.popup__btn-close');




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
    popupClose(event.target.closest('.popup'));
	}
}

const popupClose = (element) => {
    element.classList.remove('popup_is-opened');
}

const openPopup = (event) => {
    if (event.target.classList.contains('profile__btn-add')){
        formAdd.classList.add('popup_is-opened');
    } else if (event.target.classList.contains('profile__btn-edit')) {
        formEdit.classList.add('popup_is-opened');  
    } else if (event.target.classList.contains('element__image')){
        popupCard.classList.add('popup_is-opened');
    }
}

const editFormCreate = (element) => {
    nameChange.setAttribute('value', name.textContent);
    jobChange.setAttribute('value', job.textContent);
    openPopup(element);
}

const popupCreate = (element) =>{
    popupImage.src = element.target.closest('.element__image').src
    popupText.textContent = element.target.closest('.element').querySelector('.element__text').textContent
    openPopup(element);
}


const getItems = (data) => {
    const card = template.content.cloneNode(true);
    card.querySelector('.element__text').textContent = data.name;
    const elementImage = card.querySelector('.element__image');
    elementImage.src = data.link;
    const deleteButton = card.querySelector('.element__btn-delete');
    const heart = card.querySelector('.element__heart') 


    elementImage.addEventListener('click', popupCreate)
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

function escForm(evt) {
    const popupOpenNow = document.querySelector('.popup_is-opened')
    if (evt.key === 'Escape') {
        popupClose(popupOpenNow);
    }
}


renderList();
editButton.addEventListener('click', editFormCreate);
addButton.addEventListener('click', openPopup);
popupCard.addEventListener('submit', popupCreate);
formAdd.addEventListener('submit', sumbitCard);
formEdit.addEventListener('submit', formSubmitHandler);
document.addEventListener('keydown', escForm);
cardCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
editCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
addCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
popupCard.addEventListener('click', onClickFormBackground);
formEdit.addEventListener('click', onClickFormBackground);
formAdd.addEventListener('click', onClickFormBackground);