// "use strict"

// window.onload

// function init() {
//     const greetBtn = document.getElementById("greetBtn");
//     greetBtn.onclick
// }

// alert("Hi");

"use strict"
// connecting an event to an event handler
window.onload = init;
// In the function init
function init() {
    let addBtn = document.getElementById("addBtn"); //find the button
    addBtn.onclick = onAddBtnClicked; //the connection 
}
// new function
function onAddBtnClicked() {
    let fNumber = num1.value;
    let sNumber = num2.value;
    let displayNumber = Number(fNumber) + Number(sNumber);
    document.getElementById("answer").innerHTML = displayNumber;
}