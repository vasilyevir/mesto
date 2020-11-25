import {popupText, popupImage, elementText, elementImage} from '../utils/contants.js';
import {Popup} from './Popup.js';
export default class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
    }

    openPopup(content){
        super.openPopup();
        this._popup.querySelector(popupText).textContent = content.querySelector(elementText).textContent
        this._popup.querySelector(popupImage).src = content.querySelector(elementImage).src
    }
}