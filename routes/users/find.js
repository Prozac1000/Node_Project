const express = require("express");
const router = express.Router();
const userModel = require("../../model/users");
const middleware = require("../../middleware/auth");

router.get("/", middleware, async (req, res) => {
  try {
    const userDetails = await userModel.findUserId(req.jwtdata.id);
    console.log(userDetails);
    res.json({
      status: 200,
      user: {
        name: userDetails.name,
        email: userDetails.email,
        biz: userDetails.biz,
      },
    });
  } catch (err) {
    res.json({
      status: "error 401",
      message: err,
    });
  }
});

module.exports = router;
