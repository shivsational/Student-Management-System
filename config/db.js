const mysql = require("mysql2");

// Create Database Connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error("❌ Database Connection Failed!");
        console.error(err);
        process.exit(1);
    }

    console.log("✅ Database Connected");
});

// Export Connection
module.exports = connection;