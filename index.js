//document.getElementById().innerText = 5
// javascript

//initialization
let count = 0;

let countEl = document.getElementById("increment-btn");
let counter = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

function increment() {
  //increment the count  variable when the button is clicked
  count++;
  //change the count-el in the HTML to reflect the new count
  counter.innerText = count;
}

function save() {
  let countstr = counter + " - ";
  saveEL.textContent += countstr;
  console.log(count);
}
