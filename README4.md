

# 📱 Task 4 – Make a Website Mobile-Friendly Using CSS Media Queries

## 🎯 Objective

Convert an existing desktop-only webpage into a **mobile-friendly responsive layout** using **CSS media queries**. This task helps you understand the basics of responsive design and how websites adapt to different screen sizes.

---

## 🛠️ Tools Used

* **HTML & CSS**
* **VS Code**
* **Chrome DevTools Mobile View**
* (Optional) GitHub for version control

---

## 📄 What You Need to Do

1. Start with any existing **HTML page** (your desktop version).
2. Add **CSS media queries** to make the layout responsive.
3. Use Chrome DevTools to test the website on various screen sizes.
4. Ensure text, images, buttons, and layout adapt correctly on:

   * Mobile (≤ 600px)
   * Tablet (600px–900px)
   * Desktop (≥ 900px)

---

## 📂 Features Implemented

### ✔ Mobile-first design

Base CSS styles are written for small screens first.

### ✔ Responsive layout

Page structure changes based on viewport width using:

```css
@media (min-width: 700px) { ... }
@media (min-width: 980px) { ... }
@media (min-width: 1200px) { ... }
```

### ✔ Navigation adapts

Small screens → hamburger or hidden nav
Large screens → full navbar is visible

### ✔ Grid / card layout

* Single column on mobile
* Multi-column on desktop

### ✔ Scaling text & spacing

Font sizes and card spacing increase for larger screens.

---

## 🔧 Example Media Query Used

```css
@media (min-width: 700px) {
  nav {
    display: flex;
    gap: 12px;
  }

  main {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

---

## 📱 How to Test Responsiveness

1. Open the webpage in Google Chrome.
2. Right-click → **Inspect** → Click **Toggle Device Toolbar**.
3. Test different devices:

   * iPhone SE
   * iPhone 12
   * iPad
   * Desktop 1440px

Check:

* Text readability
* Layout spacing
* Buttons clickable
* Images scaling properly

---

## 📦 Output / Deliverables

The final deliverables include:

* ✔ Updated HTML file
* ✔ Updated CSS file with **media queries**
* ✔ Fully responsive webpage

---

## 🚀 How to Run

1. Open the `index.html` file in any browser.
2. Resize the browser window to see the layout adjust dynamically.

---

## 📘 Sample Folder Structure

```
/responsive-task/
│── index.html
│── style.css
│── README.md
```

---

If you want, I can also generate:
✅ A separate **style.css** file
✅ A **Before vs After** comparison section
✅ Screenshots for GitHub README

Just tell me!
