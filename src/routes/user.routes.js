const userController = require('../controllers/user.controller')
const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()



/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Creer un compte / Ajouter un utilisateur
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *     description: Liste des utilisateurs   
 * 
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Se connecter
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *     description: Liste des utilisateurs   
 * 
 */




router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)










module.exports = router
