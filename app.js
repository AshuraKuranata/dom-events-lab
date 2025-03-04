/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target.innerText)
    })    
})
calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    if (event.target.classList.contains('number')) {
        display.innerText = display.innerText + event.target.innerText
        // Display number
    }
    if (event.target.innerText === '*') {
        // Multiply stored number with next input number
    }
})
/*-------------------------------- Functions --------------------------------*/
