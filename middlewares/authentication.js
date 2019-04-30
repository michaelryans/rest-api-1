const {User} = require('../models')
const {verify} = require('../helpers/jwt')

module.exports = {
    isLogin(req,res,next) {
        if (!req.headers.token) {
            res.status(401).json('please provide access token')
        } else {
            const decoded = verify(req.headers.token)
            req.decoded = decoded
            next()
        }
    }
}