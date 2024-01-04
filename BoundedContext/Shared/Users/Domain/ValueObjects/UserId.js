const Joi = require('joi')

const userId = Joi.string().required().messages({
  'any.required': 'The user ID is required',
  'string.base': 'The user ID must be a string'
})

module.exports = userId
