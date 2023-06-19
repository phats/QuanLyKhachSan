const app = require('express')
const router = app.Router()
const ticketC = require('../controllers/ticket.c')
router.get('/ticket', ticketC.allTicket);
module.exports = router;