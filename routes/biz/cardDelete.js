const express = require("express");
const router = express.Router();
const bizModel = require("../../model/biz");

router.delete ("/:id",  async (req,res) => {
    try {
        await bizModel.Biz.findByIdAndDelete(req.params.id)
        res.json({status: 200, message: "your card has been deleted succesfully"})
    } catch (err) {
        res.json({status: 400 , err: err});
    }
})

module.exports = router;

