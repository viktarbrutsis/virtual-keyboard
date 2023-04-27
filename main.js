//import { createButton } from "./js/createButton.js";
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
header.append(headerTitle, textArea);
body.append(buttonArea);

function createButton() {
   for (let i = 0; i < englishKeyboardArray.length; i++) {
      const button = document.createElement('div');
      button.classList.add('button');
      button.innerText = `${englishKeyboardArray[i].value}`;
      button.id = `${englishKeyboardArray[i].pressedShift}`;
      buttonArea.append(button);
   }

}
createButton(englishKeyboardArray);

const codeArray = document.querySelectorAll('.button');

console.log(codeArray);

codeArray.forEach(item => {
   item.addEventListener('click', () => {
      console.log(item.getAttribute('id'));
   });
});

document.addEventListener('keypress', function(event) {
   console.log(event.key);
   console.log(event.code);
 });







