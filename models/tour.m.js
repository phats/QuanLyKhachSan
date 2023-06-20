const db = require("../config/db")
const Tour = "TOUR"
module.exports = {
    getAllTour: async () => {
        const tour = db.load(`select * from ${Tour}`)
        return tour;
    },
    getTourByID: async (id) => {
        const tour = db.load(`select * from ${Tour} where MATOUR=${id}`)
        return tour;
    }
}