const router = require('express').Router();
const controller = require('../controllers/todo')
const {isLogin} = require('../middlewares/authentication')
const {isAuthorized} = require('../middlewares/authorization')

router.use(isLogin)
//////all below use authentication

router.get('/', controller.findAll)
router.post('/', controller.create)
router.get('/:id', isAuthorized, controller.findOne)
router.delete('/:id', isAuthorized, controller.deleteOne)
router.patch('/:id', isAuthorized, controller.patchOne)
router.put('/:id', isAuthorized, controller.putOne)

module.exports = router