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
