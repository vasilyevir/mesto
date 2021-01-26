export class FormValidator {
    constructor(popupOpen, data){
        this._inputSelector = data.inputSelector,
        this._submitButtonSelector = data.submitButtonSelector,
        this._inactiveButtonClass = data.inactiveButtonClass,
        this._inputErrorClass = data.inputErrorClass,
        this._popupOpen = document.querySelector(popupOpen).querySelector('.popup__list')
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

resetValidation() {
    this._inputSelector.forEach((inputElement) => {
        // console.log(inputElement)
      this._hideError(this._popupOpen ,inputElement)
    });

    this._toggleButtonState(this._popupOpen, this._submitButtonSelector);
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

    this._inputSelector.forEach((input) =>{
        input.addEventListener('input', (evt)=>{
            this._checkInputValidity(this._popupOpen, evt.target);
            this._toggleButtonState(this._popupOpen, this._submitButtonSelector);
        });
    });

    this._toggleButtonState(this._popupOpen, this._submitButtonSelector);
}

enableValidation(){
    if (this._popupOpen){
    this._popupOpen.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

    this._setEventListener();
    }
}
}