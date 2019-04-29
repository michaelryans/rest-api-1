const express = require('express')
const router = express.Router()
const userRouter = require('./user.js')
const todoRouter = require('./todo')
const UserController = require('../controllers/user')

router.post('/register', UserController.create)
router.post('/login', UserController.login)

router.use('/todos', todoRouter)
router.use('/users', userRouter)
router.get('/*', (req,res) => {
    res.status(404).json("Check the complete documentation here -> \"https://github.com/michaelryans/rest-api-1\"> https://github.com/michaelryans/rest-api-1 </a>")
})


module.exports = router