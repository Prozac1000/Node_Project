const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/NodeProject").then(() => {
  console.log("mongoose is connected");
});

const usersRouter = require("./routes/users");
const bizRouter = require("./routes/biz");
const middleware = require("./middleware/auth");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/biz", middleware, bizRouter);

module.exports = app;
