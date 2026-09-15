# CSS Grid

## What Is CSS Grid?

**CSS Grid** is a two-dimensional layout system that lets you arrange elements in **rows and columns simultaneously**. Unlike Flexbox (which handles one axis at a time), Grid gives you full control over both axes at the same time, making it ideal for building complex page layouts.

In simple terms: **CSS Grid is the tool you reach for when you need to define a layout in both rows and columns at the same time.**

---

## When to Use CSS Grid

Use CSS Grid when:
- You need a **two-dimensional layout** (rows AND columns together)
- You're building a **page-level structure** (header, sidebar, main, footer)
- You want a **card grid** with defined columns
- You want items to align to a precise visual grid
- You need to place items in **specific grid positions**

Avoid CSS Grid when:
- You only need to arrange items **in one direction** → use Flexbox instead
- You just need to **centre a single item** → use Flexbox instead

---

## How CSS Grid Works

Like Flexbox, Grid has a container and items:

```
┌────────────────────────────────────────┐
│             GRID CONTAINER             │
│  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │ Item 1 │  │ Item 2 │  │ Item 3 │   │
│  └────────┘  └────────┘  └────────┘   │
│  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │ Item 4 │  │ Item 5 │  │ Item 6 │   │
│  └────────┘  └────────┘  └────────┘   │
└────────────────────────────────────────┘
```

You define columns and rows on the **container**. Items are placed inside the resulting cells.

```css
.container {
  display: grid;
}
```

---

## Grid Terminology

```
        Col 1      Col 2      Col 3
        ┌──────────┬──────────┬──────────┐
Row 1   │  Cell    │  Cell    │  Cell    │
        ├──────────┼──────────┼──────────┤
Row 2   │  Cell    │  Cell    │  Cell    │
        └──────────┴──────────┴──────────┘

Grid Lines:   the dividing lines between rows and columns (numbered from 1)
Grid Track:   a single row or column
Grid Cell:    the intersection of a row and column
Grid Area:    one or more cells combined
```

---

## CONTAINER PROPERTIES

### 1. display: grid

Turns the element into a grid container.

```css
.container {
  display: grid;
}
```

---

### 2. grid-template-columns

Defines the number and size of **columns**.

```css
.container {
  grid-template-columns: 200px 200px 200px;  /* 3 fixed columns */
  grid-template-columns: 1fr 1fr 1fr;        /* 3 equal columns */
  grid-template-columns: repeat(3, 1fr);     /* same as above */
  grid-template-columns: 200px 1fr;          /* fixed sidebar + flexible main */
  grid-template-columns: repeat(4, 1fr);     /* 4 equal columns */
}
```

`fr` = **fraction unit** — divides available space proportionally.

```
repeat(3, 1fr):
┌────────────┬────────────┬────────────┐
│    1fr     │    1fr     │    1fr     │
└────────────┴────────────┴────────────┘

200px 1fr:
┌──────────┬────────────────────────────┐
│  200px   │           1fr              │
└──────────┴────────────────────────────┘
```

---

### 3. grid-template-rows

Defines the number and size of **rows**.

```css
.container {
  grid-template-rows: 100px 200px 100px;  /* 3 rows with fixed heights */
  grid-template-rows: auto auto;           /* rows sized by their content */
  grid-template-rows: repeat(3, 1fr);     /* 3 equal rows */
}
```

---

### 4. gap

Sets the space between grid cells.

```css
.container {
  gap: 20px;           /* same gap between rows and columns */
  row-gap: 10px;       /* space between rows only */
  column-gap: 20px;    /* space between columns only */
  gap: 10px 20px;      /* row-gap | column-gap */
}
```

---

### 5. grid-template-areas

