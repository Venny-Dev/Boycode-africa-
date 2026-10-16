# JavaScript — Operators

## Learning Objectives
By the end of this section, students should be able to:
- Use arithmetic operators to perform calculations
- Use assignment shorthand operators (`+=`, `-=`, etc.)
- Compare values using comparison operators
- Explain the difference between `==` and `===`
- Combine conditions with logical operators (`&&`, `||`, `!`)
- Write a ternary expression to replace a simple `if/else`
- Explain operator precedence and use parentheses to control it
- Convert values between types using `Number()`, `String()`, and `Boolean()`

---

## 1. Arithmetic Operators

Arithmetic operators perform maths on numbers.

| Operator | Name            | Example   | Result |
|----------|-----------------|-----------|--------|
| `+`      | Addition        | `10 + 5`  | `15`   |
| `-`      | Subtraction     | `10 - 5`  | `5`    |
| `*`      | Multiplication  | `10 * 5`  | `50`   |
| `/`      | Division        | `10 / 5`  | `2`    |
| `%`      | Modulus/Remainder | `10 % 3`| `1`    |
| `**`     | Exponentiation  | `2 ** 3`  | `8`    |

```js
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 % 3); // 1  ← remainder of 10 ÷ 3
console.log(2 ** 3); // 8  ← 2 to the power of 3
```

### Modulus — a practical use
`%` returns the **remainder** after division. A common use is checking if a number is even or odd:

```js
console.log(10 % 2); // 0 — even
console.log(11 % 2); // 1 — odd
```

### String + (Concatenation)
When `+` is used with strings, it **joins** them:
```js
console.log("Hello" + " " + "World"); // Hello World
console.log("5" + 5); // "55" ← string + number = string (be careful!)
```

---

## 2. Assignment Operators

Assignment operators assign a value to a variable.

| Operator | Meaning               | Example     | Equivalent to   |
|----------|-----------------------|-------------|-----------------|
| `=`      | Assign                | `x = 5`     | —               |
| `+=`     | Add and assign        | `x += 5`    | `x = x + 5`     |
| `-=`     | Subtract and assign   | `x -= 5`    | `x = x - 5`     |
| `*=`     | Multiply and assign   | `x *= 2`    | `x = x * 2`     |
| `/=`     | Divide and assign     | `x /= 2`    | `x = x / 2`     |
| `%=`     | Modulus and assign    | `x %= 3`    | `x = x % 3`     |

```js
let score = 10;

score += 5; // score = 10 + 5 = 15
console.log(score); // 15

score -= 3; // score = 15 - 3 = 12
console.log(score); // 12

score *= 2; // score = 12 * 2 = 24
console.log(score); // 24
```

### Increment and Decrement
```js
let count = 0;
count++; // count = count + 1
count++; // count = 2
count--; // count = 1
console.log(count); // 1
```

---

## 3. Comparison Operators

Comparison operators compare two values and always return a **Boolean** (`true` or `false`).

| Operator | Meaning                    | Example      | Result  |
|----------|----------------------------|--------------|---------|
| `>`      | Greater than               | `10 > 5`     | `true`  |
| `<`      | Less than                  | `10 < 5`     | `false` |
| `>=`     | Greater than or equal to   | `10 >= 10`   | `true`  |
| `<=`     | Less than or equal to      | `5 <= 10`    | `true`  |
| `===`    | Strict equality            | `5 === 5`    | `true`  |
| `!==`    | Strict inequality          | `5 !== "5"`  | `true`  |
| `==`     | Loose equality             | `5 == "5"`   | `true`  |
| `!=`     | Loose inequality           | `5 != "5"`   | `false` |

---

## 4. == vs ===

This is one of the most important distinctions in JavaScript.

### `==` — Loose Equality
JavaScript **converts** the types before comparing. This is called **type coercion**.

```js
5 == "5"   // true  ← JavaScript converts "5" to a number before comparing
0 == false // true  ← false is treated as 0
null == undefined // true
```

### `===` — Strict Equality
Both the **value** and the **type** must match. No type conversion happens.

```js
5 === "5"  // false ← number vs string — different types
5 === 5    // true  ← same value, same type
0 === false // false ← number vs boolean
```

### Beginner Rule
> **Always use `===` and `!==`** in modern JavaScript. They are predictable and won't surprise you with type coercion.

```js
// Prefer this:
if (age === 18) { ... }

// Avoid this:
if (age == 18) { ... }
```

---

## 5. Logical Operators

Logical operators combine multiple conditions.

