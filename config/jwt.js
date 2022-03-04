const jwt = require("jsonwebtoken");
const config = require("config");

const generateToken = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      data,
      config.get("jwtSecretKey"),
      { expiresIn: "14d" },
      (err, token) => {
        if (err) reject(err);
        else resolve(token);
      }
    );
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.get("jwtSecretKey"), (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
