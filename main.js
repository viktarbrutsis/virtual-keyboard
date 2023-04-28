import { russianKeyboardArray } from "./js/russianKeyboard.js";
import { englishKeyboardArray } from "./js/englishKeyboard.js";

//header and textarea
const body = document.querySelector('body'),
      header = document.createElement('header'),
      headerTitle = document.createElement('h1'),
      textArea = document.createElement('textarea');

let language = 'russian',
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

function createButton(array) {
   for (let i = 0; i < array.length; i++) {
      const button = document.createElement('div');
      button.classList.add('button');
      button.innerText = `${array[i].value}`;
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


//let codeArray = ['Escape', 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'fn', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

// codeArray.forEach(item => {
//    item.addEventListener('click', () => {
//       console.log(item.getAttribute('id'));
//    });
// });
const allButtons = document.querySelectorAll('.button');




// document.addEventListener('click', (elem) => {
//   console.log(elem.code);
//   console.log(elem.key);
//   allButtons.forEach(button => {
//     if (elem.key == button.id) {
//       console.log(button.id);
//       button.classList.add('button-pressed');
//     }
//   });
// });
//change the language
//const buttonAltLeft = document.querySelector('#Space'),
//      buttonSpace = document.querySelector('#MetaLeft');
//document.addEventListener('keydown', () => {
//  if (buttonAltLeft.repeat == true && buttonSpace.repeat == true) {
//    console.log('меняем язык');
//  }
//});

function deleteTextarea() {
  buttonArea.innerHTML = ``;
}

//change language on real kewboard
let flag = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') flag = true;
    if(language === 'english' && event.code == 'KeyV' && flag) {
      language = 'russian';
      buttonArea.innerHTML = ``;
      init();
      flag = false;
      document.addEventListener('keydown', (event) => {
        allButtons.forEach(elem => {
          if (event.code === elem.id) {
            elem.classList.add('button-pressed');
            string += `${event.key}`;
            textArea.innerText = string;
          }
        });
      });
      allButtons.forEach(elem => {
        elem.addEventListener('click', () => {
          elem.classList.add('button-pressed');
          console.log(elem.innerText);
          string += `${elem.innerText}`;
          textArea.innerText = string;
        });
      });
    }
    if(language === 'russian' && event.code == 'KeyV' && flag) {
      language = 'english';
      buttonArea.innerHTML = ``;
      init();
      flag = false;
      document.addEventListener('keydown', (event) => {
        allButtons.forEach(elem => {
          if (event.code === elem.id) {
            elem.classList.add('button-pressed');
            string += `${event.key}`;
            textArea.innerText = string;
          }
        });
      });
      allButtons.forEach(elem => {
        elem.addEventListener('click', () => {
          elem.classList.add('button-pressed');
          console.log(elem.innerText);
          string += `${elem.innerText}`;
          textArea.innerText = string;
        });
      });
    }
});

const buttonSpace = document.querySelector('#Space'),
      capsButton = document.querySelector('#Capslock');

buttonSpace.addEventListener('dblclick', () => {
  if (language === 'english') {
    deleteTextarea();
    createButton(russianKeyboardArray);
    language = 'russian';
    return language;
  }
  if (language === 'russian')  {
    deleteTextarea();
    createButton(englishKeyboardArray);
    language = 'english';
    return language;
  }
});

document.addEventListener('keydown', (event) => {
  allButtons.forEach(elem => {
    if (event.code === elem.id) {
      elem.classList.add('button-pressed');
      string += `${event.key}`;
      textArea.innerText = string;
    }
  });
});

allButtons.forEach(elem => {
  elem.addEventListener('click', () => {
    elem.classList.add('button-pressed');
    console.log(elem.innerText);
    string += `${elem.innerText}`;
    textArea.innerText = string;
  });
});
//capsButton.add('click', () => {
//  if (!capsLock) {
//    createButton
//  }
//});








