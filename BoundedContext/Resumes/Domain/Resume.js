const Joi = require('joi')
const backgroundId = require('../../../BoundedContext/Shared/Backgrounds/Domain/ValueObjects/BackgroundId')
const categoryId = require('../../Shared/Categories/Domain/ValueObjects/CategoryId')
const userId = require('../../Shared/Users/Domain/ValueObjects/UserId')

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
