export class FormValidator {
    constructor(popupOpen){
        // this._formSelector = this._popupOpen.querySelector('.popup__list'),
        this._inputSelector = Array.from(popupOpen.querySelectorAll('.popup__input')),
        this._submitButtonSelector = popupOpen.querySelector('.popup__btn-save'),
        this._inactiveButtonClass = 'popup__btn-save_invalid',
        this._inputErrorClass = 'popup__input_state_invalid',
        this._popupOpen = popupOpen.querySelector('.popup__list')
    }
    
_showError(formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);

    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
}

_hideError(formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
}

_checkInputValidity(formElement, input) {
    if (input.checkValidity()) {
        this._hideError(formElement, input);
    } else {
        this._showError(formElement, input);
    }
}

_toggleButtonState(formElement, buttonElement) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.disabled = true;
    }
}

_setEventListener() {
    // const buttonElement = this._popupOpen.querySelector(this._submitButtonSelector)

    this._inputSelector.forEach((input) =>{
        input.addEventListener('input', (evt)=>{
            this._checkInputValidity(this._popupOpen, evt.target);
            this._toggleButtonState(this._popupOpen, this._submitButtonSelector);
        });
    });

    this._toggleButtonState(this._popupOpen, this._submitButtonSelector);
}

enableValidation = () => {
    // const formElements = Array.from(this._formSelector);
    if (this._popupOpen){
    this._popupOpen.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

    this._setEventListener();
    }
}
}
// enableValidation({
//     formSelector: '.popup__list',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__btn-save',
//     inactiveButtonClass: 'popup__btn-save_invalid',
//     inputErrorClass: 'popup__input_state_invalid'
// });
