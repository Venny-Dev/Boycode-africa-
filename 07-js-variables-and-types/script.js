// ============================================================
// 07 — JavaScript Variables & Data Types
// Open DevTools → Console to see all output.
// ============================================================


// ----------------------------------------------------------
// 1. let — value can change
// ----------------------------------------------------------
// console.log(age);
let age = 20;
console.log("age:", age);

age = 21; // reassignment is fine with let
console.log("age after update:", age);


// let, const, var 


// ----------------------------------------------------------
// 2. const — value must not be reassigned
// ----------------------------------------------------------
const country = "Nigeria"; //constant
console.log("country:", country);

// Uncommenting the line below will throw a TypeError:
// country = "Ghana";


// ----------------------------------------------------------
// 3. var — old syntax, avoid in new code
// ----------------------------------------------------------
// console.log(city);

var city = "Lagos";
console.log("city:", city);

city = 'Abuja' 
console.log("city after reassigning: ",  city);


// var > let > const
 
// let isButtonOpen = false 

// if (isButtonOpen === true ){
//   console.log('open modal');
// } else{
//   console.log('close mdal');
// }


// ----------------------------------------------------------
// 4. Strings
// ----------------------------------------------------------

// console.log('My name is ' + 'victor');
// 'victor', "victor", `victor`  ``````


// console.log("Victor ${firstName}", `Victor ${firstName}`);
const firstName = "Friday";
const greeting = `Hello, ${firstName}!`;
// console.log(greeting);

const a = 10;
const b = 5;
// console.log(`${a * b}  ${b +a} = ${(a + b) *2 }`);
// console.log(a+ b);
// console.log(`15 + 10`);
// console.log(15 + 10);
let age2 = 10
let age3 = age2
age3 = age3 + 1
console.log(age3);
// console.log(`i am ${age2} years old` + ' and im the last child' );
// console.log(`i am ${age2} years old`);



// ----------------------------------------------------------
// 5. Numbers
// ----------------------------------------------------------
const price = 10000;
const discount = price * 0.1;
console.log(discount);

const finalPrice = price - discount;
console.log("Final price:", finalPrice); //final price here is a number
console.log(`Final price: ${finalPrice}`); // everything here is a string

// console.log('50' + 2);




// ----------------------------------------------------------
// 6. Booleans
// ----------------------------------------------------------
const isLoggedIn = true;
const isAdmin = false;
console.log("isLoggedIn:", isLoggedIn);
console.log("isAdmin:", isAdmin);


// ----------------------------------------------------------
// 7. Undefined
// ----------------------------------------------------------
let username ;
console.log("username:", username); // undefined


// ----------------------------------------------------------
// 8. Null
// ----------------------------------------------------------
let selectedUser = null;
console.log("selectedUser:", selectedUser); // null


// ----------------------------------------------------------
// 9. Objects
// ----------------------------------------------------------
// const user = {
//   name: "Victor",
//   age: 25,
//   country: "Nigeria"
// };

// string, number, boolean, null, undefined
const user = {
  name: 'victor',
  age: 20,
  country: 'Nigeria'
}

console.log(user["age"]);
console.log(user.age);

// console.log("user.name:", user.name);
// console.log("user.age:", user.age);
// console.log('user["country"]:', user["country"]);


// ----------------------------------------------------------
// 10. Arrays
// ----------------------------------------------------------
const fruitsiLike = ["Apple", "Mango", "Orange", "Pear"]
console.log(fruitsiLike.length);

// console.log("fruits[0]:", fruits[0]); // Apple
// console.log("fruits[1]:", fruits[1]); // Mango
// console.log("fruits[2]:", fruits[2]); // Orange
// console.log("fruits.length:", fruits.length); // 3


// ----------------------------------------------------------
// 11. typeof
// ----------------------------------------------------------
console.log(typeof "Hello");     // string
console.log(typeof 20);          // number
console.log(typeof false);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object  ← known quirk
console.log(typeof {});          // object
console.log(typeof []);          // object  ← arrays are objects


// ----------------------------------------------------------
// 12. Demo: updateCard() is called from the HTML buttons
// It updates the card on the page to display a chosen data type
// ----------------------------------------------------------
function updateCard(type) {
  const display = document.querySelector("#type-display");
  const valueEl = document.querySelector("#type-value");
  const typeEl  = document.querySelector("#type-typeof");

  const examples = {
    string:    { value: '"Victor"',       typeof: "string" },
    number:    { value: '25',             typeof: "number" },
    boolean:   { value: 'true',           typeof: "boolean" },
    undefined: { value: 'undefined',      typeof: "undefined" },
    null:      { value: 'null',           typeof: "object (quirk)" },
    object:    { value: '{ name: "Victor", age: 25 }', typeof: "object" },
    array:     { value: '["Apple", "Mango", "Orange"]', typeof: "object" },
  };

  const ex = examples[type];
  valueEl.textContent = ex.value;
  typeEl.textContent  = `typeof → "${ex.typeof}"`;

  display.className = "type-card active type-" + type;
}
