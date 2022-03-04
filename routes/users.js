const express = require("express");
const router = express.Router();
const register = require("./users/register");
const login = require("./users/login");
const find = require("./users/find");
const auth = require("../middleware/auth");

router.use("/register", register);

router.use("/login", login);

router.use("/find", auth, find);

module.exports = router;
