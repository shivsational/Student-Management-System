const db = require("../config/db");

// ======================================
// Get All Students
// ======================================

exports.getAllStudents = (sort, callback) => {

    const allowedSorts = {

        id: "id",

        name: "name",

        rollNo: "rollNo",

        course: "course"

    };

    const sortColumn = allowedSorts[sort] || "id";

    const sql = `SELECT * FROM students ORDER BY ${sortColumn} ASC`;

    db.query(sql, callback);

};

// ======================================
// Add Student
// ======================================

exports.addStudent = (student, callback) => {

    const sql = `
        INSERT INTO students
        (name, rollNo, course, email, phone)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [

        student.name,

        student.rollNo,

        student.course,

        student.email,

        student.phone

    ], callback);

};

// ======================================
// Delete Student
// ======================================

exports.deleteStudent = (id, callback) => {

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], callback);

};

// ======================================
// Get Student By ID
// ======================================

exports.getStudentById = (id, callback) => {

    const sql = "SELECT * FROM students WHERE id = ?";

    db.query(sql, [id], callback);

};

// ======================================
// Update Student
// ======================================

exports.updateStudent = (id, student, callback) => {

    const sql = `
        UPDATE students
        SET
            name = ?,
            rollNo = ?,
            course = ?,
            email = ?,
            phone = ?
        WHERE id = ?
    `;

    db.query(sql, [

        student.name,

        student.rollNo,

        student.course,

        student.email,

        student.phone,

        id

    ], callback);

};