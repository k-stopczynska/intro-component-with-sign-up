const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('.main-form');

form.addEventListener('submit', (e) => {

let emailString = email.value;
const regexEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{1,3})+$/;

let firstString = firstName.value;
let lastString = lastName.value;
let passwordString = password.value;

function validateForm(emailString) {
   return regexEmail.test(emailString)
};

function errorMessage(element, message) {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');
     const exclamationDisplay = document.querySelector('.exclamation');
     element.classList.add('exclamation');
     errorDisplay.innerText = message;
     const formInput = inputControl.querySelector('.form-input');
     formInput.style.border = '2px solid var(--red)';
     formInput.style.color = 'var(--red)';
 };
if (firstString === '' || firstString === null) {
    e.preventDefault();
    errorMessage(firstName, "First Name cannot be empty");
}
if (lastString === '' || lastString === null) {
    e.preventDefault();
    errorMessage(lastName, "Last Name cannot be empty");
}
if (passwordString === '' || passwordString === null) {
    e.preventDefault();
    errorMessage(password, "Password cannot be empty");
}
if (emailString === '' || emailString === null) {
    e.preventDefault();
    errorMessage(email, "Email cannot be empty");
}
if (!validateForm(emailString)) {
    e.preventDefault();
    errorMessage(email, "Looks like this is not an email");
}

});
