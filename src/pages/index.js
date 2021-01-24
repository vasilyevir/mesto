import {Card}  from '../scripts/Card.js';
import {Popup} from '../scripts/Popup.js'
import {PopupWithForm} from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js'
import {Section} from '../scripts/section.js';
import {FormValidator} from '../scripts/FormValidator.js';
import {Api} from '../scripts/Api.js';
import {formAdd, formEdit, nameChange, jobChange, editButton, addButton, elements, template,
     popupCard, validationConfigProfile, validationConfigCard, obj, configImage, groupId, 
     address, token, formDelete, btnDelete, btnDeleteMyCard, likeActive, like, numberOfLikes,
     formAvatar, validationConfigAvatar, avatar, avatarButton, btnSave} from '../utils/contants.js'
import '../pages/index.css'

const api = new Api(groupId, address, token);

api.getInformation()
   .then(res => {
        userInfo.setUserInfo(res);
        console.log(avatar);
        avatar.src = res.avatar;
    })
    .catch((err)=> console.log(err));

api.getCards()
   .then(res => {
        res.forEach(element => {
        const card = createCard(element);
        card.querySelector(numberOfLikes).textContent = element.likes.length;
        api.getInformation().then(result => {
            if (result._id === element.owner._id){    
                card.querySelector(btnDelete).classList.add(btnDeleteMyCard);
            }
            element.likes.forEach(user => {
                if (user._id === result._id){
                    card.querySelector(like).classList.add(likeActive);
                }
            })
            .catch((err)=> console.log(err))
        })
        .catch((err)=>{console.log(err)})
        const isArray = true;
        cardsContainer.addItem(card, isArray);
       })
   }) 


const formValidatorProfile = new FormValidator(formEdit, validationConfigProfile);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(formAdd, validationConfigCard);
formValidatorCard.enableValidation(); 

const formValidatorAvatar = new FormValidator(formAvatar, validationConfigAvatar);
formValidatorAvatar.enableValidation();

const popupImage = new PopupWithImage(popupCard, configImage);

const renderLoadingPopupCreate = (form ,isLoading) => {
    const textBefore = document.querySelector(form).querySelector(btnSave).textContent
    if (isLoading) {
        document.querySelector(form).querySelector(btnSave).textContent = 'Сохранение...';
    } else {
        formButton.textContent = textBefore;
    }
}


const createCard = (element) => {
    const listItem = new Card(element, template,{
        handleCardClick: (content)=>{
            popupImage.openPopup(content);
            popupImage.setEventListeners();
        },
        handleDeleteButtonClick: () => {
            const popupDelete = new PopupWithDelete(formDelete, {
                callback: ()=>{
                    api.deleteCard(listItem.getId())
                       .then(() => listItem.removeCard()) 
                       .catch((err) => console.log('Ошибка при удалении')) 
                }
            });
            popupDelete.openPopup();
            popupDelete.setEventListeners();
        },
        handleLikeClick: (card)=>{
            if(!card.querySelector(like).classList.contains(likeActive)){
                api.postLike(listItem.getId())
                   .then(res => {
                        card.querySelector(numberOfLikes).textContent = res.likes.length;
                        card.querySelector(like).classList.add(likeActive);
                    })
                    .catch((err)=> console.log(err))

            } else {
                api.deleteLike(listItem.getId())
                   .then(res =>{
                    card.querySelector(numberOfLikes).textContent = res.likes.length;
                    card.querySelector(like).classList.remove(likeActive);
                   }) 
                    .catch((err)=> console.log(err))
                
            }
        }
    });
    return listItem.render();
}

const userInfo = new UserInfo(obj);

const popupAdd = new PopupWithForm(formAdd, {
    callback: (data) => {
        renderLoadingPopupCreate(formAdd, true);
        const val = {};
        val.name = data.nameCard;
        val.link = data.imgCard;
        const isArray = false;
        api.postCard(val).then(res => {
            const card = createCard(res);
            card.querySelector(btnDelete).classList.add(btnDeleteMyCard);
            cardsContainer.addItem(card, isArray);
        })
        .catch((err)=> console.log(err))
        .finally(() =>{renderLoadingPopupCreate(formAdd, 'Сохранение...', false)})
    }
})

const popupAvatar = new PopupWithForm(formAvatar, {
    callback: (data) =>{
        renderLoadingPopupCreate(formAdd, true);
        api.changeProfile(data).then(res =>{
            avatar.src = res.avatar;
        })
        .catch((err)=> console.log(err))
        .finally(()=> {
            renderLoadingPopupCreate(formAdd, false);
        })
    }
})

const popupEdit = new PopupWithForm(formEdit,{
    callback: (data) => {
        renderLoadingPopupCreate(formAdd, true);
        api.changeProfile(data).then(res =>{
            userInfo.setUserInfo(res)
        })
        .catch((err)=> console.log(err))
        .finally(()=>{
            renderLoadingPopupCreate(formAdd, 'Сохранение...', false);
        })
    }

})

const cardsContainer = new Section({
    renderer: (element) => {
        return createCard(element);   
        }
}, elements);


function openAddPopup(){
    popupAdd.openPopup();
}

function openAvatarPopup(){
    popupAvatar.openPopup();
}

function openEditPopup() {
    popupEdit.openPopup();
    userInfo.getUserInfo(obj);
    nameChange.setAttribute('value', userInfo.getUserInfo(obj).name);
    jobChange.setAttribute('value',  userInfo.getUserInfo(obj).about);
}

popupAdd.setEventListeners();
popupEdit.setEventListeners();
avatarButton.addEventListener('click', openAvatarPopup);
addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openEditPopup);

