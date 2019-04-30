const router = require('express').Router();
const controller = require('../controllers/todo')
const {isLogin} = require('../middlewares/authentication')
const {isAuthorized} = require('../middlewares/authorization')

router.use(isLogin)
//////all below use authentication
router.get('/', controller.findAll)
router.post('/', controller.create)

router.use('/:id', isAuthorized)
//all below use authorization
router.get('/:id', controller.findOne)
router.delete('/:id', controller.deleteOne)
router.patch('/:id', controller.patchOne)
router.put('/:id', controller.putOne)

module.exports = router