const {Todo} = require('../models')

class TodoController {
    static create(req,res) {
        const {title, description} = req.body
        const user_id = req.decoded.id
        console.log(user_id)
        console.log('-----------')
        Todo.create({title, description, user_id})
        .then(created => {
            res.status(201).json(created)
        })
        .catch(err => {
            res.status(500).json({
                message:'error when creating new todo',
                error: err,
            })
        })
    }
    
    static findAll(req,res) {
        Todo.findAll({where: {user_id: req.decoded.id}})
        .then(found => {
            res.status(200).json(found)
        })
        .catch(err => {
            res.status(500).json({
                message: 'error when findAll Todo',
                error: err
            })
        })
    }

    static findOne(req,res) {
        Todo.findOne({where: {id:req.params.id}})
        .then(found => {
            res.status(200).json(found)
        })
        .catch(err => {
            res.status(500).json({
                message: ' error when findOne todos',
                error: err,
            })
        })
    }

    static deleteOne(req,res) {
        Todo.destroy({where: {id:req.params.id}})
        .then(deleted => {
            res.status(200).json(`successfully deleted todo id ${req.params.id}`)
        })
        .catch(err => {
            res.status(500).json({
                message:'error when deleting',
                error: err,
            })
        })
    }
    
    static patchOne(req,res) {
        Todo.update(req.body, {where:{id: req.params.id}})
        .then(patched => {
            res.status(200).json({
                message:`successfully patched todo id ${req.params.id}`
            })
        })
        .catch(err => {
            res.status(500).json({
                message:'error when patchOne todo',
                error: err,
            })
        })
    }

    static putOne(req,res) {
        Todo.update(req.body, {where:{id: req.params.id}})
        .then(patched => {
            res.status(200).json({
                message:`successfully updated todo id ${req.params.id}`
            })
        })
        .catch(err => {
            res.status(500).json({
                message:'error when updateOne todo',
                error: err,
            })
        })
    }
}

module.exports = TodoController