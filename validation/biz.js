const Joi = require("joi");

const bizSchema = Joi.object({
  bizName: Joi.string().required(),
  bizDesc: Joi.string().required(),
  bizAdress: Joi.string().required(),
  bizPhone: Joi.number().required(),
  bizPhoto: Joi.string().required(),
});

const bizUpdate = Joi.object({
  bizName: Joi.string(),
  bizDesc: Joi.string(),
  bizAdress: Joi.string(),
  bizPhone: Joi.number(),
  bizPhoto: Joi.string(),
});

module.exports = {
  bizSchema,
  bizUpdate,
};
