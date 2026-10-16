# JavaScript — Variables & Data Types

## Learning Objectives
By the end of this section, students should be able to:
- Declare variables using `let`, `const`, and `var`
- Explain the difference between `let`, `const`, and `var`
- Apply the correct variable declaration keyword for a given situation
- Follow JavaScript variable naming rules
- Identify and use the core JavaScript data types: String, Number, Boolean, Undefined, Null, Object, Array
- Use `typeof` to check a value's data type
- Use template literals with `${}` interpolation

---

## 1. What Is a Variable?

A variable is a **named container** for storing a value.

```js
let name = "Victor";
```

Breaking this down:

| Part      | Role                            |
|-----------|---------------------------------|
| `let`     | Keyword — creates the variable  |
| `name`    | Variable name (the label)       |
| `=`       | Assignment operator             |
| `"Victor"`| The value being stored          |

Once declared, you use the variable by its name:
```js
console.log(name); // Victor
```

---

## 2. let

Use `let` when the value **can change** later.

```js
let age = 20;
age = 21; // reassignment is allowed
console.log(age); // 21
```

---

## 3. const

Use `const` when the value **should not be reassigned**.

```js
const country = "Nigeria";
```

Trying to reassign throws an error:
```js
country = "Ghana"; // ❌ TypeError: Assignment to constant variable
```

> **Modern rule:** Use `const` by default. Switch to `let` only when you know the value needs to change.

---

## 4. var

`var` is the **old** way of declaring variables, used before ES6 (2015).

```js
var name = "Victor";
```

You will encounter `var` in older JavaScript code. However, modern JavaScript uses `let` and `const`.

**Why avoid `var` today?**  
`var` has different scoping rules (function scope instead of block scope) which can cause confusing bugs. You don't need to worry about the details yet — just know that `let` and `const` are safer and preferred.

---

## 5. Variable Naming Rules

### Valid names
```js
let firstName = "Victor";
let age = 20;
let userName = "john";
let _count = 0;
let $price = 100;
```

### Invalid names
```js
let 2name = "Victor";   // ❌ cannot start with a number
let my name = "John";   // ❌ cannot contain spaces
let let = "test";       // ❌ cannot use a reserved keyword
```

### Rules Summary
- Must start with a letter, `_`, or `$`
- Cannot start with a number
- Cannot contain spaces
- Cannot be a reserved word (`let`, `const`, `if`, `for`, etc.)
- Variables are **case-sensitive**: `firstName` and `firstname` are different

### Convention — camelCase
JavaScript developers use **camelCase** for variable names:
```js
let firstName = "Victor";    // ✅ camelCase
let userEmailAddress = "..."; // ✅ camelCase
```

---

## 6. Data Types

A **data type** tells JavaScript what kind of value a variable holds.

JavaScript has seven key data types for beginners:

| Type      | Example                          |
|-----------|----------------------------------|
| String    | `"Hello"`, `'Victor'`            |
| Number    | `20`, `3.14`, `-100`             |
| Boolean   | `true`, `false`                  |
| Undefined | variable declared, no value yet  |
| Null      | intentionally no value           |
| Object    | `{ name: "Victor", age: 25 }`    |
| Array     | `["Apple", "Mango", "Orange"]`   |

---

## 7. String

A string represents **text**.

```js
let name = "Victor";
let city = 'Lagos';
let message = `Hello`;
```

### String with single or double quotes
Both work the same way:
```js
"Hello"
'Hello'
```

