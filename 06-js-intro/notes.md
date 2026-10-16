# JavaScript — Introduction

## Learning Objectives
By the end of this section, students should be able to:
- Explain what JavaScript is and what role it plays alongside HTML and CSS
- Describe where JavaScript runs (browser and server)
- Name at least two JavaScript engines and which browsers use them
- Use `console.log()` to print values to the browser console
- Add JavaScript to an HTML page using inline, internal, and external methods
- Understand what a JavaScript statement is
- Write and recognise single-line and multi-line comments

---

## 1. What Is JavaScript?

**JavaScript (JS)** is a programming language used to make websites and applications interactive and dynamic.

Think about a normal website:

| Layer      | Responsibility                         |
|------------|----------------------------------------|
| HTML       | Structure — what is on the page        |
| CSS        | Presentation — how the page looks      |
| JavaScript | Behaviour — how the page responds      |

```
HTML   →   Structure
CSS    →   Presentation
JS     →   Behaviour
```

### Quick Example

HTML:
```html
<button>Click Me</button>
```

CSS:
```css
button {
  background: blue;
  color: white;
}
```

JavaScript:
```js
alert("Hello!");
```

---

## 2. What Can JavaScript Do?

JavaScript can:
- Change HTML content
- Change CSS styles dynamically
- Respond to user actions (clicks, typing, scrolling)
- Validate form input
- Create animations and interactive effects
- Work with APIs (fetch data from a server)
- Store data in the browser (localStorage)
- Build full web applications
- Communicate with servers
- Run on a server with **Node.js** to build backend APIs
- Power mobile apps with technologies like React Native

```js
// Find the heading on the page and change its text
document.querySelector("h1").textContent = "Welcome!";
```

---

## 3. Where Does JavaScript Run?

### In the Browser
Every major browser has a built-in JavaScript engine:

| Browser | JavaScript Engine |
|---------|-------------------|
| Chrome  | V8                |
| Edge    | V8                |
| Firefox | SpiderMonkey      |
| Safari  | JavaScriptCore    |

When you write JavaScript and open the page in Chrome, the **V8 engine** reads and executes your code.

### On a Server (Node.js)
JavaScript can also run **outside the browser** using Node.js. Later in the curriculum you will use Node.js to build backend APIs.

```
Browser
  ↓
JavaScript Engine (V8)
  ↓
Your JavaScript Code
  ↓
Result
```

> You do not interact with the engine directly. You write JavaScript — the engine does the rest.

---

## 4. JavaScript Engines

A JavaScript engine is the program responsible for executing JavaScript code.

You never touch the engine directly. Your job is to write JavaScript. The browser takes care of running it.

Chrome's engine, **V8**, is also what powers Node.js — which is why JavaScript can run on a server too.

---

## 5. Your First JavaScript Code — The Console

The quickest way to run JavaScript is through the browser console.

**How to open it in Chrome:**
Right Click on any page → Inspect → Console tab

Type this and press **Enter**:
```js
console.log("Hello World");
```

You should see:
```
Hello World
```

### What is `console.log()`?

`console.log()` prints information to the browser's developer console. You will use it constantly while learning JavaScript.

```js
console.log("Victor");
console.log(25);
console.log(10 + 5);
```

Output:
```
Victor
25
15
```

---

## 6. Adding JavaScript to HTML

There are three ways to use JavaScript with a webpage.

### Inline JavaScript
```html
<button onclick="alert('Hello')">Click Me</button>
```
Works, but avoid putting large amounts of JavaScript directly inside HTML attributes.

### Internal JavaScript
Place a `<script>` tag inside the HTML file:
```html
<script>
  console.log("Hello World");
</script>
```

### External JavaScript
Create a separate file — `script.js` — and link it:
```html
<script src="script.js"></script>
```

Inside `script.js`:
```js
console.log("Hello World");
```

**External JavaScript is the preferred approach** for real applications. It keeps HTML and JavaScript separate and clean.

> **Where to place the `<script>` tag?**
> Put it at the bottom of `<body>`, just before `</body>`, so the HTML loads before JavaScript tries to interact with it.

---

## 7. JavaScript Statements

A **statement** is a single instruction that JavaScript executes.

```js
let name = "Victor";
console.log(name);
```

There are **two statements** here:
1. `let name = "Victor";`
2. `console.log(name);`

Semicolons (`;`) mark the end of a statement. They are technically optional in most cases in JavaScript, but using them is good practice for beginners.

---

## 8. Comments

Comments are notes for developers. JavaScript ignores them completely when running your code.

### Single-line comment
```js
// This is a comment
console.log("Hello");
```

### Multi-line comment
```js
/*
  This is a
  multi-line comment
*/
console.log("Hello");
```

> **Good habit:** Write comments to explain *why* you did something, not just what the code does.

---

## 9. A Simple Mental Model

For now, think of JavaScript execution like this:

```
You write JavaScript code
       ↓
Browser passes it to the JavaScript engine
       ↓
Engine executes the code
       ↓
Result appears (on screen, in console, etc.)
```

Later, when you learn asynchronous JavaScript, you will understand the full picture:
```
Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack
```

But don't worry about that yet. Get comfortable with the basics first.

---

## Discussion Questions

1. What is the difference between HTML, CSS, and JavaScript in terms of their role on a webpage?
2. What is a JavaScript engine? Name two browsers and their engines.
3. What does `console.log()` do and where do you see its output?
4. What are the three ways to add JavaScript to an HTML page? Which is preferred and why?
5. What is a JavaScript statement?
6. Why do we write comments in code?
