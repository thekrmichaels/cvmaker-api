const Joi = require('joi')
const backgroundId = require('./ValueObjects/BackgroundId')
const categoryId = require('../../../Shared/Categories/Domain/ValueObjects/CategoryId')
const userId = require('../../../Shared/Users/Domain/ValueObjects/UserId')

const Background = Joi.object({
  id: backgroundId,
  user_id: userId,
  category: categoryId,
  name: categoryId,
  place: {
    name: Joi.string().required().messages({
      'any.required': 'The place is required',
      'string.base': 'The place must be a string'
    }),
    location: Joi.string().required().messages({
      'any.required': 'The location is required',
      'string.base': 'The location must be a string'
    })
  },
  startDate: Joi.date().less('now').required().messages({
    'any.required': 'The start date is required',
    'date.less': 'The start date must be less than now'
  }),
  endDate: Joi.date().greater(Joi.ref('startDate')).messages({
    'date.greater': 'The end date must be later than start date'
  })
})

module.exports = Background
