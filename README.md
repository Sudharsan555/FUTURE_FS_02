# 📊 Client Lead CRM – Full Stack Application

Client Lead CRM is a **full-stack Lead Management System** with a public **Contact Form** and a secure **Admin Dashboard**.  
Leads submitted from the frontend are stored in **MongoDB** and can be viewed only by authenticated admins.

This project is built as a **real-world learning + portfolio project** to understand **frontend–backend integration, authentication, protected routes, and database handling**.

---

## 🚀 Features

### 🌍 Public
- Contact form accessible via URL
- No login required to submit leads
- Lead data stored securely in MongoDB
- Automatic lead status set to `new`

### 🔐 Admin
- Secure admin login using JWT
- Protected dashboard access
- View all leads
- View individual lead details
- Update lead status
- Logout & route protection

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Context API
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv
- cors

---

## 📂 Project Folder Structure

```
client-lead-crm
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── leadController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── Lead.js
│   │   └── User.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── leadRoutes.js
│   │
│   ├── .env
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── public
│   │   └── index.html
│   │
│   ├── src
│   │   ├── api
│   │   │   ├── leadApi.js
│   │   │   └── publicLeadApi.js
│   │   │
│   │   ├── components
│   │   │   ├── LeadCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Contact.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LeadDetails.jsx
│   │   │   ├── Leads.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── README.md
└── package-lock.json
```

---

## 🔗 Application URLs

### 🌍 Frontend
```
http://localhost:5173
```

### 📝 Public Contact Form
```
http://localhost:5173/contact
```

### 🔐 Admin Login
```
http://localhost:5173/login
```

### 📊 Admin Dashboard (Protected)
```
http://localhost:5173/
```

---

## 🔌 API Endpoints

### Public (No Authentication)

| Method | Endpoint     | Description              |
|-------|--------------|--------------------------|
| POST  | /api/leads   | Submit contact form lead |

### Admin (JWT Required)

| Method | Endpoint         | Description        |
|-------|------------------|--------------------|
| POST  | /api/auth/login  | Admin login        |
| GET   | /api/leads       | Get all leads      |
| GET   | /api/leads/:id   | Get single lead    |
| PUT   | /api/leads/:id   | Update lead status |

---

## 🗄️ MongoDB Storage

### Database Name
```
client-lead-crm
```

### Collections
- `users` → Admin credentials
- `leads` → Contact form submissions

### Sample Lead Document
```json
{
  "_id": "65fa2c1e9b123",
  "name": "Sudharsan V",
  "email": "user@gmail.com",
  "message": "Interested in your service",
  "status": "new",
  "createdAt": "2026-01-10T10:30:00Z"
}
```

---

## ⚙️ Environment Variables (`backend/.env`)
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/client-lead-crm
JWT_SECRET=your_jwt_secret_key
```

---

## ▶️ Run the Project

### Backend
```
cd backend
npm install
npm run dev
```

### Frontend
```
cd frontend
npm install
npm run dev
```

---

## 📬 Contact Form Flow

1. User opens `/contact`
2. Form data sent to backend API
3. Express processes request
4. MongoDB stores the lead
5. Admin logs in
6. Leads appear in dashboard

---

## 👨‍💻 Author

Sudharsan V  
Aspiring Full-Stack Developer
