# CSS Box Model

## Learning Objectives
By the end of this section, students should be able to:
- Explain the CSS Box Model
- Understand content, padding, border, and margin
- Explain the difference between `content-box` and `border-box`
- Use `width`, `height`, `min-width`, `max-width`, and related properties correctly
- Understand common CSS units: `px`, `%`, `em`, `rem`, `vh`, `vw`
- Understand `block`, `inline`, `inline-block`, and `none`

---

## 1. The Box Model

### Definition
The **CSS Box Model** is the fundamental concept that describes how every HTML element is rendered as a rectangular box in the browser. It defines the space an element takes up on a page by specifying four distinct areas around the element's content: **padding**, **border**, and **margin**. Every element — whether a heading, a paragraph, an image, or a div — follows this model, and understanding it is essential for controlling layout, spacing, and sizing in CSS.

In simple terms: **the box model is the rulebook the browser uses to calculate how much space any element occupies on the screen.**

---

Every HTML element is treated by the browser as a rectangular box made up of four layers:

```
┌───────────────────────────────────────┐
│                MARGIN                 │
│  ┌─────────────────────────────────┐  │
│  │             BORDER              │  │
│  │  ┌───────────────────────────┐  │  │
│  │  │          PADDING          │  │  │
│  │  │  ┌─────────────────────┐  │  │  │
│  │  │  │      CONTENT        │  │  │  │
│  │  │  └─────────────────────┘  │  │  │
│  │  └───────────────────────────┘  │  │
│  └─────────────────────────────────┘  │
└───────────────────────────────────────┘
```

| Layer   | Description                                      |
|---------|--------------------------------------------------|
| Content | The actual text, image, or element inside        |
| Padding | Space between the content and the border         |
| Border  | A line that wraps around the padding and content |
| Margin  | Space outside the border, between other elements |

---

## 2. Content

The content area is sized using `width` and `height`.

```css
.card {
  width: 300px;
  height: 150px;
}
```

Under the **default** `box-sizing: content-box`, the `300px` refers only to the content area — padding and border are added on top of that.

---

## 3. Padding

Padding is the space **inside** the border, between the content and the border edge.

```css
.card {
  padding: 20px;                        /* all four sides */
  padding: 10px 20px;                   /* top/bottom | left/right */
  padding: 10px 20px 30px 40px;         /* top | right | bottom | left */
}
```

Individual sides:
```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

> **Tip:** Remember the order clockwise: Top → Right → Bottom → Left

---

## 4. Border

Border surrounds the padding and content.

```css
/* syntax: width | style | color */
.card {
  border: 2px solid black;
}
```

Other border styles:
```css
border: 2px dashed black;
border: 2px dotted black;
border: 2px double black;
```

Individual sides:
```css
border-top: 2px solid black;
border-bottom: 1px solid gray;
```

### Border Radius
Rounds the corners of an element.

```css
.card {
  border-radius: 12px;
}

/* Perfect circle — element must have equal width & height */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```

---

## 5. Margin

Margin is the space **outside** the border, pushing the element away from its neighbours.

```css
.card {
  margin: 20px;                         /* all four sides */
  margin: 10px 20px;                    /* top/bottom | left/right */
  margin: 10px 20px 30px 40px;          /* top | right | bottom | left */
}
```

### margin: auto
Use `margin: 0 auto` to **horizontally center** a block element that has a declared width:

```css
.container {
  max-width: 1000px;
  margin: 0 auto;
}
```

The browser divides the remaining horizontal space equally between the left and right margins.

---

## 6. Box Model Calculation — content-box (default)

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

```
Content width  =           300px
Padding        = 20 + 20 =  40px
Border         =  5 +  5 =  10px
─────────────────────────────────
Total box      = 300+40+10 = 350px

Margin is outside the box:
350 + 10 + 10 = 370px of horizontal space used
```

---

## 7. box-sizing: border-box

Changes the calculation so that the declared `width` **includes** padding and border.

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
  /* Total box width = 300px exactly */
}
```

**Best practice — apply globally:**
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

> **DevTools exercise:** Inspect an element → scroll to the bottom of the Styles panel → you'll see the visual box model diagram showing content, padding, border, and margin values.

---

## 8. The Display Property

### block
- Starts on a new line
- Takes the full available width by default
- Respects `width` and `height`
- Common elements: `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<header>`, `<footer>`

### inline
- Stays on the same line as surrounding content
- Does **not** respect `width` or `height`
- Common elements: `<span>`, `<a>`, `<strong>`, `<em>`

### inline-block
- Stays inline but **does** respect `width` and `height`
- Great for buttons, tags, and navigation items

### none
- Removes the element from the page layout entirely (no space reserved)
- Compare with `visibility: hidden`, which hides visually but keeps the layout space

---

## 9. CSS Units

| Unit  | Relative to                              | Example              |
|-------|------------------------------------------|----------------------|
| `px`  | Fixed screen pixel                       | `width: 300px`       |
| `%`   | Parent (containing block) dimension      | `width: 50%`         |
| `rem` | Root `<html>` font size (default: 16px)  | `font-size: 2rem`    |
| `em`  | Current element's font size              | `padding: 1.5em`     |
| `vh`  | 1% of viewport height                   | `min-height: 100vh`  |
| `vw`  | 1% of viewport width                    | `width: 50vw`        |

**rem example:**
```css
html { font-size: 16px; }
h1   { font-size: 2rem; }  /* = 32px */
p    { padding: 1rem;   }  /* = 16px */
```

**em example:**
```css
.parent { font-size: 20px;  }
.child  { font-size: 1.5em; } /* = 30px */
```

> Prefer `rem` for font sizes (predictable, scales with browser settings), `%`/`rem` for layout spacing, and `vh`/`vw` for full-viewport sections.

---

## 10. Discussion Questions

1. What are the four layers of the CSS Box Model?
2. What is the difference between `padding` and `margin`?
3. What does `box-sizing: border-box` change about how `width` is calculated?
4. If an element has `width: 300px`, `padding: 20px`, and `border: 5px`, what is its rendered width under `content-box`?
5. When would you use `display: inline-block` instead of `display: inline`?
6. What is the difference between `rem` and `em`?
7. How would you horizontally center a `div` with `max-width: 800px`?
