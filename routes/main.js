const express = require('express')
const router = express()
const homeController = require('../controllers/home')
const {ensureAuth} = require('../middleware/auth')
const upload = require("../middleware/multer");




//this is the login page as well
router.get('/',homeController.getLogin) 
router.post('/postLogin', homeController.postLogin)

router.get('/feed',ensureAuth, homeController.getFeed)
router.get('/signup', homeController.getSignup)
router.post('/signup', homeController.createSignup)

router.get('/profile' , ensureAuth, homeController.getPost)
///post routes



router.post('/createPost', upload.single("file"),homeController.createPost)







module.exports = router