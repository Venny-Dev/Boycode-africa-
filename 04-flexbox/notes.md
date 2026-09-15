# CSS Flexbox

## What Is Flexbox?

**Flexbox** (Flexible Box Layout) is a CSS layout model designed to arrange items in a **single direction** — either in a row or a column. It gives you powerful control over how items are spaced, aligned, and sized within a container, without needing to use floats, hacks, or complex calculations.

In simple terms: **Flexbox is the tool you reach for when you need to align and distribute items along one axis.**

---

## When to Use Flexbox

Use Flexbox when:
- You want items to sit **side by side** (navigation bar, button groups)
- You want to **centre something** vertically and horizontally
- You want items to **wrap** onto multiple lines
- You're building **one-dimensional** layouts (a row OR a column)
- You need to control **spacing between items** (gap, space-between, space-around)

Avoid Flexbox when:
- You need a full **two-dimensional grid** (rows AND columns at the same time) → use CSS Grid instead

---

## How Flexbox Works

Flexbox has two key players:

```
┌─────────────────────────────────────────────┐
│              FLEX CONTAINER                 │
│                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │ Item 1 │  │ Item 2 │  │ Item 3 │        │
│  └────────┘  └────────┘  └────────┘        │
│                                             │
└─────────────────────────────────────────────┘
```

| Role           | Description                               |
|----------------|-------------------------------------------|
| Flex Container | The parent element with `display: flex`   |
| Flex Items     | The direct children of the container      |

You only need to set `display: flex` on the **parent**. The children automatically become flex items.

```css
.container {
  display: flex;
}
```

---

## The Two Axes

Flexbox always works on two axes:

```
Main Axis (default: horizontal → )
─────────────────────────────────────────────►

Cross Axis (default: vertical ↓)
│
│
│
▼
```

- **Main axis** — the direction items are placed (controlled by `flex-direction`)
- **Cross axis** — the perpendicular direction

```css
.container {
  display: flex;
  flex-direction: row
}
```
All alignment properties work relative to these two axes.

---

## CONTAINER PROPERTIES

### 1. display: flex

Turns the element into a flex container.

```css
.navbar {
  display: flex;
}
```

---

### 2. flex-direction

Sets the direction of the main axis.

```css
.container {
  flex-direction: row;            /* default — left to right */
  flex-direction: row-reverse;    /* right to left */
  flex-direction: column;         /* top to bottom */
  flex-direction: column-reverse; /* bottom to top */
}
```

```
row (default):
[ Item 1 ] [ Item 2 ] [ Item 3 ]  →

column:
[ Item 1 ]
[ Item 2 ]
[ Item 3 ]
↓
```

---

### 3. justify-content

Aligns items **along the main axis** (horizontal by default).

```css
.container {
  justify-content: flex-start;    /* default — items at the start */
  justify-content: flex-end;      /* items at the end */
  justify-content: center;        /* items in the centre */
  justify-content: space-between; /* equal space BETWEEN items */
  justify-content: space-around;  /* equal space AROUND items */
  justify-content: space-evenly;  /* equal space everywhere */
}
```

```
flex-start:
[A][B][C]         (space at end)

center:
      [A][B][C]

space-between:
[A]     [B]     [C]

space-around:
  [A]   [B]   [C]  (half space on edges)

space-evenly:
   [A]   [B]   [C]   (equal space everywhere)
```

---

### 4. align-items

Aligns items **along the cross axis** (vertical by default).

```css
.container {
  align-items: stretch;     /* default — items stretch to fill height */
  align-items: flex-start;  /* items at the top */
  align-items: flex-end;    /* items at the bottom */
  align-items: center;      /* items vertically centred */
  align-items: baseline;    /* items aligned by text baseline */
}
```

---

### 5. flex-wrap

Controls whether items wrap onto a new line when there is no more space.

```css
.container {
  flex-wrap: nowrap;   /* default — all items on one line (may overflow) */
  flex-wrap: wrap;     /* items wrap to next line */
}
```

