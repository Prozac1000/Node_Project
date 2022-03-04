const express = require("express");
const router = express.Router();
const bizValid = require("../../validation/biz");
const cardModel = require("../../model/biz");

router.post("/", async (req, res) => {
  try {
    const value = await bizValid.bizSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    console.log(req.jwtdata);
    const newCard = await cardModel.insertCard({
      bizName: value.bizName,
      bizDesc: value.bizDesc,
      bizAdress: value.bizAdress,
      bizPhone: value.bizPhone,
      bizPhoto: value.bizPhoto,
      createdBy: req.jwtdata.id,
    });
    res.json({ status: 200, message: "new biz opened", nc: newCard });
  } catch (err) {
    res.json({ status: 400, err: err });
  }
});

module.exports = router;
