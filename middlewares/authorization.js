const {Todo, User} = require('../models')

module.exports = {
    isAuthorized(req,res, next) {
        console.log("test")
        console.log(req.params)
        console.log('-----------')
        Todo.findOne({where: {id:req.params.id}})
        .then(found => {
            if(found.user_id == req.decoded.id) {
                next()
            } else {
                res.status(401).json('not authorized')
            }
        })
        .catch(err => {
            res.status(400).json('bad request')
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