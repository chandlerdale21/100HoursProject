const Post = require("../models/Post");
const User = require("../models/User");
const validator = require("validator");
const passport = require("passport");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getPost: async (req, res) => {
    try {
      console.log("req.user:", req.user);

      if (!req.user || !req.user.id) {
        return res.status(400).json({ message: "User not authenticated" });
      }
      const userProfile = await User.find({ _id: req.user.id });
      const userPosts = await Post.find();

      if (!userProfile || userProfile.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      const { username, email, _id } = userProfile[0];
      console.log(_id);
      console.log("break");
      const matchingPosts = userPosts.filter((post) => {
        if (post.user.toString() == _id.toString()) {
          return post;
        }
      });

      console.log(matchingPosts);

      res.json([{ username, email }, { matchingPosts }]);
    } catch (err) {
      console.error(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const data = await Post.find();
      data.reverse();
      res.json(data);
    } catch (err) {
      console.error(err);
    }
  },
  createPost: async (req, res) => {
    console.log("req.user:", req.user);
    try {
      console.log(req.body);
      console.log(req?.file?.path);
      const result = await cloudinary.uploader.upload(req?.file?.path);
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
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    if (!validator.isLength(req.body.password, { min: 8 }))
      validationErrors.push({
        msg: "Password must be at least 8 characters long",
      });
    if (validationErrors.length) {
      return res.json({ errors: validationErrors });
    }

    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) {
        validationErrors.push({
          msg: "Please verify your email or password. If you dont have an account feel free to signup below",
        });
      }
      if (validationErrors.length) {
        return res.json({ errors: validationErrors });
      } else {
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
      console.log(
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.confirmPassword
      );

      const validationErrors = [];
      if (!validator.isEmail(req.body.email))
        validationErrors.push({ msg: "Please enter a valid email address." });
      if (!validator.isLength(req.body.password, { min: 8 }))
        validationErrors.push({
          msg: "Password must be at least 8 characters long",
        });
      if (req.body.password !== req.body.confirmPassword)
        validationErrors.push({ msg: "Passwords do not match" });

      if (validationErrors.length) {
        return res.json({ errors: validationErrors });
      }

      req.body.email = validator.normalizeEmail(req.body.email, {
        gmail_remove_dots: false,
      });

      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
