# express-product-api-mvc

A RESTful Product API built with **Node.js**, **Express**, and **MongoDB**, following the **MVC (Model-View-Controller)** architectural pattern.

---

## 🗂️ Project Structure

```
express-product-api-mvc/
├── config/
│   └── db.js                        # MongoDB connection setup
├── controllers/
|   └── product.controller.js        #Product controllers        
├── routes/
│   └── product.routes.js            # Product API routes
├── app.js                           # Express app setup & middleware
├── server.js                        # Entry point – DB connect & server start
├── .env                             # Environment variables (not committed)
├── .gitignore
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/express-product-api-mvc.git
   cd express-product-api-mvc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

   The server will start at `http://localhost:3000`.

---

## 📡 API Endpoints

All routes are prefixed with `/api`.

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | `/api/products`    | Get all products     |
| GET    | `/api/products/:id`| Get a product by ID  |
| POST   | `/api/products`    | Create a new product |
| PUT    | `/api/products/:id`| Update a product     |
| DELETE | `/api/products/:id`| Delete a product     |

---

## 🛠️ Tech Stack

| Technology | Purpose              |
|------------|----------------------|
| Node.js    | Runtime environment  |
| Express 5  | Web framework        |
| MongoDB    | NoSQL database       |
| Mongoose   | MongoDB ODM          |
| dotenv     | Environment config   |

---

## 📦 Dependencies

```json
{
  "dotenv": "^17.3.1",
  "express": "^5.2.1",
  "mongoose": "^9.3.1"
}
```

---

## 🔒 Environment Variables

| Variable    | Description                        |
|-------------|------------------------------------|
| `MONGO_URI` | MongoDB connection string          |
| `PORT`      | Port on which the server will run  |

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 📄 License

This project is licensed under the **ISC License**.
