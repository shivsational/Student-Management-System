require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

// ===============================
// View Engine
// ===============================
app.set("view engine", "ejs");

// ===============================
// Parse Form Data
// ===============================
app.use(express.urlencoded({ extended: true }));

// ===============================
// Static Files
// ===============================
app.use(express.static(path.join(__dirname, "public")));

// ===============================
// Trust Proxy (for deployment)
// ===============================
app.set("trust proxy", 1);

// ===============================
// Session Middleware
// ===============================
app.use(session({

    secret: process.env.SESSION_SECRET,

    resave: false,

    saveUninitialized: false,

    cookie: {

        httpOnly: true,

        secure: process.env.NODE_ENV === "production",

        sameSite: "lax",

        maxAge: 1000 * 60 * 60 // 1 Hour

    }

}));

// ===============================
// Flash Message Middleware
// ===============================
app.use((req, res, next) => {

    res.locals.success = req.session.success || null;
    res.locals.error = req.session.error || null;

    delete req.session.success;
    delete req.session.error;

    next();

});

// ===============================
// Routes
// ===============================
app.use("/", studentRoutes);

// ===============================
// 404 Page
// ===============================
app.use((req, res) => {

    res.status(404).render("404");

});

// ===============================
// Start Server
// ===============================
app.listen(process.env.PORT, () => {

    console.log(`Server Running on Port ${process.env.PORT}`);

});