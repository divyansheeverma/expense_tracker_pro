# 💸 Expense Tracker Pro — REST API

> A clean, modular REST API for tracking personal expenses and income — built with Node.js, Express, and MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)



---

## ✨ Features

- 👤 **User Management** — Register, login, and manage user accounts
- 💰 **Transaction Tracking** — Log income and expense transactions
- 🗂️ **Modular Architecture** — Clean separation using feature-based modules
- 🔒 **Error Handling** — Centralized async error handling middleware
- 🌐 **CORS Enabled** — Ready for frontend integration

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Error Handling | express-async-errors |
| Config | dotenv |
| Cross-Origin | cors |

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/divyansheeverma/expense_tracker_pro.git
cd expense_tracker_pro
```

### 2. Set up environment variables

Create a `.env` file in the root directory:
```env
mongo_connection=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Install & run

```bash
npm install
npm start
```

Server runs at `http://localhost:8000`

---

## 📁 Project Structure

```
expense_tracker_pro/
├── modules/
│   ├── users/
│   │   ├── users.routes.js        # User route definitions
│   │   ├── users.controller.js    # User business logic
│   │   └── users.validation.js    # Input validation
│   └── transactions/
│       ├── transactions.routes.js     # Transaction route definitions
│       └── transactions.controller.js # Transaction business logic
├── models/
│   ├── users.model.js             # Mongoose User schema
│   └── transactions.model.js      # Mongoose Transaction schema
├── handlers/
│   └── errorHandler.js            # Global error handling middleware
├── .env
├── app.js                         # Express app entry point
└── package.json
```

---

## 🔌 API Endpoints

### Users
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/users/register` | Register a new user |
| `POST` | `/api/users/login` | Login and receive auth token |
| `GET` | `/api/users/profile` | Get logged-in user profile |

### Transactions
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/transactions` | Add a new transaction |
| `GET` | `/api/transactions` | Get all transactions for user |
| `GET` | `/api/transactions/:id` | Get a single transaction |
| `PUT` | `/api/transactions/:id` | Update a transaction |
| `DELETE` | `/api/transactions/:id` | Delete a transaction |

---

## 🧩 Architecture Highlights

**Feature-based module structure** — each feature (users, transactions) owns its own routes, controllers, and validation logic, making the codebase easy to scale and maintain.

**Centralized error handling** — all async errors are caught and routed through a single `errorHandler` middleware, keeping controllers clean.

```
Request → Route → Controller → Model → DB
                     ↓
              errorHandler (middleware)
                     ↓
              JSON error response
```

---

> ⚠️ **Status:** Backend API complete. Frontend under development.

## 🗺️ Roadmap

- [ ] Frontend (React) — in progress
- [ ] Budget limits & alerts
- [ ] Category-wise spending breakdown
- [ ] Monthly reports & charts
- [ ] CSV export

---

## 📄 License

MIT License

---

*Built with Node.js & MongoDB · by [Divyanshee Verma](https://github.com/divyansheeverma)*
