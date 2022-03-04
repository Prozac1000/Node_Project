const express = require("express");
const router = express.Router();
const newBiz = require("./biz/newBiz");
const infoCheck = require("./biz/infoCheck");
const getAllCards = require("./biz/getAllCards");
const cardUpdate = require("./biz/cardUpdate");
const cardDelete = require("./biz/cardDelete");

router.use("/newBiz", newBiz);
router.use("/infoCheck", infoCheck);
router.use("/getAllCards", getAllCards);
router.use("/cardUpdate", cardUpdate);
router.use("/cardDelete", cardDelete);

module.exports = router;
