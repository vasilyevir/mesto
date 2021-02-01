import {Popup} from './Popup.js';

class PopupWithForm extends Popup{
    constructor(selector, btnSave, {callback}){
        super(selector);
        this._callback = callback;
        this._form = this._popup.querySelector('.popup__list');
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._buttonText = this._popup.querySelector(btnSave).textContent;
    }

    closePopup(){
        super.closePopup();
        this._form.reset();
    }

    _getInputValues(obj){
        this._inputList.forEach(element => {
            const name = element.name;
            const value = element.value;
            obj[name] = value;
        });
    }

    buttonText(){
        return this._buttonText;
    }

    setEventListeners(){
        super.setEventListeners();
        console.log(this._popup);
        this._form.addEventListener('submit',(evt) => {
            evt.preventDefault();
            const obj = {};
            this._getInputValues(obj);
            this._callback(obj);
            this.closePopup();
        })
    }
}

export {PopupWithForm};