const db = require("../config/db");

// ======================================
// Admin Login
// ======================================

exports.login = (username, callback) => {

    const sql = "SELECT * FROM admins WHERE username = ?";

    db.query(sql, [username], callback);

};