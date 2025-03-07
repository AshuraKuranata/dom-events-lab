/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let storedNumber = 0;
let secondValue = 0;
let operator = null;
display.innerText = 0;

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
    if (event.target.classList.contains('operator')) {
        storedNumber = display.innerText;
        if (event.target.innerText === '+') {
            operator = '+';
            secondValue = 0;
        }
        if (event.target.innerText === '-') {
            operator = '-';
            secondValue = 0;
        }
        if (event.target.innerText === '*') {
            operator = '*';
            secondValue = 0;
        }
        if (event.target.innerText === '/') {
            operator = '/';
            secondValue = 0;
        }
        if (event.target.innerText === 'C') {
            storedNumber = 0;
            secondValue = 0;
            operator = null;
        }
        display.innerText = '0';
    }
    if (event.target.innerText === '=') {
        if (secondValue === 0) {
            secondValue = display.innerText;
            if (operator === '+') {
                display.innerText = storedNumber*1 + secondValue*1;
                storedNumber = display.innerText;
            }
            if (operator === '-') {
                display.innerText = storedNumber*1 - secondValue*1;
                storedNumber = display.innerText;
            }
            if (operator === '*') {
                display.innerText = storedNumber*1 * secondValue*1;
                storedNumber = display.innerText;
            }
            if (operator === '/') {
                if (secondValue === '0') {
                    display.innerText = 'ERROR'
                } else{
                display.innerText = storedNumber*1 / secondValue*1;
                storedNumber = display.innerText;
                }
            }
        } else if (secondValue !== 0) {
            if (operator === '+') {
                display.innerText = storedNumber*1 + secondValue*1;
                storedNumber = display.innerText
            }
            if (operator === '-') {
                display.innerText = storedNumber*1 - secondValue*1;
                storedNumber = display.innerText
            }
            if (operator === '*') {
                display.innerText = storedNumber*1 * secondValue*1;
                storedNumber = display.innerText
            }
            if (operator === '/') {
                display.innerText = storedNumber*1 / secondValue*1;
                storedNumber = display.innerText
            }
        }
    }
})
/*-------------------------------- Functions --------------------------------*/