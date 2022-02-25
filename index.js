//document.getElementById().innerText = 5
// javascript

 
 //initialization
 let saveEL = document.getElementById(save-el)
 let countEl = document.getElementById(count-el)

 let count = 0

 function increment(){
 	//increment the count  variable when the button is clicked 
 	count += 1
 	//change the count-el in the HTML to reflect the new count
 	countEl.innerText = count

 }

 function save(){
 	let countstr = count + " - " 
 	saveEL.textContent += countstr   
 	console.log(count)
 
 }


