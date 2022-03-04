const express = require("express");
const router = express.Router();
const bizModel = require("../../model/biz");

router.get("/:id", async (req,res) => {
    try {
        const cardResolve = await bizModel.findCardById(req.params.id);
        res.json({status: 200, result: cardResolve})
    } catch (err) {
        res.json({status: 400 , err: err});
    }
})

module.exports = router;
