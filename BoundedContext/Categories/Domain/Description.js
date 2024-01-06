const Joi = require('joi')
const { Category } = require('../../Shared/Categories/Domain')

/**
 * Professional summary.
 *
 * @class Description
 *
 * @param {string} user_id - The user ID must be a string (Foreign Key) and required
 * @param {string} content - The description must be a string and required
 *
 * @throws {errors[]} An array of validation errors.
 */
const Description = Category.keys({
  content: Joi.string().required().messages({
    'any.required': 'The description is required',
    'string.base': 'The description must be a string'
  })
})

module.exports = Description
