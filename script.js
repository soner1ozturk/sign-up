let body = document.querySelector('body');
let imageContainer = document.createElement('div');
imageContainer.className = 'imageContainer';
body.appendChild(imageContainer);

let odinLogoContainer = document.createElement('div');
odinLogoContainer.className = 'odinLogoContainer';
imageContainer.appendChild(odinLogoContainer);

let odinLogo = document.createElement('div');
odinLogo.className = 'odinLogo';
odinLogoContainer.appendChild(odinLogo);

let odinText = document.createElement('span');
odinText.textContent = 'ODIN';
odinText.className = 'odinText';
odinLogoContainer.appendChild(odinText);

//odinLogoContainer.textContent = 'ODIN';

let contentContainer = document.createElement('div');
contentContainer.className = 'contentContainer';
body.appendChild(contentContainer);


let headingContainer = document.createElement('div')
headingContainer.className = 'headingContainer';
contentContainer.appendChild(headingContainer);

headingContainer.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

let formContainer = document.createElement('div');
formContainer.className = 'formContainer';
contentContainer.appendChild(formContainer);

let formElement = document.createElement('form');
formElement.className = 'formElement';
formContainer.appendChild(formElement);

// Row 1: First Name + Last Name
let nameRow = document.createElement('div');
nameRow.className = 'formRow';
formElement.appendChild(nameRow);

let nameFieldGroup = document.createElement('div');
nameFieldGroup.className = 'fieldGroup';
nameRow.appendChild(nameFieldGroup);

let nameLabel = document.createElement('label');
nameLabel.textContent = 'First Name';
nameLabel.htmlFor = 'name-input';
nameLabel.className = 'formLabel';
nameFieldGroup.appendChild(nameLabel);

let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'John';
nameInput.className = 'formInput';
nameInput.id = 'name-input';
nameInput.required = true;
nameInput.minLength = 2;
nameFieldGroup.appendChild(nameInput);

let lastNameFieldGroup = document.createElement('div');
lastNameFieldGroup.className = 'fieldGroup';
nameRow.appendChild(lastNameFieldGroup);

let lastNameLabel = document.createElement('label');
lastNameLabel.textContent = 'Last Name';
lastNameLabel.htmlFor = 'lastname-input';
lastNameLabel.className = 'formLabel';
lastNameFieldGroup.appendChild(lastNameLabel);

let lastNameInput = document.createElement('input');
lastNameInput.type = 'text';
lastNameInput.placeholder = 'Doe';
lastNameInput.className = 'formInput';
lastNameInput.id = 'lastname-input';
lastNameInput.required = true;
lastNameInput.minLength = 2;
lastNameFieldGroup.appendChild(lastNameInput);

// Row 2: Email + Phone
let contactRow = document.createElement('div');
contactRow.className = 'formRow';
formElement.appendChild(contactRow);

let emailFieldGroup = document.createElement('div');
emailFieldGroup.className = 'fieldGroup';
contactRow.appendChild(emailFieldGroup);

let emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
emailLabel.htmlFor = 'email-input';
emailLabel.className = 'formLabel';
emailFieldGroup.appendChild(emailLabel);

let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'john.doe@example.com';
emailInput.className = 'formInput';
emailInput.id = 'email-input';
emailInput.required = true;
emailFieldGroup.appendChild(emailInput);

let phoneFieldGroup = document.createElement('div');
phoneFieldGroup.className = 'fieldGroup';
contactRow.appendChild(phoneFieldGroup);

let phoneLabel = document.createElement('label');
phoneLabel.textContent = 'Phone Number';
phoneLabel.htmlFor = 'phone-input';
phoneLabel.className = 'formLabel';
phoneFieldGroup.appendChild(phoneLabel);

let phoneInput = document.createElement('input');
phoneInput.type = 'tel';
phoneInput.placeholder = '555-555-5555';
phoneInput.className = 'formInput';
phoneInput.id = 'phone-input';
phoneInput.required = true;
phoneInput.pattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
phoneFieldGroup.appendChild(phoneInput);

// Row 3: Password + Confirm Password
let passwordRow = document.createElement('div');
passwordRow.className = 'formRow';
formElement.appendChild(passwordRow);

let passwordFieldGroup = document.createElement('div');
passwordFieldGroup.className = 'fieldGroup';
passwordRow.appendChild(passwordFieldGroup);

let passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
passwordLabel.htmlFor = 'password-input';
passwordLabel.className = 'formLabel';
passwordFieldGroup.appendChild(passwordLabel);

let passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.className = 'formInput';
passwordInput.id = 'password-input';
passwordInput.required = true;
passwordInput.minLength = 6;
passwordFieldGroup.appendChild(passwordInput);

let confirmPasswordFieldGroup = document.createElement('div');
confirmPasswordFieldGroup.className = 'fieldGroup';
passwordRow.appendChild(confirmPasswordFieldGroup);

let confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = 'Confirm Password';
confirmPasswordLabel.htmlFor = 'confirm-password-input';
confirmPasswordLabel.className = 'formLabel';
confirmPasswordFieldGroup.appendChild(confirmPasswordLabel);

let confirmPasswordInput = document.createElement('input');
confirmPasswordInput.type = 'password';
confirmPasswordInput.placeholder = 'Confirm Password';
confirmPasswordInput.className = 'formInput';
confirmPasswordInput.id = 'confirm-password-input';
confirmPasswordInput.required = true;
confirmPasswordInput.minLength = 6;
confirmPasswordFieldGroup.appendChild(confirmPasswordInput);


let buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';
contentContainer.appendChild(buttonContainer);

let createButton = document.createElement('button');
createButton.className = 'createButton';
createButton.textContent = 'Create Account';
createButton.type = 'submit';
buttonContainer.appendChild(createButton);

// Add form submit validation
formElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    
    // Check if form is valid using HTML5 validation
    if (formElement.checkValidity()) {
        // Additional check for password confirmation
        if (passwordInput.value === confirmPasswordInput.value) {
            alert("Account Created Successfully!");
        } else {
            alert("Passwords do not match!");
            confirmPasswordInput.focus();
        }
    } else {
        alert("Please fill out all fields correctly!");
        // Focus on the first invalid field
        const firstInvalidField = formElement.querySelector(':invalid');
        if (firstInvalidField) {
            firstInvalidField.focus();
        }
    }
});