import {Card}  from './scripts/Card.js';
import {PopupWithForm} from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js'
import {Section} from './scripts/section.js';
import {initialCards, formAdd, formEdit, name, nameChange, nameImage, job, urlImage, jobChange,
    editButton, addButton, addBtn, elements, template, popupCard} from './utils/contants.js'

const renderList = () => {
    const param = new Section({
        items: initialCards,
        renderer: (element, container) => {
            const listItem = new Card(element, template,{
                handleCardClick: (content)=>{
                    const PopupCard = new PopupWithImage(popupCard);
                    PopupCard.openPopup(content);
                }
            }
            );
            listItem.render(container);
        }
    }, elements);
    param.renderer();
}

function openAddPopup(){
        const PopupAdd = new PopupWithForm(formAdd, {
            callback: (data) => {
                const val = {};
                val.name = data.nameCard;
                val.link = data.imgCard;
                const listItem = new Card(val, template,{
                    handleCardClick: (content)=>{
                        const popupCard = new PopupWithImage(popupCard);
                        popupCard.openPopup(content);
                    }
                }
                );
                listItem.render(document.querySelector(elements));
            }
        })
        PopupAdd.openPopup();
}

function openEditPopup() {
    const PopupEdit = new PopupWithForm(formEdit,{
        callback: (data) => {
            const User = new UserInfo(data);
            User.setUserInfo();
        }
    })
    const obj = {}
    obj.name = document.querySelector(name).textContent;
    obj.job = document.querySelector(job).textContent;
    const User = new UserInfo(obj);
    User.getUserInfo();
    PopupEdit.openPopup();
}

// function openCard() {
    // const popupCard = new PopupWithImage(popupCard);
    // popupCard.openPopup();
// }

// const addFormCreate = () => {
//     // const PopupForm = new Popup(formAdd)
//     // PopupForm.openPopup();
// }

// const editFormCreate = () => {
    // nameChange.setAttribute('value', name.textContent);
    // jobChange.setAttribute('value', job.textContent);
//     openPopup(formEdit);
// }

// function SumbitForm(section){
//     const PopupAdd = new PopupWithImage({
//         callback: (evt, data) => {
//             evt.preventDefault();
//             val = {};
//             val.name = data[0];
//             val.link = data[1];
//             const listItem = new Card(val, template);
//             listItem.render(elements);
//         }
//     },section)
//     PopupAdd.setEventListeners();
// }



// function sumbitCard(event) {
//     event.preventDefault();
//     const data = {}
//     data.name = nameImage.value;
//     data.link = urlImage.value; 
//     const listItem = new Card(data, template);
//     listItem.render(elements);
//     nameImage.value = ''
//     urlImage.value = ''
//     popupClose(event.target.closest('.popup'));
// }

// function onClickFormBackground(event) {
//     if (event.target !== event.currentTarget) {
//     	return;
//     } else {
//         console.log(event.target.closest('.popup'))
//         popupClose(event.target.closest('.popup'));
//     }
// }
// Отправка формы Edit
// function formSubmitHandler (event) {
// 	event.preventDefault(); 
	// name.textContent = nameChange.value;
	// job.textContent = jobChange.value;
//     popupClose(event.target.closest('.popup'));
// }


renderList();
// editButton.addEventListener('click', editFormCreate);
addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openEditPopup);
// popupCard.addEventListener('submit', popupCreate);
// formAdd.addEventListener('submit', sumbitCard);
// // formEdit.addEventListener('submit', formSubmitHandler);
// cardCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
// editCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
// addCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
// popupCard.addEventListener('click', onClickFormBackground);
// formEdit.addEventListener('click', onClickFormBackground);
// formAdd.addEventListener('click', onClickFormBackground);