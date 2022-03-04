const express = require("express");
const router = express.Router();
const userValid = require("../../validation/users");
const bcrypt = require("../../config/bcrypt");
const userModel = require("../../model/users");

router.post("/", async (req, res) => {
  try {
    const value = await userValid.schemaSignup.validateAsync(req.body);
    value.password = await bcrypt.createHash(value.password);
    const emailArr = await userModel.searchMail(value.email);
    if (emailArr.length != 0) {
      throw "email already exists";
    } else {
      const newUserAdd = await userModel.insertUser(
        value.name,
        value.email,
        value.password,
        value.biz
      );
      res.json({ status: "status 200", user: newUserAdd });
    }
  } catch (err) {
    res.json({ status: "status 400", err: err });
  }
});

module.exports = router;
