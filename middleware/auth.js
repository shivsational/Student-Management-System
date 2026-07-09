// ======================================
// Authentication Middleware
// ======================================

module.exports = (req, res, next) => {

    // Check whether user is logged in
    if (req.session.user) {

        return next();

    }

    // Show message and redirect to login page
    req.session.error = "Please login to continue.";

    res.redirect("/");

};