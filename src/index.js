import {Card}  from './scripts/Card.js';
import {Popup} from './scripts/Popup.js'
import {PopupWithForm} from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js'
import {Section} from './scripts/section.js';
import {FormValidator} from './scripts/FormValidator.js';
import {initialCards, formAdd, formEdit, name, nameChange, nameImage, job, urlImage, jobChange,
    editButton, addButton, addBtn, elements, template, popupCard, data} from './utils/contants.js'
import './pages/index.css'
import pic from './images/Custo.png'

const validation = (val) =>{
    data.inputSelector = Array.from(document.querySelector(val).querySelectorAll('.popup__input'));
    data.submitButtonSelector = document.querySelector(val).querySelector('.popup__btn-save');
    const valid = new FormValidator(val, {data});
    valid.enableValidation();
}

const popupImage = new PopupWithImage(popupCard);

const createCard = (element) => {
    const listItem = new Card(element, template,{
        handleCardClick: (content)=>{
            popupImage.openPopup(content);
        }
    });
    return listItem.render();

}

const userInfo = (obj) => {
    const User = new UserInfo(obj);
    User.getUserInfo();
    User.setUserInfo();
}

const popupAdd = new PopupWithForm(formAdd, {
    callback: (data) => {
        const val = {};
        val.name = data.nameCard;
        val.link = data.imgCard;
        const card = createCard(val);
        cardsContainer.addItem(card);
    }
})

const popupEdit = new PopupWithForm(formEdit,{
    callback: (data) => {
        userInfo(data);
    }
})

const cardsContainer = new Section({
    items: initialCards,
    renderer: (element) => {
        const card = createCard(element);
        return card;
    }
}, elements);

const renderList = () => {
    cardsContainer.renderer();
}

function openAddPopup(){
    popupAdd.openPopup();
    validation(formAdd);
}

function openEditPopup() {
    popupEdit.openPopup();
    const obj = {}
    obj.name = document.querySelector(name).textContent;
    obj.job = document.querySelector(job).textContent;
    userInfo(obj);
    validation(formEdit);
}

renderList();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openEditPopup);

