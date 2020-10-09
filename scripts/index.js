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
let nameImage = document.querySelector('.form__input_value_name-image')
let job = document.querySelector('.profile__job');
let urlImage = document.querySelector('.form__input_value_url')
let jobChange = document.querySelector('.form__input_value_job');
let editButton = document.querySelector('.profile__btn-edit');
let closeButtonEdit = formEdit.querySelector('.form__btn-close_edit');
let closeButtonAdd = formAdd.querySelector('.form__btn-close_add');
let addButton = document.querySelector('.profile__btn-add')
let elements = document.querySelector('.elements');
//const deleteButton = document.querySelector('.element__btn-delete');


//deleteButton.addEventListener('click', function () {
//  const listItem = deleteButton.closest('.element');
  //listItem.remove();
//}); 








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

let newMassiv = [];
function addElement(event) {
    event.preventDefault(); 
    let qwe = document.querySelectorAll('.element');
    qwe.forEach(function(item) {
        item.remove()
    })
    let item = {};
    item.name = nameImage.value;
    item.link = urlImage.value;
    initialCards.unshift(item);
    newMassiv = initialCards;
    formAddToggle();
    newMassiv.forEach( function addCard(element){
        const cardTemplate = document.querySelector('#elements').content;
        const card = cardTemplate.cloneNode(true);	
        card.querySelector('.element__text').textContent = element.name;
        card.querySelector('.element__image').src = element.link;
        elements.append(card);
    })
}




editButton.addEventListener('click', formEditToggleOpen);
closeButtonEdit.addEventListener('click', formEditToggleClose);
closeButtonAdd.addEventListener('click', formAddToggle);
addButton.addEventListener('click', formAddToggle);
formEdit.addEventListener('submit', formSubmitHandler);
formEdit.addEventListener('click', onClickFormBackgroundEdit);
formAdd.addEventListener('click', onClickFormBackgroundAdd);
formAdd.addEventListener('submit', addElement)
