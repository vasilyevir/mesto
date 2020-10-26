function showError(formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);

    errorElement.textContent = input.validationMessage;
    input.classList.add('form__input_state_invalid');
}

function hideError(formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove('form__input_state_invalid');
}

function checkInputValidity(formElement, input) {
    if (input.checkValidity()) {
        hideError(formElement, input);
        console.log(formElement)
    } else {
        showError(formElement, input);
        console.log(formElement)
    }
}

function toggleButtonState(formElement, buttonElement) {
    if (formElement.checkValidity()) {
        buttonElement.classList.remove('form__btn-save_invalid');
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add('form__btn-save_invalid');
        buttonElement.disabled = true;
    }
}

function setEventListener(formElement) {
    const inputElements = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__btn-save')

    inputElements.forEach((input) =>{
        input.addEventListener('input', (evt)=>{
            checkInputValidity(formElement, evt.target);
            toggleButtonState(formElement, buttonElement);
        });
    });

    toggleButtonState(formElement, buttonElement);
}

function enableValidation(){
    const formElements = Array.from(document.querySelectorAll('.form__list'));
    
    formElements.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListener(form);
    });
}

enableValidation();