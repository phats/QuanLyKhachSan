const userM = require("../models/login.m");

exports.home = async (req, res, next) => {
    var isLoggedIn = false
    if (req.session.user != null) {
        isLoggedIn = true
        res.render("home", {
            isLoggedIn,
            account: req.session.user
        });
    }
    else {
        res.redirect("/login/signin");
    }

}
exports.signin = async (req, res, next) => {
    if (req.method == "GET") {
        res.render('login/signin');
    }
    else if (req.method == "POST") {
        console.log(req.body);
        req.session.user = req.body.username;
        res.redirect("/home")
    }
}
exports.logout = async (req, res, next) => {
    req.session.user = null;
    res.redirect("/login/signin");
}