import { elements } from '../utils/contants.js';
import {Popup} from './Popup.js';

class PopupWithForm extends Popup{
    constructor(selector, {callback}){
        super(selector);
        this._callback = callback;
    }

    closePopup(){
        super.closePopup();
        this._popup.querySelector('.popup__list').reset();
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
        this._popup.querySelector('.popup__list').addEventListener('submit',(evt) => {
            evt.preventDefault();
            const obj = {};
            this._getInputValues(obj);
            this._callback(obj);
            this.closePopup();
        })
    }
}
export {PopupWithForm};