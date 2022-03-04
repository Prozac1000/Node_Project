const mongoose = require("mongoose");

const bizSchema = new mongoose.Schema({
  bizName: { type: String, required: true },
  bizDesc: { type: String, required: true },
  bizAdress: { type: String, required: true },
  bizPhone: { type: Number, required: true },
  bizPhoto: { type: String, required: true },
  createdBy: mongoose.SchemaTypes.ObjectId,
});

const Biz = mongoose.model("Biz", bizSchema);

const insertCard = (
  bizName,
  bizDesc,
  bizAdress,
  bizPhone,
  bizPhoto,
  createdBy
) => {
  const card = new Biz(
    bizName,
    bizDesc,
    bizAdress,
    bizPhone,
    bizPhoto,
    createdBy
  );
  return card.save();
};

const findCardById = id => {
  return Biz.findById(id)
}

module.exports = {
  Biz,
  insertCard,
  findCardById,
};

