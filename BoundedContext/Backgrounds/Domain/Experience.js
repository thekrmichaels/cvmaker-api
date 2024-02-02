const Joi = require('joi')
const { Background } = require('../../Shared/Backgrounds/Domain')

/**
 * Professional experience.
 *
 * @class Experience
 *
 * @param {string} user_id - The user ID must be a string (Foreign Key) and required
 * @param {string} name - The professional role must be a string and required
 * @param {string} description - The description must be a string
 * @param {string} place.name - The place name must be a string and required
 * @param {string} place.location - The place location must be a string and required
 * @param {Date} startDate - The start date must be less than now and required
 * @param {Date} endDate - The start date must be later than start date
 *
 * @throws {errors[]} An array of validation errors.
 */
const Experience = Background.keys({
  name: Joi.string().required().messages({
    'any.required': 'The role is required',
    'string.base': 'The role must be a string'
  }),
  description: Joi.string().allow('')
})

module.exports = Experience
