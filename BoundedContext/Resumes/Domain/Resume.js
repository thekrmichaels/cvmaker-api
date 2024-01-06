const Joi = require('joi')
const backgroundId = require('../../../BoundedContext/Shared/Backgrounds/Domain/ValueObjects/BackgroundId')
const categoryId = require('../../Shared/Categories/Domain/ValueObjects/CategoryId')
const userId = require('../../Shared/Users/Domain/ValueObjects/UserId')

/**
 * Resume.
 *
 * @class Resume
 *
 * @param {string} user_id - The user ID must be a string (Foreign Key)
 * @param {string} name - The name must be a string and required
 * @param {string} titleName - The professional title must be a string (Foreign Key)
 * @param {string[]} contacts - Each contact ID must be a string (Foreign Key)
 * @param {string} descriptionContent - The description content must be a string (Foreign Key)
 * @param {string[]} experiences - Each experience ID must be a string (Foreign Key)
 * @param {string[]} educations - Each education ID must be a string (Foreign Key)
 */
const Resume = Joi.object({
  id: Joi.string(),
  user_id: userId,
  name: Joi.string().required().messages({
    'any.required': 'The name is required',
    'string.base': 'The name must be a string'
  }),
  titleName: categoryId,
  contacts: Joi.array().items(categoryId),
  descriptionContent: categoryId,
  experiences: Joi.array().items(backgroundId),
  educations: Joi.array().items(backgroundId)
})

module.exports = Resume
