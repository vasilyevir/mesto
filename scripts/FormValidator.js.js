export class FormValidator {
    constructor(){
        
    }
    
_showError(formElement, input, {inputErrorClass}) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);

    errorElement.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);
}

_hideError(formElement, input, {inputErrorClass}) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(inputErrorClass);
}

_checkInputValidity(formElement, input, {inputErrorClass}) {
    if (input.checkValidity()) {
        hideError(formElement, input, {inputErrorClass});
    } else {
        showError(formElement, input, {inputErrorClass});
    }
}

_toggleButtonState(formElement, buttonElement, {inactiveButtonClass}) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    }
}

_setEventListener(formElement,{inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}) {
    const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector)

    inputElements.forEach((input) =>{
        input.addEventListener('input', (evt)=>{
            checkInputValidity(formElement, evt.target, {inputErrorClass});
            toggleButtonState(formElement, buttonElement, {inactiveButtonClass});
        });
    });

    toggleButtonState(formElement, buttonElement, {inactiveButtonClass});
}

enableValidation({inputSelector, formSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass}){
    const formElements = Array.from(document.querySelectorAll(formSelector));
    
    formElements.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListener(form, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass});
    });
}
}
enableValidation({
    formSelector: '.popup__list',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-save_invalid',
    inputErrorClass: 'popup__input_state_invalid'
});
