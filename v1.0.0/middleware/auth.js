module.exports = {
  ensureAuth: function (req, res, next) {
    console.log("Middleware: ensureAuth is executing");

    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
};
