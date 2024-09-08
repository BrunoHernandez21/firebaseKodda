const Joi = require('joi');

const customerSchemaCreate = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(3).max(100).required(),
  type: Joi.string().valid('user', 'company').required(),
  objective: Joi.string().valid('improveMentalHealth', 'loseWeight', 'gainMuscleMass').required()
});
const customerSchemaUpdate = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  type: Joi.string().valid('user', 'company').required(),
  objective: Joi.string().valid('improveMentalHealth', 'loseWeight', 'gainMuscleMass').required()
});

exports.customerSchemaCreate = customerSchemaCreate; 
exports.customerSchemaUpdate = customerSchemaUpdate; 