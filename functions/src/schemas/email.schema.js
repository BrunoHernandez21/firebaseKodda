const Joi = require("joi");

const emailSchema = Joi.object({
  userId: Joi.string(),
  status: Joi.string().valid("pending", "cancel", "sent", "failed"),
  type: Joi.string().valid("welcome", "verification"),
  errorDescription: Joi.string(),
});

exports.emailSchema = emailSchema;
