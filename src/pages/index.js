import {Card}  from '../scripts/Card.js';
import {Popup} from '../scripts/Popup.js'
import {PopupWithForm} from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js'
import {Section} from '../scripts/section.js';
import {FormValidator} from '../scripts/FormValidator.js';
import {initialCards, formAdd, formEdit, nameChange, jobChange,
    editButton, addButton, elements, template, popupCard, validationConfigProfile, validationConfigCard, obj, configImage} from '../utils/contants.js'
import '../pages/index.css'
import pic from '../images/Custo.png'

const formValidatorProfile = new FormValidator(formEdit, validationConfigProfile);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(formAdd, validationConfigCard);
formValidatorCard.enableValidation(); 

const popupImage = new PopupWithImage(popupCard, configImage);

const createCard = (element) => {
    const listItem = new Card(element, template,{
        handleCardClick: (content)=>{
            popupImage.openPopup(content);
            popupImage.setEventListeners();
        }
    });
    return listItem.render();

}
const userInfo = new UserInfo(obj);

const popupAdd = new PopupWithForm(formAdd, {
    callback: (data) => {
        const val = {};
        val.name = data.nameCard;
        val.link = data.imgCard;
        const card = createCard(val);
        const isArray = false;
        cardsContainer.addItem(card, isArray);
        
    }
})

const popupEdit = new PopupWithForm(formEdit,{
    callback: (data) => {
        userInfo.setUserInfo(data);
    }

})

const cardsContainer = new Section({
    items: initialCards,
    renderer: (element) => {
        return createCard(element);   
        }
}, elements);

const renderList = () => {
    cardsContainer.renderer();
}

function openAddPopup(){
    popupAdd.openPopup();
}

function openEditPopup() {
    popupEdit.openPopup();
    userInfo.getUserInfo(obj);
    nameChange.setAttribute('value', userInfo.getUserInfo(obj).name);
    jobChange.setAttribute('value',  userInfo.getUserInfo(obj).job);
}

renderList();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openEditPopup);

