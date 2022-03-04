const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  biz: { type: Boolean },
});

const Users = mongoose.model("Users", usersSchema);

const findUserId = (id) => {
  return Users.findById(id);
};

const insertUser = (name, email, password, biz) => {
  const user = new Users({
    name,
    email,
    password,
    biz,
  });
  return user.save();
};

const searchMail = (userEmail) => {
  return Users.find({ email: userEmail });
};

const selectAllUsers = () => {
  return Users.find({});
};

module.exports = {
  insertUser,
  searchMail,
  selectAllUsers,
  findUserId,
};
