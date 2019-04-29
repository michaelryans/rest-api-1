const {User} = require('../models')
const {compare} = require('../helpers/bcrypt')
const {sign} = require('../helpers/jwt')

class UserController {
    static login(req,res) {
        // User.findOne({email:req.body.email})
        User.findOne({where:{email:req.body.email}})
        .then(found => {
            if(!found) {
                res.status(400).json({
                    message:'invalid user/password'
                })
            } else {
                const compared = compare(req.body.password, found.password)

                if(compared) {
                    const to_be_decoded = {
                        id: found.id,
                        email: found.email
                    }
                    const token = sign(to_be_decoded, process.env.JWT_SECRET)
                    res.status(200).json({token})
                } else {
                    res.status(400).json({
                        message: ' invalid user/password'
                    })
                }
            }
        })
        .catch(err => {
            res.status(500).json({
                message:'error when login',
                error: err,
            })
        })
    }

    static create(req,res) {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(created => {
            res.status(201).json(created)
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "error when creating new user"
            })
        })
    }

    
    static findAll(req,res) {
        User.findAll()
         .then(found => {
             res.status(200).json(found)
         })
         .catch(err => {
             res.status(500).json({
                 message: "error in findAll",
                 error: err,
             })
         })
    }


    static findOne(req,res) {
        User.findByPk(req.params.id)
         .then(found => {
            if(!found) res.status(400).json({
                message: 'bad request, id not found'
            })
            else res.status(200).json(found)
         })
         .catch(err => {
             res.status(500).json(err)
         })
    }


    static deleteOne(req,res) {
        User.findByPk(req.params.id)
         .then(found => {
             if(found) {
                return found.destroy()
                .then(deleted => {
                    res.status(200).json(`success deleting user id ${req.params.id}`)
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'error deleting user',
                        error: err,
                    })
                })
             } else {
                 res.status(400).json({
                     message:'bad request, user not found'
                 })
             }
         })
         .catch(err => {
             res.status(500).json({
                 message:'error when deleting one',
                 error: err,
             })
         })
    }

    static updateOne(req,res) {
        User
         .findByPk(req.params.id)
         .then(found => {
             if(found) {
                 found.password = req.body.password
                 found.save()
                 .then(saved => {
                     res.status(200).json(`successfully updated user password ${req.params.id}`)
                 })
                 .catch(err => {
                     res.status(500).json(err)
                 })
             } else {
                 res.status(400).json('bad request, user not found')
             }
         })
         .catch(err => {
             res.status(500).json({
                 message:'error when updating user',
                 error: err,
             })
         })
    }
}

module.exports = UserController