```
nowrap (may overflow):
[A][B][C][D][E][F][G] →  (all on one line)

wrap:
[A][B][C][D]
[E][F][G]
```

---

### 6. gap

Sets the space between flex items. Cleaner than using margins.

```css
.container {
  gap: 20px;           /* same gap in both directions */
  gap: 10px 20px;      /* row-gap | column-gap */
}
```

---

### 7. flex-direction + flex-wrap shorthand: flex-flow

```css
.container {
  flex-flow: row wrap;         /* shorthand for direction + wrap */
  flex-flow: column nowrap;
}
```

---

## ITEM PROPERTIES

### 8. flex-grow

How much an item grows to fill available space.

```css
.item {
  flex-grow: 0; /* default — don't grow */
  flex-grow: 1; /* grow to fill available space equally */
  flex-grow: 2; /* grow twice as much as flex-grow: 1 items */
}
```

```
flex-grow: 1 on all items — share space equally:
[─── A ───][─── B ───][─── C ───]

flex-grow: 2 on B:
[─ A ─][──── B ────][─ C ─]
```

---

### 9. flex-shrink

How much an item shrinks when space is limited.

```css
.item {
  flex-shrink: 1; /* default — shrink proportionally */
  flex-shrink: 0; /* never shrink */
}
```

---

### 10. flex-basis

The initial size of an item before growing or shrinking.

```css
.item {
  flex-basis: auto;   /* default — use the item's content size */
  flex-basis: 200px;  /* start at 200px, then grow/shrink */
  flex-basis: 30%;    /* start at 30% of container */
}
```

---

### 11. flex shorthand

The most common way — combines grow, shrink, and basis:

```css
.item {
  flex: 1;           /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  flex: 0 0 200px;   /* don't grow, don't shrink, stay at 200px */
  flex: 1 1 auto;    /* grow, shrink, use content size */
}
```

---

### 12. align-self

Override `align-items` for a single item.

```css
.special-item {
  align-self: flex-end;   /* this item aligns to the bottom */
  align-self: center;
  align-self: flex-start;
}
```

---

### 13. order

Change the visual order of items without changing the HTML.

```css
.item-a { order: 2; }
.item-b { order: 1; }
.item-c { order: 3; }
/* Displays: B, A, C — regardless of HTML order */
```

Default `order` is `0`. Lower numbers appear first.

---

## Centring with Flexbox

One of the most common uses — perfectly centre content:

```css
.centred {
  display: flex;
  justify-content: center;   /* horizontal */
  align-items: center;       /* vertical */
  height: 100vh;             /* needs a height to centre vertically */
}
```

---

## Common Patterns

### Navigation Bar
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
```

### Equal-width columns
```css
.columns {
  display: flex;
  gap: 20px;
}

.column {
  flex: 1; /* each column takes equal space */
}
```

### Responsive card row that wraps
```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 280px; /* grow, shrink, minimum 280px wide */
}
```

---

## Flexbox vs Grid — Quick Rule

| Situation                             | Use        |
|---------------------------------------|------------|
| Items in a single row                 | Flexbox    |
| Items in a single column              | Flexbox    |
| Centring one item                     | Flexbox    |
| Navigation bar                        | Flexbox    |
| Items need to align in BOTH row & col | CSS Grid   |
| Page-level layout sections            | CSS Grid   |
| Card grid with defined columns        | CSS Grid   |

> A common real-world pattern: use **Grid for the page layout**, and **Flexbox inside each section** for aligning items.

---

## Discussion Questions

1. What does `display: flex` do to an element's children?
2. What is the difference between `justify-content` and `align-items`?
3. What does `flex-wrap: wrap` solve?
4. What does `flex: 1` mean in practice?
5. How would you perfectly centre a div both horizontally and vertically using Flexbox?
6. When would you choose Flexbox over CSS Grid?
