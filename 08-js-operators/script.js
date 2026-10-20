// ============================================================
// 08 — JavaScript Operators
// Open DevTools → Console to see all output.
// ============================================================


// ----------------------------------------------------------
// 1. Arithmetic Operators
// ----------------------------------------------------------
console.log("--- Arithmetic ---");
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(20 % 3); // 1  ← remainder
console.log(2 ** 5); // 8  ← exponentiation

// Modulus: check even or odd
console.log(10 % 2); // 0 → even
console.log(11 % 2); // 1 → odd

// + with strings → concatenation
console.log("Hello" + " " + "World"); // Hello World
console.log("5" + 5); // "55" ← watch out!


// ----------------------------------------------------------
// 2. Assignment Operators
// ----------------------------------------------------------
console.log("--- Assignment ---");
let score = 10;
score +=  5;
console.log(score); // 15
score -= 3;
console.log(score); // 12
score *= 2;
console.log(score); // 24

let count = 10;
// count = count + 1 //
// console.log(count);
count++; // same as: count = count + 1  
count += 5 // next line would be 6
console.log(count); // 16
count++;
console.log(count); // 17
count--; //16
 count -= 10
console.log(count); // 6


// ----------------------------------------------------------
// 3. Comparison Operators
// ----------------------------------------------------------
console.log("--- Comparison ---");
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 10);  // true
console.log(5 === 5);  // true
console.log(5 !== "5");// true
// !yes == no
// !no == yes


// ----------------------------------------------------------
// 4. == vs ===
// ----------------------------------------------------------
console.log("--- == vs === ---");
console.log(5 == "5");  // true  ← type coercion happens
console.log(5 === "5"); // false ← strict, no coercion
console.log(0 == false);  // true // 0 = false, 1 = true
console.log(0 === false); //  false
console.log(!false); // true
console.log(!true); //false

console.log(0 !== 0); //false // strict, type check
console.log(0 != 0); // false  less strict or no type check
console.log(0 !== "0"); // true
// compare non integers

console.log('mango' == 'mango');


// ----------------------------------------------------------
// 5. Logical Operators
// ----------------------------------------------------------
console.log("--- Logical ---");
const age = 20;
const hasId = true;

// AND, OR
// &&, ||

// true && true = true
// true && false = false; 
// true && true && true && true && false = false
// false && false = false
// true || true = true
// false || false || false || false || true  || 1 = true
// true || false = true
// false || false = false

console.log(false && true || true || false); // true
console.log(false && true || true && false); // false

            // true   &&   true            true
console.log(age >= 18 && hasId === true); // true  (both true)
console.log(age >= 18 && !hasId); // false (second is false)

const isAdmin = false;
const isOwner = true;
console.log(isAdmin || isOwner); // true (at least one true)

console.log(!true);  // false
console.log(!false); // true


// ----------------------------------------------------------
// 6. Ternary Operator
// ----------------------------------------------------------
console.log("--- Ternary ---");
const userAge = 27;
const status = userAge >=18 ? "Adult" : "Minor";

let status2 
if(userAge >=18 ){
status2 = "Adult"
} else{
  status2 = 'Minor'
}

console.log(status); // Minor
console.log(status2);

const points = 75;
const result = points >= 50 ? "Pass" : "Fail";
console.log(result); // Pass


// ----------------------------------------------------------
// 7. Operator Precedence
// ----------------------------------------------------------
console.log("--- Precedence ---");
console.log(10 + 5 * 2);    // 20 (multiplication first)
console.log((10 + 5) * 2);  // 30 (parentheses first)


// ----------------------------------------------------------
// 8. Type Conversion
// ----------------------------------------------------------
console.log("--- Type Conversion ---");
const ageStr = "20";
console.log(typeof ageStr);          // string
console.log(typeof Number(ageStr));  // number
console.log(Number(ageStr) + 5);     // 25

console.log(String(100));            // "100"
console.log(Boolean(0));             // false
console.log(Boolean("hello"));       // true
console.log(Boolean(""));            // false
console.log(Boolean(null));          // false


// ----------------------------------------------------------
// 9. Interactive calculator on the page
// Reads values from inputs and displays the result
// ----------------------------------------------------------
function calculate() {
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  const op   = document.querySelector("#operator").value;
  const resultEl = document.querySelector("#calc-result");

  let output;

  if (op === "+")       output = num1 + num2;
  else if (op === "-")  output = num1 - num2;
  else if (op === "*")  output = num1 * num2;
  else if (op === "/")  output = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
  else if (op === "%")  output = num1 % num2;
  else if (op === "**") output = num1 ** num2;

  resultEl.textContent = `Result: ${output}`;
  resultEl.classList.add("has-result");
}


// ----------------------------------------------------------
// 10. Ternary demo on page
// ----------------------------------------------------------
function checkAge() {
  const inputAge = Number(document.querySelector("#age-input").value);
  const ageResultEl = document.querySelector("#age-result");

  const label = inputAge >= 18 ? "Adult ✅" : "Minor ❌";
  const isAdult = inputAge >= 18;

  ageResultEl.textContent = `${inputAge} years old → ${label} (isAdult: ${isAdult})`;
  ageResultEl.className   = "result-display " + (isAdult ? "result-pass" : "result-fail");
}


// ----------------------------------------------------------
// 11. == vs === visual demo
// ----------------------------------------------------------
function compareValues() {
  const val1 = document.querySelector("#cmp1").value;
  const val2 = document.querySelector("#cmp2").value;
  const output = document.querySelector("#cmp-output");

  // Try to coerce to number for loose comparison
  const loose  = val1 == val2;
  const strict = val1 === val2;

  output.innerHTML =
    `<span class="cmp-row"><code>${val1} ==  ${val2}</code> → <strong>${loose}</strong>  (loose)</span>` +
    `<span class="cmp-row"><code>${val1} === ${val2}</code> → <strong>${strict}</strong> (strict)</span>`;
}
