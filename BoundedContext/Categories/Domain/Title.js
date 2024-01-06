const Joi = require('joi')
const { Category } = require('../../Shared/Categories/Domain')

/**
 * Professional title.
 *
 * @class Title
 *
 * @param {string} user_id - The user ID must be a string (Foreign Key) and required
 * @param {string} name - The title must be a string and required
 *
 * @throws {errors[]} An array of validation errors.
 */
const Title = Category.keys({
  name: Joi.string().required().messages({
    'any.required': 'The title is required',
    'string.base': 'The title must be a string'
  })
})

module.exports = Title
