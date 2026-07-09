const mysql = require("mysql2");

// Create Database Connection
const connection = mysql.createConnection({
host: process.env.MYSQLHOST,
port: process.env.MYSQLPORT,
user: process.env.MYSQLUSER,
password: process.env.MYSQLPASSWORD,
database: process.env.MYSQLDATABASE
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