const express = require("express");
const router = express.Router();
const userValidation = require("../../validation/users");
const bcrypt = require("../../config/bcrypt");
const jwt = require("../../config/jwt");
const userModel = require("../../model/users");

router.post("/", async (req, res) => {
  try {
    const value = await userValidation.schemaLogin.validateAsync(req.body, {
      abortEarly: false,
    });
    const dbData = await userModel.searchMail(value.email);
    if (dbData.length != 0) {
      const isPassOk = await bcrypt.cmpHash(value.password, dbData[0].password);
      if (isPassOk === true) {
        const token = await jwt.generateToken({
          id: dbData[0]._id,
          biz: dbData[0].biz,
        });
        res.json({
          status: 200,
          message: "You are logged in " + dbData[0].name,
          user: {
            name: dbData[0].name,
            biz: dbData[0].biz,
          },
          token: token,
        });
      } else {
        throw "you have entered the wrong password";
      }
    } else {
      throw "incorrect email";
    }
  } catch (err) {
    res.json({ status: 400, message: err });
  }
});

module.exports = router;
