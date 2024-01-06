const Joi = require('joi')
const { Category } = require('../../Shared/Categories/Domain')

/**
 * Contact info.
 *
 * @class Contact
 *
 * @param {string} user_id - The user ID must be a string (Foreign Key) and required
 * @param {string} name - The contact type must be a string and required
 * @param {string} content - The contact must be a string and required
 *
 * @throws {errors[]} An array of validation errors.
 */
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
