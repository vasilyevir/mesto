import {Card}  from './scripts/Card.js';
import {PopupWithForm} from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js'
import {Section} from './scripts/section.js';
import {initialCards, formAdd, formEdit, name, nameChange, nameImage, job, urlImage, jobChange,
    editButton, addButton, addBtn, elements, template, popupCard} from './utils/contants.js'
import './pages/index.css'
import pic from './images/Custo.png'

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


renderList();

addButton.addEventListener('click', openAddPopup);
editButton.addEventListener('click', openEditPopup);
