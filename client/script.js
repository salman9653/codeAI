//imports
import bot from './assets/bot.svg';
import user from './assets/user.svg';

// dom elements
const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

//variables
let loadInterval;

const loader = (element) => {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';
    if (element.textContent === '...'){
      element.textContent = '';
    }
  },300)
}