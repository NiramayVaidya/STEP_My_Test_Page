var myImage = document.querySelector('img');

myImage.onclick = function () {
    "use strict";
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/la-test-image.jpg') {
        myImage.setAttribute('src', 'images/la-test-image1.jpg');
    } else {
        myImage.setAttribute('src', 'images/la-test-image.jpg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    "use strict";
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ', have a look at the local tourist destinations in LA';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ', have a look at the local tourist destinations in LA';
}

myButton.onclick = function () {
    "use strict";
    setUserName();
};

