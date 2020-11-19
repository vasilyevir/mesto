import {Card}  from './scripts/Card.js'
import Section from './scripts/section.js'
import {popupClose, openPopup, popupCreate} from './scripts/utils.js'
import {initialCards, formAdd, formEdit, name, nameChange, nameImage, job, urlImage, jobChange,
    editButton, addButton, elements, template, popupCard, cardCloseBtn, editCloseBtn, addCloseBtn} from './utils/contants.js'

const lala = () => {
    const param = new Section({
        items: initialCards,
        renderer: (element, container) => {
            const listItem = new Card(element, template);
            listItem.render(container);
        }
    }, elements);
    param.renderer();
}


const addFormCreate = () => {
    openPopup(formAdd);
}

const editFormCreate = () => {
    nameChange.setAttribute('value', name.textContent);
    jobChange.setAttribute('value', job.textContent);
    openPopup(formEdit);
}

function sumbitCard(event) {
    event.preventDefault();
    const data = {}
    data.name = nameImage.value;
    data.link = urlImage.value; 
    const listItem = new Card(data, template);
    listItem.render(elements);
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

// renderList();
lala();
editButton.addEventListener('click', editFormCreate);
addButton.addEventListener('click', addFormCreate);
popupCard.addEventListener('submit', popupCreate);
formAdd.addEventListener('submit', sumbitCard);
formEdit.addEventListener('submit', formSubmitHandler);
cardCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
editCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
addCloseBtn.addEventListener('click', (event => {popupClose(event.target.closest('.popup'))}));
popupCard.addEventListener('click', onClickFormBackground);
formEdit.addEventListener('click', onClickFormBackground);
formAdd.addEventListener('click', onClickFormBackground);