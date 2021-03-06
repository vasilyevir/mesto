export class Popup{
    constructor(selector){
        this._popup = document.querySelector(selector);
        this._escForm = this._escForm.bind(this);
    }

    closePopup(){
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._escForm);
    }   
    
    openPopup(){
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._escForm.bind(this));
    }

    _onClickFormBackground(event) {
        if (event.target !== event.currentTarget) {
            return;
        } else {
            this.closePopup();
        }
    }

    _escForm(evt){
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    setEventListeners(){
        this._popup.querySelector('.popup__btn-close').addEventListener('click',() =>{
            this.closePopup();
        })
        this._popup.addEventListener('click', this._onClickFormBackground.bind(this));
    }
}
