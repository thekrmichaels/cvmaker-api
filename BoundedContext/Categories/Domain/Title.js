const Joi = require('joi')
const { Category } = require('../../Shared/Categories/Domain')

const Title = Category.keys({
  name: Joi.string().required().messages({
    'any.required': 'The title is required',
    'string.base': 'The title must be a string'
  })
})

module.exports = Title
