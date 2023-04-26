// import { createButton } from "./js/createButton";
import { englishKeyboardArray } from "./js/englishKeyboard.js";

//header and textarea
const body = document.querySelector('body'),
      header = document.createElement('header'),
      headerTitle = document.createElement('h1'),
      textArea = document.createElement('textarea');

body.append(header);
header.classList.add('wrapper');
header.classList.add('header');
headerTitle.innerText = 'RSS виртуальная клавиатура';
headerTitle.classList.add('header__title');
textArea.classList.add('wrapper', 'text-area');
header.append(headerTitle, textArea);

// keyboard block
//5 rows
//const rowsLength = [14, 14, 13, 12, 10];




