import {Popup} from './Popup.js';

class PopupWithForm extends Popup{
    constructor(selector, {callback}){
        super(selector);
        this._callback = callback;
    }

    closePopup(){
        super.closePopup();
        const val = this._popup.querySelectorAll('.popup__input');
        val.forEach(element =>{
            element.value = '';
        })
    }

    _getInputValues(obj){
        const val = this._popup.querySelectorAll('.popup__input');
        val.forEach(element => {
            const Name = element.name;
            const Value = element.value;
            obj[Name] = Value
        });
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.querySelector('.popup__btn-save').addEventListener('click',(evt) => {
            evt.preventDefault();
            const obj = {};
            this._getInputValues(obj);
            this._callback(obj);
            this.closePopup();
        })
    }
}
export {PopupWithForm};