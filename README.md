# dom-events-lab
<h1>Creating calculator through DOM events</h1>

<h2>Introduction</h2>
Here I am learning about the process of how requests might come through as a developer.  Typically the requests come through or are sorted as "user stories".

<h4>Example User Stories for this calculator lab</h4>

1. As a user, I want to be able to select numbers so that I can perform operations with them.
2. As a user, I want to be able to add two numbers together.
3. As a user, I want to be able to subtract one number from another.
4. As a user, I want to be able to multiply two numbers together.
5. As a user, I want to be able to divide one number by another.
6. As a user, I want to be able to see the output of the mathematical operation.
7. As a user, I want to be able to clear all operations and start from 0.

Updates will be made as each user story enhancement is completed.

<h2> User Story 1: Select Numbers </h2>

The first user story will be to enable the calculator to select numbers on the calculator.

Create a constant that captures all button inputs, selects the calculator, and selects the display for next steps:
``` JS
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')
```
From here, utilizing the basic code provided in the exercise, I built out the event listener on the calculator for the inputs for any of the numerical buttons that would then show up on the display.

``` JS
calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    if (event.target.classList.contains('number')) {
        display.innerText = display.innerText + event.target.innerText
    }
});
```
This now displays the inputs of the numbers into the display.

<h2> User Story 2: Adding Two Numbers </h2>

The next user story is to add two numbers together.  In this instance, I decided to break down into these steps:

* Have the code store the first number inputted by the user for the operation
* Have the code store the operator and clear the display for the user to input a second number
* When the equals button is pressed, the stored number and the displayed number would complete the operation, which in this case is addition.

Created some initial variables to house the first stored number and the operator
``` JS
let storedNumber = 0;
let operator = null
```

Built the calculator's target for the '+' operator.

Did research on StackOverflow to determine how to change a string back into a number in JS (current stored inputs are string values and cannot be operated upon):

A few options (parseInt, parseFloat, "*1").  Will utilize the latter option at this time.

Putting it all together, the calculator now has the addition function for two numbers:

``` JS
let storedNumber = 0;
let operator = null
let display.innerText = 0;

calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    if (event.target.classList.contains('number')) {
        display.innerText = display.innerText + event.target.innerText
    }
    if (event.target.innerText === '+') {
        storedNumber = display.innerText*1 + storedNumber*1;
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
```

<h2>User Story 3, 4, 5, & 6: Subtract, multiply, divide two numbers & see output</h2>

I already implemented the feature in the above code for the output of a mathematical operation (user story 6) above in the addition section.  Added functions will include for other math operations.

After implementation of the previous code for addition, I utilized the same framework and made additional versions for subtraction, division, and multiplication with the respective logic built out for equals:

``` JS
calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    if (event.target.classList.contains('number')) {

        display.innerText = display.innerText + event.target.innerText
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
});
```

*One interesting thing to note is that if the '=' sign is pressed after doing* '+' *or* '*', *the event will retrigger the stored value with the right operation successfully (**cool!**)*

*The same logic does not unfortunately work with the* '-' *or* '/' *call*


<h2>User Story 7: I want to be able to clear all operations and start from 0.</h2>

Created one final search event for the 'C' button on the calculator.  This button sets all the values back to null, clearing the operations, stored values in variables, and the display back to empty.

``` JS
calculator.addEventListener('click', (event) => {
    if (event.target.innerText === 'C') {
        storedNumber = null;
        display.innerText = null;
        operator = null;
    }
})
```

However, upon reading the requirement that the user wants to start from 0 and seeing the live example, I realized that I needed to make a couple more changes.

I updated the logic for all values that reset the display to '0' and created an 'if' construction if the initial display was '0' to just replace '0' or not add anything more if it were already '0'.

What the fix looked like is:

``` JS
display.innerText = 0

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
        display.innerText = 0;
        operator = null;
    }
})
```

And that's the completion of the lab!

---

<h3>Post-Script</h3>

Seeing where this is, there are a few updates/level-ups I'd be interested to pursue to improve on this:

* How to make hitting equals while the '/' or '-' operations are stored to have it keep calculating vs. swapping between the output and the stored value.
* Updating the operations so they can continue the operation calculation if another operator button is pressed before the equals sign.
* Cleaning up the code by making certain functions that seem related (i.e. operators) as a single function that can be referred vs typing out the whole code out again.