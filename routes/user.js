const router = require('express').Router();
const UserController = require('../controllers/user')
const {isLogin} = require('../middlewares/authentication')
const {isAuthorizedUser} = require('../middlewares/authorization')

router.use(isLogin)
router.patch('/:id', isAuthorizedUser, UserController.updateOne)
router.delete('/:id', isAuthorizedUser, UserController.deleteOne)

module.exports = router