import { russianKeyboardArray } from "./js/russianKeyboard.js";
import { englishKeyboardArray } from "./js/englishKeyboard.js";

//header and textarea
const body = document.querySelector('body'),
      header = document.createElement('header'),
      headerTitle = document.createElement('h1'),
      textArea = document.createElement('textarea');

let language = 'english',
    capsLock = false,
    shift = false,
    string = '';

// keyboard block
console.log('только обявили ' + language);
export const buttonArea = document.createElement('div');

buttonArea.classList.add('wrapper', 'button-area');
//buttonArea.innerText = 'Hello world';

body.append(header);
header.classList.add('wrapper');
header.classList.add('header');
headerTitle.innerText = 'RSS виртуальная клавиатура';
headerTitle.classList.add('header__title');
textArea.classList.add('wrapper', 'text-area');
//textArea.innerText = string;
header.append(headerTitle, textArea);
body.append(buttonArea);
textArea.focus();

const subtitleOne = document.createElement('p'),
      subtitleTwo = document.createElement('p');

subtitleOne.classList.add('subtitle');
subtitleTwo.classList.add('subtitle');


subtitleOne.innerText = 'The keyboard is created in Mac system';
subtitleTwo.innerText = 'To change the language press: Space + м';

body.append(subtitleOne, subtitleTwo);

function createButton(array) {
   for (let i = 0; i < array.length; i++) {
      const button = document.createElement('div');
      button.classList.add('button');
      button.innerText = `${array[i].value}`;
      button.id = `${array[i].code}`;
      buttonArea.append(button);
   }

}

function createCapsKeyboard(array) {
  for (let i = 0; i < array.length; i++) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.innerText = `${array[i].capsLocked}`;
    button.id = `${array[i].code}`;
    buttonArea.append(button);
 }
}

function init() {
  if (language === 'english') {
    //buttonArea.innerHTML = ``;
    createButton(englishKeyboardArray);
  }
  if (language === 'russian') {
    //buttonArea.innerHTML = ``;
    createButton(russianKeyboardArray);
  }
}

init();

function initCapsLetters() {
  if (language === 'english') {
    //buttonArea.innerHTML = ``;
    createCapsKeyboard(englishKeyboardArray);
  }
  if (language === 'russian') {
    //buttonArea.innerHTML = ``;
    createCapsKeyboard(russianKeyboardArray);
  }
}


//let codeArray = ['Escape', 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'fn', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const allButtons = document.querySelectorAll('.button');

function deleteTextarea() {
  buttonArea.innerHTML = ``;
}

//change language on real keyboard
let flag = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') flag = true;
    if(language === 'english' && event.code == 'KeyV' && flag) {
      language = 'russian';
      buttonArea.innerHTML = ``;
      init();
      flag = false;
    }
    if(language === 'russian' && event.code == 'KeyV' && flag) {
      language = 'english';
      buttonArea.innerHTML = ``;
      init();
      flag = false;
    }
});

//click buttons on real keyboard
document.addEventListener('keydown', (event) => {
  allButtons.forEach(elem => {
    if (event.code === elem.id) {
      allButtons.forEach(button => {
      button.classList.remove('button-pressed');
      })
      elem.classList.add('button-pressed');
      string += `${elem.innerText}`;
      textArea.innerText = string;
      // textArea.focus();
    }
    // if (event.code === elem.id && language === 'english') {
    //   console.log(elem.innerText);
    //   elem.classList.add('button-pressed');
    //   string += `${elem.innerText}`;
    //   textArea.innerText = string;
    // }
  });
});

allButtons.forEach(elem => {
  elem.addEventListener('click', (e) => {
    allButtons.forEach(button => {
      button.classList.remove('button-pressed');
    })
    console.log(e);
    elem.classList.add('button-pressed');
    console.log(elem.innerText);
    string += `${e.target.innerText}`;
    textArea.innerText = string;
    // textArea.focus();
  });
});

//caps
const capsButton = document.querySelector('#CapsLock');

document.addEventListener('click', (e) => {
  let button = e.target.id;
  if (button === 'CapsLock') {
    if (capsLock == false) {
      capsLock = true;
      capsButton.classList.add('button-pressed');
      if (language === 'russian') {
        buttonArea.innerHTML = ``;
        initCapsLetters(russianKeyboardArray);
      } else {
        buttonArea.innerHTML = ``;
        initCapsLetters(englishKeyboardArray);
      }
      console.log(capsLock);
    } else {
      capsLock = false;
      capsButton.classList.remove('button-pressed');
      buttonArea.innerHTML = ``;
      init();
    }
  }

});








