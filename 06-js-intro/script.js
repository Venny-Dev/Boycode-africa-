// ============================================================
// 06 — JavaScript Introduction
// Open this page in Chrome, then open DevTools → Console
// to see the output of console.log() calls.
// ============================================================


// ----------------------------------------------------------
// 1. console.log() — printing to the console
// ----------------------------------------------------------
// console.log("Hello Boycode academy");
// console.log("Victor");
// console.log(25);
console.log(10 + 5);


// ----------------------------------------------------------
// 2. JavaScript statements
// Each line below is one statement.
// ----------------------------------------------------------
// let name = "Victor";
// console.log(name);
let academy = "boycode"
console.log(academy);
// 25 !== "25"

let age = 25
let number = 4
console.log(age * 4)
console.log('25 * 4')


// ----------------------------------------------------------
// 3. Comments
// JavaScript ignores comments when running your code.
// ----------------------------------------------------------

// This is a single-line comment

/*
  This is a
  multi-line comment
*/

console.log("Comments are for developers, not the engine.");


// ----------------------------------------------------------
// 4. What JavaScript can do — a quick taste
// Open the page in Chrome and click the button in the demo.
// The button uses an onclick handler defined in index.html.
// ----------------------------------------------------------

// Change text content of an element on the page
function changeHeading() {
  document.querySelector("#demo-heading").textContent = "JavaScript changed this!";
}

// Change CSS styles dynamically
function changeStyle() {
  const box = document.querySelector("#demo-box");
  box.style.background = "#4f46e5";
  box.style.color = "#ffffff";
  box.style.padding = "20px";
  box.textContent = "Style changed with JavaScript!";
}

// Alert demo
function showAlert() {
  alert("Hello from JavaScript!");
}
