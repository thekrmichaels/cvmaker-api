const Joi = require('joi')
const categoryId = require('./ValueObjects/CategoryId')
const userId = require('../../Users/Domain/ValueObjects/UserId')

const Category = Joi.object({
  id: categoryId,
  user_id: userId,
  category: categoryId
})

module.exports = Category
