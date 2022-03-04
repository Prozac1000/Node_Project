const express = require("express");
const router = express.Router();
const bizValidation = require("../../validation/biz");
const bizModel = require("../../model/biz");

router.put ("/:id",  async (req,res) => {
    try {
        const value = await bizValidation.bizUpdate.validateAsync(req.body, {abortEarly: false});
        const cardEdit = await bizModel.Biz.findByIdAndUpdate(req.params.id, { 
            bizName: value.bizName,
            bizDesc: value.bizDesc,
            bizAdress: value.bizAdress,
            bizPhone: value.bizPhone,
            bizPhoto: value.bizPhone,
        })
        res.json({status: 200, newCardDetails: cardEdit})
    } catch (err) {
        res.json({status: 400 , err: err});
    }
})

module.exports = router;
