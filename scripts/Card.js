import {popupClose, openPopup, popupCreate, escForm} from './utils.js'

export class Card{
    constructor(data, templateSelector){
        this._text = data.name;
        this._link = data.link;
        this._template = document.querySelector(templateSelector).content;
    }

    _toggleLike(){
        this._content.querySelector('.element__heart').classList.toggle('element__heart_active');
    }    

    _removeCard(){
        this._content.remove();
    }

    render = (container) => {
        this._content = this._template.querySelector('.element').cloneNode(true);
        this._content.querySelector('.element__image').src = this._link;
        this._content.querySelector('.element__text').textContent = this._text;

        this._content
        .querySelector('.element__image')
        .addEventListener('click',() =>{popupCreate(this._content)});
        this._content
        .querySelector('.element__btn-delete')
        .addEventListener('click',() => this._removeCard());
        this._content
        .querySelector('.element__heart')
        .addEventListener('click',() => {this._toggleLike()});

        container.prepend(this._content);
    }
}