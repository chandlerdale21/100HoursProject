const Post = require("../models/Post");
const User = require("../models/User");
const validator = require("validator");
const passport = require("passport");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getPost: async (req, res) => {
    try {
      const userPosts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: userPosts, user: req.user });
      console.log(userPosts);
    } catch (err) {
      console.error(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const data = await Post.find();
      res.json(data);
    } catch (err) {
      console.error(err);
    }
  },
  createPost: async (req, res) => {
    try {
      console.log(req.file.path);
      const result = await cloudinary.uploader.upload(req.file.path);
      await Post.create({
        title: req.body.title,
        caption: req.body.caption,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id,
      });
      res.redirect("/profile");
    } catch (err) {
      console.error(err);
    }
  },
  getLogin: async (req, res) => {
    try {
      res.json("welcome to the site");
    } catch (err) {
      console.error(err);
    }
  },
  postLogin: async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("this backend has succesfully authenticated");
        });
      }
    })(req, res, next);
  },
  getSignup: async (req, res) => {
    try {
      res.json();
    } catch (err) {
      console.error(err);
    }
  },
  createSignup: async (req, res) => {
    try {
      console.log(req.body.username, req.body.email, req.body.password);
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.send(error);
    }
  },
};
