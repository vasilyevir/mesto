import {Popup} from './Popup.js';

class PopupWithDelete extends Popup{
    constructor(selector){
        super(selector);
        this._popupList = this._popup.querySelector('.popup__list');
    }

    setSubmitAction(action){
            this._handleSubmitCallback = action;
        }

    setEventListeners(){
        super.setEventListeners();
        this._popupList.addEventListener('submit',(evt) => {
            evt.preventDefault();
            this._handleSubmitCallback(this);
            this.closePopup();
        })
    }
}

export {PopupWithDelete};