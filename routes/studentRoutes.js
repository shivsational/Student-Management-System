const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");
const auth = require("../middleware/auth");

// ======================================
// Authentication Routes
// ======================================

// Login Page
router.get("/", studentController.home);

// Login
router.post("/login", studentController.login);

// Logout
router.get("/logout", studentController.logout);

// ======================================
// Dashboard
// ======================================

router.get("/dashboard", auth, studentController.dashboard);

// ======================================
// Student Routes
// ======================================

// View All Students
router.get("/students", auth, studentController.getStudents);

// Add Student
router.get("/add", auth, studentController.addPage);
router.post("/add", auth, studentController.addStudent);

// Edit Student
router.get("/edit/:id", auth, studentController.editPage);
router.post("/edit/:id", auth, studentController.updateStudent);

// Delete Student
router.get("/delete/:id", auth, studentController.deleteStudent);

// ======================================
// Export Router
// ======================================

module.exports = router;
