//document.getElementById().innerText = 5
// javascript

//initialization
let count = 0

let countEl = document.getElementById("count-el")
let counter = document.getElementById("reset")
let saveEL = document.getElementById("save-el")

function increment() {
  //increment the count  variable when the button is clicked
  count +=1
  //change the count-el in the HTML to reflect the new count
  countEl.innerText = count
}

function save() {
  let myCount = countEl.innerText + " - " //a variable that contains both the count and the dash separator
  saveEL.textContent += myCount;
  console.log(count)

  countEl.textContent = 0
  count = 0
}

