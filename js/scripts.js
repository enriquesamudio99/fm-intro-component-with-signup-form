const form = document.querySelector('#form');
const firstnameInput = document.querySelector('#firstnameInput');
const lastnameInput = document.querySelector('#lastnameInput');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const submitBtn = document.querySelector('#submitBtn');

const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

document.addEventListener("DOMContentLoaded", () => {

    submitBtn.addEventListener("click", function (e) {

        validateForm(e);

    });

}); 

function validateForm(e) {

    e.preventDefault();

    validateFirstname();
    validateLastname();
    validatePassword();
    validateEmail();

    const invalidInputs = document.querySelectorAll('.field.is-invalid');

    if(invalidInputs.length === 0) {
        form.submit();
    }

}

function validateFirstname() {
   
    const firstname = firstnameInput.value;

    if(firstname.length <= 0) {
        firstnameInput.parentElement.classList.add("is-invalid");
        invalidFeedbackText(firstnameInput, "First Name cannot be empty");
    } else {
        firstnameInput.parentElement.classList.remove("is-invalid");
        invalidFeedbackText(firstnameInput, ""); 
    }

}

function validateLastname() {
   
    const lastname = lastnameInput.value;

    if(lastname.length <= 0) {
        lastnameInput.parentElement.classList.add("is-invalid");
        invalidFeedbackText(lastnameInput, "Last Name cannot be empty");
    } else {
        lastnameInput.parentElement.classList.remove("is-invalid");
        invalidFeedbackText(lastnameInput, "");
    }

}

function validatePassword() {
   
    const password = passwordInput.value;

    if(password.length <= 0) {
        passwordInput.parentElement.classList.add("is-invalid");
        invalidFeedbackText(passwordInput, "Password cannot be empty");
    } else if(password.length <= 6) {
        passwordInput.parentElement.classList.add("is-invalid");
        invalidFeedbackText(passwordInput, "Password must contain more than 6 characters");
    } else {
        passwordInput.parentElement.classList.remove("is-invalid");
        invalidFeedbackText(passwordInput, "");
    }

}

function validateEmail() {

    const email = emailInput.value.toLowerCase();

    if(!email.match(reEmail)) {
        emailInput.parentElement.classList.add("is-invalid");
        invalidFeedbackText(emailInput, "Looks like this is not an email");
    } else {
        emailInput.parentElement.classList.remove("is-invalid");
        invalidFeedbackText(emailInput, "");
    }

}

function invalidFeedbackText(input, message) {

    const invalidFeedback = input.nextElementSibling;

    invalidFeedback.textContent = message;

}