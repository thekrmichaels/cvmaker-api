const Joi = require('joi')
const { Background } = require('../../Shared/Backgrounds/Domain')

const Education = Background.keys({
  name: Joi.string().required().messages({
    'any.required': 'The career is required',
    'string.base': 'The career must be a string'
  })
})

module.exports = Education
