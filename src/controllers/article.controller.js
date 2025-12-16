const { Article } = require('../models')



// Ajouter un article

exports.addArticle = async (req, res) => {

    try {
        
        const article = await Article.create(req.body)
        res.json({ message: 'Article added successfully', data: article })
    } catch (error) {
        res.status(500).json({ message: 'Oops the server is down, please try later' })
    }

}

// Afficher les articles

exports.allArticles = async (req, res) => {

    try {
        
        const article = await Article.findAll()
        res.json({ message: 'Here are all the articles', data: article })

    } catch (error) {
        
        res.status(500).json({ message: 'Oops the server is down...' })

    }
}

// Afficher un seul article

exports.findOneArticle = async (req, res) => {

    try {
        
        const article = await Article.findByPk(req.params.id)
        if(!article){
            return res.status(404).json({ message: 'There is no article with this ID' })
        }

        res.json({ message: 'Here is the article', data: article })

    } catch (error) {
        
        res.status(500).json({ message: 'Oops the server is down...' })
    }
}

// Modifier un article

exports.updateArticle = async (req, res) => {

    try {

        const id = req.params.id
        const article = await Article.update(req.body, { where: { id } })
        
        if(article === 0){
            return res.status(404).json({ message: 'Article not found' })
        }
        const updatedArticle = await Article.findByPk(id)
        res.json({ message: 'Article updated', data: updatedArticle })

    } catch (error) {
        res.status(500).json({ message: 'Oops server is down sorry' })
        
    }
}

// Supprimer un article

exports.deleteArticle = async (req, res) => {

    try {
        
        const id = req.params.id
        const article = await Article.findByPk(id)
        if(!article){
            return res.status(404).json({ message: 'This article does not existe...' })
        }

        await Article.destroy({ where: { id } })
        res.json({ message: 'Article deleted', data: article })

    } catch (error) {    
        res.status(500).json({ message: 'Oops the server is down...' })
    }
}