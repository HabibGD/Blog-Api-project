const express = require('express')
const router = express.Router()
const articleController = require('../controllers/article.controller')



// Article CRUD operations routes

router.post('/', articleController.addArticle)
router.get('/', articleController.allArticles)
router.get('/:id', articleController.findOneArticle)
router.put('/:id', articleController.updateArticle)
router.delete('/:id', articleController.deleteArticle)










module.exports = router