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

let formContainer = document.createElement('div');
formContainer.className = 'formContainer';
contentContainer.appendChild(formContainer);


let buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';
contentContainer.appendChild(buttonContainer);
