# Auth & Tasks API

A RESTful API with **Authentication** and **CRUD operations** for managing users and tasks.  
Built with **Node.js, Express, MongoDB, JWT, and Swagger**.

---

## 🚀 Features

- User **signup, login, logout** with JWT authentication
- CRUD API for **tasks** (create, read, update, delete)
- Ownership checks (users can only manage their own tasks)
- Passwords hashed with bcrypt
- Email notifications (login & signup alerts)
- API documentation with **Swagger UI**
- Environment variable support with `.env`

---

## 📂 Folder Structure

project-root/
│── controllers/ # Business logic for auth & tasks
│── models/ # Mongoose models (User, Task)
│── routes/ # Express route definitions
│── middleware/ # Auth middleware (JWT protection)
│── utils/ # Utility functions (sendEmail, etc.)
│── index.js # App entry point
│── package.json
│── .env.example # Sample environment variables

---

## ⚙️ Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/GodwinOkechukwu/backendTask.git
   cd your-repo
   ```
