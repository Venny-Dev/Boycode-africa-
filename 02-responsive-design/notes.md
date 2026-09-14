# Responsive Design

## Learning Objectives
By the end of this section, students should be able to:
- Explain what responsive design is and why it matters
- Use the viewport meta tag correctly
- Understand the difference between fixed and fluid layouts
- Write CSS media queries using `min-width` and `max-width`
- Apply mobile-first design thinking
- Choose meaningful breakpoints
- Make images responsive

---

## 1. What Is Responsive Design?

Responsive design means building a website so its layout and content **adapt** to different screen sizes and devices.

A website should work on:
- 📱 Mobile phones (~320px – 767px)
- 📱 Tablets (~768px – 1023px)
- 💻 Laptops/Desktops (1024px+)

The goal is not that every device looks identical — it's that every device has a **good experience**.

---

## 2. Why It Matters

Without responsive design, mobile users may have to:
- Zoom in to read text
- Scroll horizontally
- Struggle to tap small buttons
- Deal with broken or overflowing layouts

Since the majority of global web traffic now comes from mobile devices, this is not optional.

---

## 3. The Viewport Meta Tag

This belongs in the `<head>` of **every** responsive webpage:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| Attribute             | Meaning                                             |
|-----------------------|-----------------------------------------------------|
| `width=device-width`  | Use the device's actual screen width as viewport    |
| `initial-scale=1.0`   | Start at 100% zoom (no zoom in or out)              |

Without this tag, mobile browsers render the page at a "virtual" desktop width (~980px) and then scale it down — making everything tiny.

---

## 4. Fixed vs Fluid Layouts

### Fixed
```css
.container {
  width: 1000px; /* Problem: overflows on a 375px phone */
}
```

### Fluid
```css
.container {
  width: 90%;           /* adapts to any screen */
  max-width: 1200px;    /* but won't stretch too wide on large screens */
  margin: 0 auto;       /* center it */
}
```

The `max-width + margin: 0 auto` pattern is one of the most common layout patterns in web development.

---

## 5. Responsive Images

Bad — overflows its container:
```css
img { width: 1000px; }
```

Good — scales with its container:
```css
img {
  display: block;
  max-width: 100%;  /* never wider than parent */
  height: auto;     /* maintains aspect ratio */
}
```

---

## 6. Media Queries

A media query lets you apply CSS **only when a condition is true** (such as a certain viewport width).

### Syntax
```css
@media (max-width: 768px) {
  /* Styles that apply when viewport is 768px or SMALLER */
}

@media (min-width: 768px) {
  /* Styles that apply when viewport is 768px or LARGER */
}
```

### Example
```css
.box {
  width: 500px;
  background: lightblue;
}

@media (max-width: 600px) {
  .box {
    width: 100%;
    background: coral;
  }
}
```

When the screen is 600px or less, `.box` becomes full width.

---

## 7. Mobile-First Design

### Desktop-first approach (avoid for new projects)
You write full desktop styles first, then use `max-width` queries to scale down.

### Mobile-first approach (recommended)
You write minimal mobile styles first, then use `min-width` queries to enhance for larger screens.

```css
/* Mobile — default, no media query needed */
.card {
  width: 100%;
  padding: 16px;
}

/* Tablet and above */
@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}

/* Desktop and above */
@media (min-width: 1024px) {
  .card {
    width: 33.333%;
  }
}
```

**Why mobile-first?**
- Mobile constraints force you to prioritize content
- It is easier to add complexity than remove it
- Aligns with how CSS cascades (simpler rules first)

---

## 8. Breakpoints

Common starting breakpoints:

| Breakpoint         | Range              |
|--------------------|--------------------|
| Mobile             | 320px – 767px      |
| Tablet             | 768px – 1023px     |
| Desktop            | 1024px +           |

> **Important professional principle:** Don't pick breakpoints based on specific devices. Pick them where your **layout breaks** — where the content stops looking good.

---

## 9. Responsive Navbar Example

### Mobile-first: stack vertically by default, row on larger screens

```css
/* Mobile — default */
.navbar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Tablet and above */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    flex-direction: row;
    gap: 30px;
  }
}
```

---

## 10. Responsive Card Grid

```css
/* Mobile — 1 column */
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
}

/* Tablet — 2 columns */
@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop — 3 columns */
@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Result:
```
Mobile:       Tablet:            Desktop:
┌───────┐     ┌──────┐ ┌──────┐  ┌────┐ ┌────┐ ┌────┐
│  HTML │     │ HTML │ │ CSS  │  │HTML│ │CSS │ │ JS │
└───────┘     └──────┘ └──────┘  └────┘ └────┘ └────┘
┌───────┐     ┌──────┐
│  CSS  │     │  JS  │
└───────┘     └──────┘
┌───────┐
│  JS   │
└───────┘
```

---

## 11. Student Dashboard Challenge

Build a layout that adapts across three breakpoints:

**Desktop:**
```
┌──────────────────────────────────────────┐
│ Header                                   │
├────────────┬─────────────────────────────┤
│  Sidebar   │  Main Content / Cards       │
├────────────┴─────────────────────────────┤
│ Footer                                   │
└──────────────────────────────────────────┘
```

**Mobile:**
```
┌───────────────────┐
│ Header            │
├───────────────────┤
│ Main Content      │
│  Card             │
│  Card             │
│  Card             │
├───────────────────┤
│ Footer            │
└───────────────────┘
```

Requirements:
- Mobile: single column, sidebar hidden
- Tablet: sidebar collapses or stacks
- Desktop: sidebar visible beside main content
- Cards adapt from 1 → 2 → 3 columns
- Images use `max-width: 100%; height: auto;`
- Minimum two media queries

---

## 12. Discussion Questions

1. What does the viewport meta tag do and why is it required?
2. What is the difference between `max-width` and `min-width` in a media query?
3. What does "mobile-first" mean in practice?
4. Why should you choose breakpoints based on your content rather than specific devices?
5. Why is `max-width: 100%; height: auto` the correct pattern for responsive images?
6. Given this code — what happens at 500px viewport width?

```css
.box { background: blue; }
@media (max-width: 600px) {
  .box { background: red; }
}
```
