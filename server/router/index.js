const Router = require('express') 
const userController = require('../controllers/user.controller')

const router = new Router() 

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/content', userController.getContent)
router.post('/check', userController.check)

module.exports = router    