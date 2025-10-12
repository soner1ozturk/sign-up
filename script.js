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

