const Joi = require('joi')
const { Background } = require('../../Shared/Backgrounds/Domain')

/**
 * Education.
 *
 * @class Education
 *
 * @param {string} user_id - The user ID must be a string (Foreign Key) and required
 * @param {string} name - The career must be a string and required
 * @param {string} place.name - The place name must be a string and required
 * @param {string} place.location - The place location must be a string and required
 * @param {Date} startDate - The start date must be less than now and required
 * @param {Date} endDate - The start date must be later than start date
 *
 * @throws {errors[]} An array of validation errors.
 */
const Education = Background.keys({
  name: Joi.string().required().messages({
    'any.required': 'The career is required',
    'string.base': 'The career must be a string'
  })
})

module.exports = Education