Lets you name areas of your grid and assign items to them by name — very readable.

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
}
```

```
┌─────────────────────────┐
│         header          │
├──────────┬──────────────┤
│ sidebar  │    main      │
├──────────┴──────────────┤
│         footer          │
└─────────────────────────┘
```

Then assign items to areas:
```css
.header  { grid-area: header;  }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main;    }
.footer  { grid-area: footer;  }
```

---

### 6. justify-items

Aligns items **horizontally** within their cells.

```css
.container {
  justify-items: start;   /* items at the left of their cell */
  justify-items: end;     /* items at the right */
  justify-items: center;  /* items centred horizontally */
  justify-items: stretch; /* default — items fill the cell width */
}
```

---

### 7. align-items

Aligns items **vertically** within their cells.

```css
.container {
  align-items: start;    /* items at the top of their cell */
  align-items: end;      /* items at the bottom */
  align-items: center;   /* items centred vertically */
  align-items: stretch;  /* default — items fill the cell height */
}
```

---

### 8. justify-content

Aligns the **entire grid** horizontally within the container (when grid is smaller than container).

```css
.container {
  justify-content: start;
  justify-content: center;
  justify-content: space-between;
}
```

---

### 9. align-content

Aligns the **entire grid** vertically within the container.

```css
.container {
  align-content: start;
  align-content: center;
  align-content: space-between;
}
```

---

## ITEM PROPERTIES

### 10. grid-column

Specifies which columns an item spans using grid line numbers.

```css
.item {
  grid-column: 1 / 3;    /* from line 1 to line 3 (spans 2 columns) */
  grid-column: 1 / -1;   /* from first line to last line (full width) */
  grid-column: span 2;   /* span 2 columns from where it starts */
}
```

```
grid-column: 1 / 3 (spans 2 columns):
┌────────────────────┬──────────┐
│       Item A       │  Item B  │
└────────────────────┴──────────┘
  col 1 → col 3         col 3→4
```

---

### 11. grid-row

Specifies which rows an item spans.

```css
.item {
  grid-row: 1 / 3;    /* spans 2 rows */
  grid-row: span 2;   /* span 2 rows from where it starts */
}
```

---

### 12. grid-area (shorthand or name)

Either name the item (used with `grid-template-areas`):
```css
.header { grid-area: header; }
```

Or shorthand for row-start / column-start / row-end / column-end:
```css
.item {
  grid-area: 1 / 1 / 3 / 4; /* row 1, col 1 to row 3, col 4 */
}
```

---

### 13. justify-self / align-self

Override alignment for a **single item**.

```css
.special {
  justify-self: center;  /* override horizontal alignment */
  align-self: end;       /* override vertical alignment */
}
```

---

## auto-fill vs auto-fit

These are used inside `repeat()` for **automatically responsive grids** without media queries.

```css
/* auto-fill: creates as many columns as will fit */
.container {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* auto-fit: same but collapses empty tracks */
.container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

`minmax(200px, 1fr)` means: each column is **at least 200px wide** but grows to fill available space.

Result: the grid automatically creates 1, 2, 3, or 4 columns based on the available width — no media queries needed.

---

## Common Patterns

### Basic page layout
```css
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
  gap: 0;
}
```

### 3-column card grid (responsive)
```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
```

### Holy grail layout (classic web layout)
```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-areas:
    "header  header  header"
    "left    main    right"
    "footer  footer  footer";
}
```

---

## Flexbox vs Grid — Decision Guide

| You want to...                            | Use        |
|-------------------------------------------|------------|
| Line items up in a row                    | Flexbox    |
| Stack items in a column                   | Flexbox    |
| Centre something                          | Flexbox    |
| Build a navigation bar                    | Flexbox    |
| Build a page layout (header/sidebar/main) | CSS Grid   |
| Create a card grid                        | CSS Grid   |
| Control rows AND columns simultaneously   | CSS Grid   |
| Place items in very specific positions    | CSS Grid   |

> They work great together. A common pattern: **Grid for page structure, Flexbox inside components**.

---

## Discussion Questions

1. What is the `fr` unit and what does it represent?
2. What is the difference between `justify-items` and `justify-content` in Grid?
3. What does `grid-column: 1 / -1` mean?
4. How does `grid-template-areas` make layouts more readable?
5. What does `repeat(auto-fit, minmax(200px, 1fr))` do? Why is it powerful?
6. You need to build a page with a header, two sidebars, a main content area, and a footer — which layout system would you choose and why?
