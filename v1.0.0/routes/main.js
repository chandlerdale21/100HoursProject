const express = require("express");
const router = express();
const homeController = require("../controllers/home");
const { ensureAuth } = require("../middleware/auth");
const upload = require("../middleware/multer");

//this is the login page as well
router.get("/", homeController.getLogin);
router.post("/postLogin", homeController.postLogin);

router.get("/feeds", homeController.getFeed);
router.post("/signup", homeController.createSignup);
router.get("/signup", homeController.getSignup);

router.get("/profile", homeController.getPost);
///post routes

router.post("/createPost", upload.single("file"), homeController.createPost);

module.exports = router;
