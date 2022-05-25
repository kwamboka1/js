// button event listeners
document.getElementById("to-metric-btn").addEventListener('click',() => {
    userInput("to-metric-btn");
});

document.getElementById("to-imp-btn").addEventListener('click',() => {
    userInput("to-imp-btn");
})

// function for user input
function userInput(btn) {
    const defaultMetric = document.getElementById("default-metric");
    let toMetricNo = document.getElementById("to-metric-no").value;

    let toImpNo = document.getElementById("to-imp-no").value;
    const defaultImp = document.getElementById("default-imp");

    if(btn === "to-metric-btn") { 
        //pass input number to function
        displayToMetric(toMetricNo);
        //clear out input field
        document.getElementById("to-metric-no").value = "";
        //display none to default unit values
        defaultMetric.classList.add('hide');
    }

    if(btn === "to-imp-btn") {
        displayToImp(toImpNo);
        document.getElementById("to-imp-no").value = "";
        defaultImp.classList.add('hide');
    }
}

function displayToMetric(number) {
    //variables for formulas
    const massNum = number / 2.205;
    const volNum = number * 3.785;
    const lengthNum = number / 3.281;
    //rendering div to DOM with results
    document.getElementById('metric-results').innerHTML = `
        <h3>Mass</h3>
        <p>${number} pounds = ${massNum.toFixed(2)} kilos</p>
        <h3>Volume</h3>
        <p>${number} gallons = ${volNum.toFixed(2)} liters</p>
        <h3>Length</h3>
        <p>${number} feet = ${lengthNum.toFixed(2)} meters</p>
    `
}

function displayToImp(number) {
    const massNum = number * 2.205;
    const volNum = number / 3.785;
    const lengthNum = number * 3.281;
    document.getElementById('impResults').innerHTML = `
        <h3>Mass</h3>
        <p>${number} kilos = ${massNum.toFixed(2)} pounds</p>
        <h3>Volume</h3>
        <p>${number} liters = ${volNum.toFixed(2)} gallons</p>
        <h3>Length</h3>
        <p>${number} meters = ${lengthNum.toFixed(2)} feet</p>
    `
}
