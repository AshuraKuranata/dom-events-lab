/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let storedNumber = 0;
let operator = null;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // console.log(event.target.innerText)
    })    
})
calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    if (event.target.classList.contains('number')) {
        display.innerText = display.innerText + event.target.innerText
    }
    if (event.target.innerText === '+') {
        storedNumber = display.innerText;
        console.log(storedNumber);
        operator = '+';
        display.innerText = null;
    }
    if (event.target.innerText === '=') {
        console.log(storedNumber)
        console.log(operator)
        if (operator === '+') {
            display.innerText = (storedNumber*1 + display.innerText*1);
            operator = null;
        }
    }
})
/*-------------------------------- Functions --------------------------------*/
