const tourM = require("../models/tour.m")
const customerM = require("../models/customer.m");
const Handlebars = require('handlebars');

exports.allTour = async (req, res, next) => {
    var isLoggedIn = false
    const tours = await tourM.getAllTour()
    Handlebars.registerHelper('ChangeStartDateFormat', function (NgayDen) {
        // Thực hiện phép tính để lấy ngày kết thúc
        var startDate = new Date(NgayDen);

        // Trả về ngày kết thúc

        return startDate.toISOString().split('T')[0];
    });
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
    const id = +req.query.id || -1;
    const tour = await tourM.getTourByID(id)

    if (req.method === "GET") {
        res.render("tour/addtour", {

            account: req.session.user,

        });
    }
    else {


        res.redirect("/tour")
    }

}

