const express = require("express");
const router = express.Router();
const bizModel = require("../../model/biz");

router.get("/", async (req,res) => {
    try {
        const showAllCards = await bizModel.Biz.find({createdBy: req.jwtdata.id});
        if(showAllCards.length == 0) throw "your user have no Biz cards, please add any"
        res.json({status: 200, showAllCards: showAllCards})
    } catch (err) {
        res.json({status: 400, err: err})
    }

    
})

module.exports = router;
