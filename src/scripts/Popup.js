import {FormValidator} from './FormValidator.js';

export class Popup{
    constructor(selector){
        this._popup = document.querySelector(selector);
    }

    closePopup(){
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown',() => { this._escForm() });
    }   
    
    openPopup(){
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown',(evt) =>{this._escForm(evt)});
        this._popup.addEventListener('click',(evt)=>{this._onClickFormBackground(evt)});
        const Validation = new FormValidator(this._popup);
        Validation.enableValidation();
        this.setEventListeners();
    }

    _onClickFormBackground(event) {
        if (event.target !== event.currentTarget) {
            return;
        } else {
            this.closePopup();
        }
    }

    _escForm(evt){
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    setEventListeners(){
        this._popup.querySelector('.popup__btn-close').addEventListener('click',() =>{
            this.closePopup();
        })
    }
}