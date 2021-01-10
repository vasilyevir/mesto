import {Popup} from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(selector, data){
        super(selector);
        this._popupText = data.popupText;
        this._popupImageSelector = data.popupImage;
        this._elementText = data.elementText;
        this._elementImage = data.elementImage;
    }

    openPopup(content){
        super.openPopup();
        this._popupImage = this._popup.querySelector(this._popupImageSelector)
        this._text = content.querySelector(this._elementText)
        this._popup.querySelector(this._popupText).textContent = this._text.textContent;
        this._popupImage.src = content.querySelector(this._elementImage).src;
        this._popupImage.alt = this._text.textContent
    }
}