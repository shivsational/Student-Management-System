const bcrypt = require("bcrypt");
const Admin = require("../models/adminModel");
const Student = require("../models/studentModel");

// ==============================
// Admin Login
// ==============================
exports.login = (req, res) => {

    let { username, password } = req.body;

    username = username.trim();
    password = password.trim();

    if (!username || !password) {

        return res.render("index", {
            error: "Username and Password are required.",
            success: null
        });

    }

    Admin.login(username, async (err, result) => {

        if (err) {

            console.log(err);

            return res.render("index", {
                error: "Something went wrong. Please try again.",
                success: null
            });

        }

        if (result.length === 0) {

            return res.render("index", {
                error: "Invalid Username",
                success: null
            });

        }

        const admin = result[0];

        const match = await bcrypt.compare(password, admin.password);

        if (!match) {

            return res.render("index", {
                error: "Incorrect Password",
                success: null
            });

        }

        req.session.user = admin.username;

        res.redirect("/dashboard");

    });

};

// ==============================
// Logout
// ==============================
exports.logout = (req, res) => {

    req.session.destroy((err) => {

        if (err) {

            console.log(err);

            return res.redirect("/dashboard");

        }

        res.redirect("/");

    });

};

// ==============================
// Login Page
// ==============================
exports.home = (req, res) => {

    res.render("index", {
        error: null,
        success: null
    });

};

// ==============================
// Dashboard
// ==============================
exports.dashboard = (req, res) => {

    Student.getAllStudents("id", (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).render("500");

        }

        res.render("dashboard", {

            total: result.length,

            username: req.session.user,

            activePage: "dashboard"

        });

    });

};

// ==============================
// Show All Students
// ==============================
exports.getStudents = (req, res) => {

    const sort = req.query.sort || "id";

    Student.getAllStudents(sort, (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).render("500");

        }

        res.render("students", {

            students: result,

            activePage: "students",

            currentSort: sort

        });

    });

};

// ==============================
// Add Student Page
// ==============================
exports.addPage = (req, res) => {

    res.render("addStudent", {

        activePage: "add"

    });

};

// ==============================
// Add Student
// ==============================
exports.addStudent = (req, res) => {

    let { name, rollNo, course, email, phone } = req.body;

    name = name.trim();
    rollNo = rollNo.trim();
    course = course.trim();
    email = email.trim().toLowerCase();
    phone = phone.trim();

    if (!name || !rollNo || !course || !email || !phone) {

        req.session.error = "All fields are required.";

        return res.redirect("/add");

    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {

        req.session.error = "Invalid email address.";

        return res.redirect("/add");

    }

    if (!/^[0-9]{10}$/.test(phone)) {

        req.session.error = "Phone number must contain exactly 10 digits.";

        return res.redirect("/add");

    }

    Student.addStudent({

        name,
        rollNo,
        course,
        email,
        phone

    }, (err) => {

        if (err) {

            console.log(err);

            if (err.code === "ER_DUP_ENTRY") {

                req.session.error = "Email or Roll Number already exists.";

                return res.redirect("/add");

            }

            req.session.error = "Unable to add student.";

            return res.redirect("/add");

        }

        req.session.success = "Student added successfully.";

        res.redirect("/students");

    });

};

// ==============================
// Edit Student Page
// ==============================
exports.editPage = (req, res) => {

    const id = req.params.id;

    Student.getStudentById(id, (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).render("500");

        }

        if (result.length === 0) {

            return res.status(404).render("404");

        }

        res.render("editStudent", {

            student: result[0],

            activePage: "students"

        });

    });

};

// ==============================
// Update Student
// ==============================
exports.updateStudent = (req, res) => {

    let { name, rollNo, course, email, phone } = req.body;

    name = name.trim();
    rollNo = rollNo.trim();
    course = course.trim();
    email = email.trim().toLowerCase();
    phone = phone.trim();

    if (!name || !rollNo || !course || !email || !phone) {

        req.session.error = "All fields are required.";

        return res.redirect("/edit/" + req.params.id);

    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {

        req.session.error = "Invalid email address.";

        return res.redirect("/edit/" + req.params.id);

    }

    if (!/^[0-9]{10}$/.test(phone)) {

        req.session.error = "Phone number must contain exactly 10 digits.";

        return res.redirect("/edit/" + req.params.id);

    }

    Student.updateStudent(req.params.id, {

        name,
        rollNo,
        course,
        email,
        phone

    }, (err) => {

        if (err) {

            console.log(err);

            if (err.code === "ER_DUP_ENTRY") {

                req.session.error = "Email or Roll Number already exists.";

                return res.redirect("/edit/" + req.params.id);

            }

            req.session.error = "Unable to update student.";

            return res.redirect("/edit/" + req.params.id);

        }

        req.session.success = "Student updated successfully.";

        res.redirect("/students");

    });

};

// ==============================
// Delete Student
// ==============================
exports.deleteStudent = (req, res) => {

    Student.deleteStudent(req.params.id, (err) => {

        if (err) {

            console.log(err);

            return res.status(500).render("500");

        }

        req.session.success = "Student deleted successfully.";

        res.redirect("/students");

    });

};