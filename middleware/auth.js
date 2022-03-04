const jwt = require("../config/jwt");

module.exports = async (req, res, next) => {
  try {
    req.jwtdata = await jwt.verifyToken(req.headers.token);
    next();
  } catch (err) {
    res.json({ message: "invalid token" });
  }
};
