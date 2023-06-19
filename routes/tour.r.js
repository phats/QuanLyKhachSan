const app = require('express')
const router = app.Router()
const tourC = require('../controllers/tour.c')
router.get('/tour', tourC.allTour);
module.exports = router;