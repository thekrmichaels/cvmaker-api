const Joi = require('joi')
const { Category } = require('../../Shared/Categories/Domain')

const Description = Category.keys({
  content: Joi.string().required().messages({
    'any.required': 'The description is required',
    'string.base': 'The description must be a string'
  })
})

module.exports = Description
