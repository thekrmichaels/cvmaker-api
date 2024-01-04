const Joi = require('joi')

const categoryId = Joi.string().allow('')

module.exports = categoryId
