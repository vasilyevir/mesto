export class FormValidator {
    constructor(formSelector, data){
        this._inputList = data.inputList,
        this._submitButton = data.submitButton,
        this._inactiveButtonClass = data.inactiveButtonClass,
        this._inputErrorClass = data.inputErrorClass,
        this._form = document.querySelector(formSelector).querySelector('.popup__list')
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
    this._inputList.forEach((inputElement) => {
        // console.log(inputElement)
      this._hideError(this._form ,inputElement)
    });

    this._toggleButtonState(this._form, this._submitButton);
  }

_checkInputValidity(formElement, input) {
    if (input.checkValidity()) {
        this._hideError(formElement, input);
    } else {
        this._showError(formElement, input);
    }
}

_toggleButtonState() {
    if (this._form.checkValidity()) {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    } else {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }
}

_setEventListener() {

    this._inputList.forEach((input) =>{
        input.addEventListener('input', (evt)=>{
            this._checkInputValidity(this._form, evt.target);
            this._toggleButtonState(this._form, this._submitButton);
        });
    });

    this._toggleButtonState();
}

enableValidation(){
    if (this._form){
    this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

    this._setEventListener();
    }
}
}