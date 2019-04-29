const {Todo, User} = require('../models')

module.exports = {
    isAuthorized(req,res, next) {
        Todo.findOne({where: {id:req.params.id}})
        .then(found => {
            if(found.user_id == req.decoded.id) {
                next()
            } else {
                res.status(401).json('not authorized')
            }
        })
        .catch(err => {
            res.status(400).json('bad request, todo not found')
        })
    },
    isAuthorizedUser(req,res,next) {
        User.findOne({where: {id:req.params.id}})
        .then(found => {
            if(found.email == req.decoded.email) next()
            else {
                res.status(401).json('not authorized')
            }
        })
        .catch(err => {
            res.status(400).json('bad request')
        })
    }
}