const { Article } = require('../models')



// Ajouter un article

exports.addArticle = async (req, res, next) => {

    try {
        
        const article = await Article.create(req.body)
        res.json({ message: 'Article added successfully', data: article })
    } catch (error) {
        next(error)
    }

}

// Afficher les articles

exports.allArticles = async (req, res) => {

    try {
        
        const article = await Article.findAll()
        res.json({ message: 'Here are all the articles', data: article })

    } catch (error) {
        next(error)
    }
}

// Afficher un seul article

exports.findOneArticle = async (req, res, next) => {

    try {
        
        const article = await Article.findByPk(req.params.id)
        if(!article){
            const err = new Error('Cette article n\'existe pas')
            err.statusCode = 404
            return next(err)
        }

        res.json({ message: 'Here is the article', data: article })
    } catch (error) {
       next(error)
    }
}

// Modifier un article

exports.updateArticle = async (req, res, next) => {

    try {

        const id = req.params.id
        const article = await Article.update(req.body, { where: { id } })
        
        if(article === 0){
            const err = new Error('Article not found')
            err.statusCode = 404
            return next(err)
        }
        const updatedArticle = await Article.findByPk(id)
        res.json({ message: 'Article updated', data: updatedArticle })

    } catch (error) {
        next(error)
    }
}

// Supprimer un article

exports.deleteArticle = async (req, res, next) => {

    try {
        
        const id = req.params.id
        const article = await Article.findByPk(id)
        if(!article){
            const err = new Error('This article does not existe...')
        }

        await Article.destroy({ where: { id } })
        res.json({ message: 'Article deleted', data: article })

    } catch (error) {    
        next(error)
    }
}