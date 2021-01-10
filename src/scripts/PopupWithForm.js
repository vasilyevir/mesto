import {Popup} from './Popup.js';

class PopupWithForm extends Popup{
    constructor(selector, {callback}){
        super(selector);
        this._callback = callback;
        this._popupList = this._popup.querySelector('.popup__list');
    }

    closePopup(){
        super.closePopup();
        const buttonElement = this._popupList.querySelector('.popup__btn-save');
        buttonElement.classList.add('popup__btn-save_invalid');
        buttonElement.disabled = true;
        this._popupList.reset();
    }

    _getInputValues(obj){
        const val = this._popup.querySelectorAll('.popup__input');
        val.forEach(element => {
            const name = element.name;
            const value = element.value;
            obj[name] = value;
        });
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupList.addEventListener('submit',(evt) => {
            evt.preventDefault();
            const obj = {};
            this._getInputValues(obj);
            this._callback(obj);
            this.closePopup();
        })
    }
}

export {PopupWithForm};