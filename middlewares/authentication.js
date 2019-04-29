const {User} = require('../models')
const {verify} = require('../helpers/jwt')

module.exports = {
    isLogin(req,res,next) {
        // console.log(req.headers.token)
        // console.log('masuk isLogin')
        const decoded = verify(req.headers.token)
        req.decoded = decoded
        next()
    }
}