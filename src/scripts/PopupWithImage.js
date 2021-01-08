import {popupText, popupImage, elementText, elementImage} from '../utils/contants.js';
import {Popup} from './Popup.js';
export default class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
    }

    openPopup(content){
        super.openPopup();
        this._popupImage = this._popup.querySelector(popupImage)
        this._text = content.querySelector(elementText)
        this._popup.querySelector(popupText).textContent = this._text.textContent
        this._popupImage.src = content.querySelector(elementImage).src;
        this._popupImage.alt = this._text.textContent
    }
}