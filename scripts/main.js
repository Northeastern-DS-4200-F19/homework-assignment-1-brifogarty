// IMAGE CHANGER:
// assigns the img element to the variable
let myImage = document.querySelector('img');

// changes the src of myImage depending on the current image
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

// WELCOME MESSAGE:
// assigns the button and h1 elements to respective variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// prompts the user to enter their name, locally stores the input, and updates the h1 element
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

// retrieves a stores name, otherwise prompts the user
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// assigns the buttons onclick property to the setUserName function
myButton.onclick = function() {
  setUserName();
}
