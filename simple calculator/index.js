let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add(){
	sumEl.textContent = 'Sum: ' + (num1 + num2)
} // Adds num1 and num2 when user clicks on add button

function subtract(){
	sumEl.textContent = 'Difference: ' + (num1 - num2)
}
// Subtracts num1 and num2 when user clicks on subtract button

function divide(){
	sumEl.textContent = 'Division: ' + (num1 / num2)
}
 // divide num1 and num2 when user clicks divide

function multiply(){
	sumEl.textContent = 'Multiplication: ' + (num1 * num2)
}
 // multiplies num1 and num2 when user clicks multiply


// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
