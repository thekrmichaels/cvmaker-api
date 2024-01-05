const Joi = require('joi')
const { Background } = require('../../Shared/Backgrounds/Domain')

const Experience = Background.keys({
  name: Joi.string().required().messages({
    'any.required': 'The role is required',
    'string.base': 'The role must be a string'
  }),
  description: Joi.string().allow('')
})

module.exports = Experience
