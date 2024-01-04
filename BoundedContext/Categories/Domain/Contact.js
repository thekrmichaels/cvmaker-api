const Joi = require('joi')
const { Category } = require('../../Shared/Categories/Domain')

const Contact = Category.keys({
  name: Joi.string().required().messages({
    'any.required': 'The contact type is required',
    'string.base': 'The contact type must be a string'
  }),
  content: Joi.string().required().messages({
    'any.required': 'The contact is required',
    'string.base': 'The contact must be a string'
  })
})

module.exports = Contact
