import {Card}  from '../scripts/Card.js';
import {Popup} from '../scripts/Popup.js'
import {PopupWithForm} from '../scripts/PopupWithForm.js';
import {PopupWithDelete} from '../scripts/PopupWithDelete.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js'
import {Section} from '../scripts/Section.js';
import {FormValidator} from '../scripts/FormValidator.js';
import {Api} from '../scripts/Api.js';
import {formAdd, formEdit, nameChange, jobChange, editButton, addButton, elements, template,
     popupCard, validationConfigCard, obj, configImage, groupId, validationConfigProfile,
     address, token, formDelete, btnDelete, btnDeleteMyCard, likeActive, like, numberOfLikes,
     formAvatar, validationConfigAvatar, avatarButton, btnSave} from '../utils/contants.js';
     
import './index.css';

const api = new Api(groupId, address, token);
let usreId;

api.getInformation()
   .then(res => {
        usreId = res._id;
        userInfo.setUserInfo(res);
    })
    .catch((err)=> console.log(err));

api.getCards()
   .then(res => {
         res.forEach(element => {
         const card = createCard(element);
         const isArray = true;
         cardsContainer.addItem(card, isArray);
        })
    })
    .catch((err)=>{console.log(err)})
 
const popupDelete = new PopupWithDelete(formDelete);

const formValidatorProfile = new FormValidator(formEdit, validationConfigProfile);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(formAdd, validationConfigCard);
formValidatorCard.enableValidation(); 

const formValidatorAvatar = new FormValidator(formAvatar, validationConfigAvatar);
formValidatorAvatar.enableValidation();

const popupImage = new PopupWithImage(popupCard, configImage);


const createCard = (element) => {
    const listItem = new Card(element, template, usreId, like, likeActive, numberOfLikes, btnDeleteMyCard, {
        handleCardClick: (text, link)=>{
            popupImage.openPopup(text, link);
            popupImage.setEventListeners();
        },
        handleDeleteButtonClick: (card) => {
            popupDelete.openPopup();
            popupDelete.setSubmitAction(() =>{
                api.deleteCard(card._id)
                    .then((res)=>{
                        listItem.removeCard()
                    })
                    .catch((err)=> console.log(`Ошибка при удаление: ${err}`))
            })
            // popupDelete.setEventListeners();
        },
        handleLikeClick: (card)=>{
            api.postLike(listItem.getId(), !listItem.isLiked(card))
                .then(data => {
                    listItem.changeLikesInfo(data);
                })
        }
    });
    return listItem.render();
}

const userInfo = new UserInfo(obj);

const renderLoadingPopupCreate = (form ,isLoading, textBefore) => {
    if (isLoading) {
        document.querySelector(form).querySelector(btnSave).textContent = 'Сохранение...';
    } else {
        document.querySelector(form).querySelector(btnSave).textContent = textBefore;
    }
}

const popupAdd = new PopupWithForm(formAdd, btnSave, {
    callback: (data) => {
        renderLoadingPopupCreate(formAdd, true, popupAdd.buttonText());
        const val = {};
        val.name = data.nameCard;
        val.link = data.imgCard;
        const isArray = false;
        api.postCard(val).then(res => {
            const card = createCard(res);
            cardsContainer.addItem(card, isArray);
        })
        .catch((err)=> console.log(err))
        .finally(() =>{renderLoadingPopupCreate(formAdd, false, popupAdd.buttonText())})
    }
})

const popupAvatar = new PopupWithForm(formAvatar, btnSave, {
    callback: (data) =>{
        renderLoadingPopupCreate(formAvatar, true, popupAvatar.buttonText());
        api.changeAvatar(data.imgAvatar).then(res =>{
            userInfo.setUserInfo(res);
        })
        .catch((err)=> console.log(err))
        .finally(()=> {
            renderLoadingPopupCreate(formAvatar, false, popupAvatar.buttonText());
        })
    }
})

const popupEdit = new PopupWithForm(formEdit, btnSave, {
    callback: (data) => {
        // const textBefore = document.querySelector(formEdit).querySelector(btnSave).textContent
        // console.log(popupEdit.buttonText());
        renderLoadingPopupCreate(formEdit, true, popupEdit.buttonText());
        api.changeProfile(data).then(res =>{
            userInfo.setUserInfo(res)
        })
        .catch((err)=> console.log(err))
        .finally(()=>{
            renderLoadingPopupCreate(formEdit, false, popupEdit.buttonText());
        })
    }

})

const cardsContainer = new Section({
    renderer: (element) => {
        return createCard(element);   
        }
}, elements);


function openAddPopup(){
    formValidatorCard.resetValidation()
    popupAdd.openPopup();
}

function openAvatarPopup(){
    formValidatorAvatar.resetValidation();
    popupAvatar.openPopup();
}

function openEditPopup() {
    formValidatorProfile.resetValidation();
    popupEdit.openPopup();
    userInfo.getUserInfo(obj);
    nameChange.setAttribute('value', userInfo.getUserInfo(obj).name);
    jobChange.setAttribute('value',  userInfo.getUserInfo(obj).about);
}

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupAvatar.setEventListeners();
popupDelete.setEventListeners();
avatarButton.addEventListener('click', openAvatarPopup);
addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openEditPopup);

