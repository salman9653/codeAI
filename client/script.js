// imports
import bot from './assets/bot.svg';
import user from './assets/user.svg';

// dom elements
const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

// variables
let loadInterval;

// Loader animation
const loader = (element) => {
  element.textContent = '';
  loadInterval = setInterval(() => {
    element.textContent += '.';
    if (element.textContent === '...'){
      element.textContent = '';
    }
  },300)
}

// Typing animation
const tyeText = ( element, text ) => {
  let index = 0;
  let interval = setInterval(() => {
    if(index < text.length){
      element.innerHtml += text.chartAt(index);
      index++;
    }else {
      clearInterval(interval);
    }
  }, 20);
}

const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexdecStr = randomNumber.toString(16)

  return `id-${timestamp}-${hexdecStr}`;
}

const chatStripe = (isAi, value, uniqueId) => {
  return(
    `
      <div class="wrapper ${isAi && 'ai'}">
        <div class='chat'>
          <div class='profile'>
            <img
              src='${ isAi ? bot :user }'
              alt='${ isAi ? "bot" : "user" }'
            />
          </div>
          <div class='message' id=${uniqueId}>${value}</div>
        </div>
      </div>
    `
  )
}