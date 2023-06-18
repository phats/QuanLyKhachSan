const userM = require("../models/login.m");

exports.signin = async (req, res, next) => {
    if (req.method === "GET") {
        res.render('login/signin');
    }
}