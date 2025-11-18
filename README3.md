# 📘 Task 3: Books REST API using Node.js & Express

This project implements a simple **REST API to manage a list of books** using **Node.js** and **Express.js**. No database is used — data is stored **in-memory**.

---

## 🚀 Features

- Get all books
- Get a single book by ID
- Add a new book
- Update an existing book
- Delete a book
- In‑memory storage (simple, no database)

---

## 📂 Project Structure
```
📁 project-folder
│── books-api-server.js      # Node.js Express server
│── books-api-page.html      # Optional frontend page
│── README.md                # Documentation
```

---

## 🛠 Requirements
- Node.js (v14+)
- npm (comes with Node.js)
- Postman or curl (for testing)

---

## 📦 Installation

### 1. Initialize Node.js
```bash
npm init -y
```

### 2. Install Express
```bash
npm install express
```

---

## ▶️ Running the Server
Make sure you are inside the project folder, then run:

```bash
node books-api-server.js
```

Server starts at:
```
http://localhost:3000
```

---

## 🔗 API Endpoints
Below are the available REST API endpoints.

### **1️⃣ GET all books**
```
GET /books
```
**Response:**
```json
[
  { "id": 1, "title": "1984", "author": "George Orwell" }
]
```

---

### **2️⃣ GET a book by ID**
```
GET /books/:id
```
**Example:**
```
GET /books/1
```

---

### **3️⃣ POST (Add) a new book**
```
POST /books
```
**Body (JSON):**
```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien"
}
```

---

### **4️⃣ PUT (Update) a book**
```
PUT /books/:id
```
**Body (JSON):**
```json
{
  "title": "New Title",
  "author": "New Author"
}
```

---

### **5️⃣ DELETE a book**
```
DELETE /books/:id
```
**Example:**
```
DELETE /books/2
```

---

## 🧪 Testing with Postman
1. Open Postman
2. Use base URL:
```
http://localhost:3000
```
3. Use each API endpoint:
- GET → /books
- POST → /books (Body → raw → JSON)
- PUT → /books/:id
- DELETE → /books/:id

---

## 🖥 Optional: Web UI Page
You can open `books-api-page.html` in a browser.
It allows you to:
- Add books
- View books
- Edit books
- Delete books

⚠️ If CORS error appears, enable CORS in your server:
```bash
npm install cors
```
Add this in `books-api-server.js`:
```js
const cors = require('cors');
app.use(cors());
```

---

## 📘 Summary
This task helps you learn:
- Node.js REST API development
- CRUD operations
- Express routing
- JSON handling
- Testing APIs with Postman

If you want enhancements (database, validation, pagination, or deployment), let me know! 🚀
