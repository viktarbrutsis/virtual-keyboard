import { russianKeyboardArray } from "./js/russianKeyboard.js";
import { englishKeyboardArray } from "./js/englishKeyboard.js";

//header and textarea
const body = document.querySelector('body'),
      header = document.createElement('header'),
      headerTitle = document.createElement('h1'),
      textArea = document.createElement('textarea');

// keyboard block
//5 rows
//const rowsLength = [14, 14, 13, 12, 10];
export const buttonArea = document.createElement('div');

buttonArea.classList.add('wrapper', 'button-area');
//buttonArea.innerText = 'Hello world';

body.append(header);
header.classList.add('wrapper');
header.classList.add('header');
headerTitle.innerText = 'RSS виртуальная клавиатура';
headerTitle.classList.add('header__title');
textArea.classList.add('wrapper', 'text-area');
textArea.innerText = 'kurva i mrazota';
header.append(headerTitle, textArea);
body.append(buttonArea);

function createButton() {
   for (let i = 0; i < englishKeyboardArray.length; i++) {
      const button = document.createElement('div');
      button.classList.add('button');
      button.innerText = `${englishKeyboardArray[i].value}`;
      button.id = `${englishKeyboardArray[i].code}`;
      buttonArea.append(button);
   }

}
createButton(englishKeyboardArray);

let codeArray = ['Escape', 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'fn', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

// codeArray.forEach(item => {
//    item.addEventListener('click', () => {
//       console.log(item.getAttribute('id'));
//    });
// });
const allButtons = document.querySelectorAll('.button');

console.log(allButtons);

document.addEventListener('keydown', (event) => {
  allButtons.forEach(elem => {
    if (event.code === elem.id) {
      elem.classList.add('button-pressed');
    }
  });
});

// document.addEventListener('keydown', (elem) => {
//   console.log(elem.code);
//   console.log(elem.key);
//   allButtons.forEach(button => {
//     if (elem.key == button.id) {
//       console.log(button.id);
//       button.classList.add('button-pressed');
//     }
//   });
// });







