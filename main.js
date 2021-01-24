const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myButton = document.querySelector('button');
let myVariable = document.querySelector('h1');
myVariable = 'Bob';

alert('hello!');
let myImage = document.querySelector('img');

let iceCream = 'チョコレート';
if(iceCream === 'チョコレート') {
  alert('やった、チョコレートアイス大好き！');
} else {
  alert('あれれ、でもチョコレートは私のお気に入り......');
}


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox.png') {
      myImage.setAttribute ('src','blackpink.png');
    } else {
      myImage.setAttribute ('src','firefox.png');
    }
}



let myHTML = document.querySelector('html');
myHTML.onclick = function() {};

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}



