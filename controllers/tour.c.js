const tourM = require("../models/tour.m")
const userM = require("../models/login.m");

exports.allTour = async (req, res, next) => {
    var isLoggedIn = false
    const tours = await tourM.getAllTour()
    if (req.session.user != null) {
        isLoggedIn = true
        res.render("tour/tour", {
            isLoggedIn,
            account: req.session.user,
            tours
        });
    }
    else {
        res.redirect("/login/signin");
    }

}
exports.addTour = async (req, res, next) => {

    if (req.method === "GET") {

        const id = +req.query.id || -1;
        const tour = await tourM.getTourByID(id)

        res.render("tour/addtour", {

            account: req.session.user,
            timestart: tour[0].GIOKHOIHANH
        });
    }
    else {
        var isTourRegister = false
        var error = "";

        if (req.body.firstname == '' || req.body.email == '' || req.body.phone == '' || req.body.no_ofparticipants == '') {
            error = "Please fill in all the information"

        } else {
            const userDatabase = userM.getUserByEmail(req.body.email);
            const exists = await userM.checkUserExist(req.body.email)
            if (exists[0].exist === 1) {

            }
        }
    }
}

