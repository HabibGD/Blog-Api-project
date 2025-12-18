const { User, Article } = require('../models')
const Comment = require('../models/comment.model')


exports.addComment =  async (req, res, next) => {

    try {

        const comment = await Comment.create(req.body)
        res.json({ message: 'Comment added', data: comment })
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.findAllComment = async (req, res, next) => {

    try {
        
        const comments = await Comment.findAll()
        res.json({ message: 'Here is all the comments', data: comments })

    } catch (error) {
        next(error)
    }
}

exports.findOneComment = async (req, res, next) => {

    try {
        
        const id = req.params.id
        const comment = await Comment.findByPk(id, {
            include: {
                model: User,
                as: 'users'
            },
            include: {
                model: Article,
                as: 'articles'
            }
        })

        if(!comment){
            const err = new Error('Il n\'existe pas de commentaire avec cet ID')
            err.statusCode = 404
            return next(err)
        }

        res.json({ message: 'Here is the comment', data: comment })
    } catch (error) {
        next(error)
    }
}