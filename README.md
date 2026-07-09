# Student Management System

A simple and responsive Student Management System developed using **Node.js**, **Express.js**, **EJS**, **MySQL**, **Bootstrap 5**, **HTML**, **CSS**, and **JavaScript**.

The project allows an administrator to securely manage student records with authentication and complete CRUD functionality.

---

## Features

- Secure Admin Login (bcrypt password hashing)
- Session-Based Authentication
- Dashboard
- Add Student
- View Students
- Edit Student
- Delete Student
- Search Students
- Sort Students (ID, Name, Roll Number, Course)
- Flash Messages
- Input Validation
- Duplicate Record Detection
- Responsive User Interface
- MySQL Database Integration
- Custom 404 & 500 Error Pages

---

## Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- EJS

### Backend

- Node.js
- Express.js

### Database

- MySQL

### Packages

- express
- ejs
- mysql2
- express-session
- bcrypt
- dotenv
- nodemon

---

## Project Structure

```
Student-Management-System/

├── config/
│   └── db.js
│
├── controllers/
│   └── studentController.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── adminModel.js
│   └── studentModel.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── routes/
│   └── studentRoutes.js
│
├── views/
│   ├── partials/
│   │   ├── alerts.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── 404.ejs
│   ├── 500.ejs
│   ├── addStudent.ejs
│   ├── dashboard.ejs
│   ├── editStudent.ejs
│   ├── index.ejs
│   └── students.ejs
│
├── .env
├── .gitignore
├── app.js
├── database.sql
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

or download the ZIP file.

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create the MySQL database

Run the following SQL file:

```
database.sql
```

This creates all required tables and inserts the default administrator.

---

### 4. Create a `.env` file

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=student_management

SESSION_SECRET=student_management_secret
PORT=3000
```

Replace `your_mysql_password` with your own MySQL password.

---

### 5. Start the project

Production:

```bash
npm start
```

Development:

```bash
npm run dev
```

---

### 6. Open the application

```
http://localhost:3000
```

---

## Default Admin Login

Username

```
admin
```

Password

```
admin123
```

---

## Future Enhancements

- Student Photo Upload
- Attendance Management
- Marks Management
- Export to Excel
- Export to PDF
- Email Notifications
- Multiple Admin Accounts
- Student Login Portal
- Pagination
- Advanced Search

---

## Author

**Shiv Yadav**

B.Tech CSE

GLA University, Mathura

2026