import {Popup} from './Popup.js';

class PopupWithDelete extends Popup{
    constructor(selector, {callback}){
        super(selector);
        this._callback = callback;
        this._popupList = this._popup.querySelector('.popup__list');
    }

    setEventListeners(){
        super.setEventListeners();
        console.log(this._popup);
        this._popupList.addEventListener('submit',(evt) => {
            evt.preventDefault();
            this._callback();
            this.closePopup();
        })
    }
}

export {PopupWithDelete};