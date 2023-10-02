const express = require("express");
const app = express();
const connectDB = require("./config/database");
const mongoose = require("mongoose");
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const MongoStore = require("connect-mongo")(session);
const mainRoutes = require("./routes/main");
const cors = require("cors");
const bcrypt = require("bcryptjs");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//dbconnections
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

require("dotenv").config({ path: "./config/.env" });
require("./config/passport")(passport);
connectDB();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

app.use(flash());
//routes
app.use("/", mainRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
