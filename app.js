/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let storedNumber = 0;
let operator = null;
display.innerText = 0

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target.innerText)
    })    
})
calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        if (display.innerText === '0') {
            display.innerText = display.innerText*1 + event.target.innerText*1
        } else display.innerText = display.innerText + event.target.innerText
    }
    if (event.target.innerText === '+') {
        storedNumber = display.innerText;
        operator = '+';
        display.innerText = 0;
    }
    if (event.target.innerText === '-') {
        storedNumber = display.innerText;
        operator = '-';
        display.innerText = 0;
    }
    if (event.target.innerText === '*') {
        storedNumber = display.innerText;
        operator = '*';
        display.innerText = 0;
    }
    if (event.target.innerText === '/') {
        storedNumber = display.innerText;
        operator = '/';
        display.innerText = 0;
    }
    if (event.target.innerText === '=') {
        if (operator === '+') {
            display.innerText = storedNumber*1 + display.innerText*1;
        }
        if (operator === '-') {
            display.innerText = storedNumber*1 - display.innerText*1;
        }
        if (operator === '*') {
            display.innerText = storedNumber*1 * display.innerText*1;
        }
        if (operator === '/') {
            display.innerText = storedNumber*1 / display.innerText*1;
        }
    }
    if (event.target.innerText === 'C') {
        storedNumber = null;
        operator = null;
        display.innerText = 0;
    }
})
/*-------------------------------- Functions --------------------------------*/