### AND — `&&`
Returns `true` only if **both** conditions are true.

```js
const age = 20;
const hasId = true;

console.log(age >= 18 && hasId === true); // true
console.log(age >= 18 && hasId === false); // false
```

### OR — `||`
Returns `true` if **at least one** condition is true.

```js
const isAdmin = false;
const isOwner = true;

console.log(isAdmin || isOwner); // true
console.log(isAdmin || false);   // false
```

### NOT — `!`
**Reverses** a Boolean value.

```js
console.log(!true);  // false
console.log(!false); // true

const isLoggedIn = false;
console.log(!isLoggedIn); // true
```

### Combining Logical Operators
```js
const age = 17;
const hasParentalConsent = true;

const canEnter = age >= 18 || hasParentalConsent === true;
console.log(canEnter); // true
```

---

## 6. Ternary Operator

The **ternary operator** is a compact way of writing a simple `if/else`.

### Structure
```
condition ? valueIfTrue : valueIfFalse
```

### Example

Without ternary:
```js
let status;
if (age >= 18) {
  status = "Adult";
} else {
  status = "Minor";
}
```

With ternary:
```js
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult" or "Minor" depending on age
```

More examples:
```js
const score = 75;
const result = score >= 50 ? "Pass" : "Fail";
console.log(result); // "Pass"

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // "Welcome back!"
```

> **When to use it:** The ternary is clean for short, simple conditions. For complex logic, a regular `if/else` is more readable.

---

## 7. Operator Precedence

JavaScript follows a specific **order** when evaluating expressions — similar to BODMAS/PEMDAS in maths.

**General rule:** Multiplication and division happen before addition and subtraction.

```js
10 + 5 * 2  // → 10 + 10 → 20  (multiplication first)
(10 + 5) * 2 // → 15 * 2 → 30  (parentheses first)
```

```js
let result = 10 + 5 * 2;
console.log(result); // 20

let result2 = (10 + 5) * 2;
console.log(result2); // 30
```

> **Good habit:** When an expression might be confusing, use parentheses to make the intended order explicit. It also makes the code easier to read.

---

## 8. Type Conversion

Sometimes you need to convert a value from one type to another.

### String → Number
```js
const ageString = "20";
console.log(typeof ageString); // "string"

const ageNumber = Number(ageString);
console.log(typeof ageNumber); // "number"
console.log(ageNumber + 5);    // 25

// Other ways:
parseInt("20");   // 20 (integer)
parseFloat("3.14"); // 3.14 (decimal)
+"20";             // 20 (unary +)
```

### Number → String
```js
const num = 100;
const str = String(num);
console.log(typeof str); // "string"
console.log(str + " items"); // "100 items"
```

### To Boolean
```js
Boolean(1);       // true
Boolean(0);       // false
Boolean("hello"); // true
Boolean("");      // false
Boolean(null);    // false
Boolean(undefined); // false
```

### Falsy vs Truthy
JavaScript treats some values as `false` (falsy) and everything else as `true` (truthy) in a Boolean context:

**Falsy values:**
```js
false
0
""        // empty string
null
undefined
NaN
```

**Everything else is truthy**, including:
```js
true
1
"hello"
[]        // even an empty array
{}        // even an empty object
```

---

## Mini Exercises

### Exercise 1 — Calculator
Given:
```js
const num1 = 20;
const num2 = 5;
```
Calculate and `console.log()` the:
- sum
- difference
- product
- quotient
- remainder

### Exercise 2 — Odd or Even
Using the modulus operator, write code to determine whether a number is odd or even.

```js
const number = 17;
// Expected output: "17 is odd"
```

### Exercise 3 — Adult Check
```js
const age = 17;
```
Use a ternary operator to determine if the person is an adult.
Expected output: `false` or `"Minor"`

### Exercise 4 — Mini Calculator Function
Build a function that takes two numbers and an operator:
```js
calculate(10, 5, "+"); // 15
calculate(10, 5, "-"); // 5
calculate(10, 5, "*"); // 50
calculate(10, 5, "/"); // 2
```

---

## Discussion Questions

1. What does the `%` operator return? Give a practical use case.
2. What is the difference between `==` and `===`? Which should you prefer?
3. What does `&&` return if the first condition is `false`?
4. Write the ternary equivalent of: `if (score >= 50) { result = "Pass" } else { result = "Fail" }`
5. What is operator precedence? How do parentheses change it?
6. What are the falsy values in JavaScript?
7. Why does `"5" + 5` return `"55"` instead of `10`?
