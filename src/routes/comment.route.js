const express = require('express')
const commentController = require('../controllers/comment.controller')
const router = express.Router()



router.post('/', commentController.addComment)
router.get('/', commentController.findAllComment)
router.get('/:id', commentController.findOneComment)





module.exports = router

