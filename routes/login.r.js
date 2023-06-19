const app = require('express')
const router = app.Router()
const userC = require('../controllers/login.c')

router.get('/home', userC.home);
router.get('/login/signin', userC.signin)
router.post('/login/signin', userC.signin)
router.post('/logout', userC.logout)

module.exports = router;