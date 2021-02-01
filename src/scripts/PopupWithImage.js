import {Popup} from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(selector, data){
        super(selector);
        this._popupText = data.popupText;
        this._popupImageSelector = data.popupImage;
        this._elementText = data.elementText;
        this._elementImage = data.elementImage;
        this._popupImage = this._popup.querySelector(this._popupImageSelector)
    }

    openPopup(text, link){
        super.openPopup();
        this._popup.querySelector(this._popupText).textContent = text;
        this._popupImage.src = link;
        this._popupImage.alt = text
    }
}