### Template Literals (backticks)
Template literals use backticks (`` ` ``) and allow you to embed variables directly into a string using `${}`:

```js
const name = "Victor";
console.log(`Hello ${name}`);
// Output: Hello Victor

const age = 25;
console.log(`${name} is ${age} years old.`);
// Output: Victor is 25 years old.
```

This is much cleaner than string concatenation:
```js
// Old way (concatenation)
console.log("Hello " + name + ", you are " + age + " years old.");

// Modern way (template literal)
console.log(`Hello ${name}, you are ${age} years old.`);
```

---

## 8. Number

JavaScript uses a **single Number type** for both whole numbers (integers) and decimal numbers (floats).

```js
let age = 20;           // integer
let price = 1500;       // integer
let temperature = 32.5; // decimal
let balance = -200;     // negative
```

---

## 9. Boolean

A Boolean represents only **two possible values**: `true` or `false`.

```js
let isLoggedIn = true;
let isAdmin = false;
let hasSubscription = true;
```

Booleans are essential for making decisions in programs. You will use them constantly with `if` statements and conditions.

---

## 10. Undefined

`undefined` means a variable has been declared but **no value has been assigned yet**.

```js
let name;
console.log(name); // undefined
```

JavaScript automatically sets the value to `undefined` until you assign something.

---

## 11. Null

`null` represents an **intentional absence of a value**.

```js
let selectedUser = null;
```

This means: "there is currently no selected user" — you are deliberately saying "nothing here yet."

### undefined vs null

| | undefined | null |
|-|-----------|------|
| Meaning | Value not yet assigned | Intentionally no value |
| Set by | JavaScript automatically | Developer intentionally |
| Example | `let x;` | `let user = null;` |

---

## 12. Objects

An **object** stores related information as **key-value pairs**.

```js
const user = {
  name: "Victor",
  age: 25,
  country: "Nigeria"
};
```

### Accessing object properties

**Dot notation** (most common):
```js
console.log(user.name);    // Victor
console.log(user.age);     // 25
console.log(user.country); // Nigeria
```

**Bracket notation** (useful when the key is dynamic or has spaces):
```js
console.log(user["name"]); // Victor
```

---

## 13. Arrays

An **array** stores multiple values in a **single variable**, in an ordered list.

```js
const fruits = ["Apple", "Mango", "Orange"];
```

### Accessing array items — Index

Each item has a numbered position called an **index**. Indexes start at **0**, not 1.

| Item     | Index |
|----------|-------|
| "Apple"  | 0     |
| "Mango"  | 1     |
| "Orange" | 2     |

```js
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Orange
```

> **Important:** JavaScript arrays start counting from `0`. This trips up many beginners.

```js
const numbers = [10, 20, 30, 40];
console.log(numbers.length); // 4 — total number of items
```

---

## 14. typeof

Use `typeof` to check a value's data type.

```js
typeof "Hello";     // "string"
typeof 20;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object"  ← known quirk in JavaScript
typeof {};          // "object"
typeof [];          // "object"  ← arrays are technically objects
```

> **Note:** `typeof null` returns `"object"` — this is a well-known historical quirk in JavaScript. `null` is not actually an object, but this was a bug in the original implementation that was never fixed for backward compatibility reasons.

> **Note:** `typeof []` also returns `"object"`. Arrays are technically a type of object in JavaScript. You will learn how to properly check for arrays later using `Array.isArray()`.

---

## Summary

```js
// String
const name = "Victor";

// Number
const age = 25;

// Boolean
const isStudent = true;

// Undefined
let score;

// Null
let selectedItem = null;

// Object
const user = { name: "Victor", age: 25 };

// Array
const colours = ["red", "green", "blue"];

// typeof
console.log(typeof name);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isStudent);   // "boolean"
console.log(typeof score);       // "undefined"
console.log(typeof selectedItem);// "object"  ← null quirk
console.log(typeof user);        // "object"
console.log(typeof colours);     // "object"
```

---

## Discussion Questions

1. What is the difference between `let` and `const`? When do you use each?
2. What is `var` and why do modern developers prefer `let` and `const`?
3. What happens if you declare a variable with `let` but don't give it a value?
4. What is the difference between `undefined` and `null`?
5. What is the index of the first item in an array?
6. Why does `typeof null` return `"object"`?
7. What is a template literal and how is it different from a regular string?
