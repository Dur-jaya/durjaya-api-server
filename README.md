# 🚀 Durjaya API Server

A full-stack Task Management app built with **Express.js**, **MongoDB**, and a beautiful **HTML + CSS frontend**. It allows you to create, read, update, and delete (CRUD) tasks through a custom REST API.

![GitHub Repo stars](https://img.shields.io/github/stars/Dur-jaya/durjaya-api-server?style=social)
![GitHub forks](https://img.shields.io/github/forks/Dur-jaya/durjaya-api-server?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/Dur-jaya/durjaya-api-server)

---

## 🌟 Features

- 🧠 Custom RESTful API with 4 CRUD endpoints
- 💾 MongoDB integration for persistent storage
- 🎨 Stylish and responsive frontend
- ✍️ Task creation, editing, completion, and deletion
- 🔐 Environment variables managed via `.env`

---

## 🧪 Tech Stack

| Layer     | Tech                      |
|-----------|---------------------------|
| Backend   | Node.js, Express.js       |
| Database  | MongoDB, Mongoose         |
| Frontend  | HTML, CSS, JavaScript     |
| Tools     | Postman, VS Code, GitHub  |

---

## 📁 Project Structure

durjaya-api-server/
├── public/ # Frontend files
│ ├── index.html
│ ├── styles.css
│ └── script.js
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── index.js # Main backend entry
├── .env
├── package.json
└── README.md

---

## 🔁 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/tasks`     | Get all tasks           |
| POST   | `/api/tasks`     | Create a new task       |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task           |

---

📌 **Notes**  
This app is built to run locally and uses a local MongoDB instance.  
You can test APIs using VS Code REST Client or Postman.
