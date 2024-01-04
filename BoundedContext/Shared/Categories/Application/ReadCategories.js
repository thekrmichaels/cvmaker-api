const { Category, CategoryRepository } = require('../Domain')

function readCategories (repository = CategoryRepository, userId = Category.user_id, category = Category.category) {
  return repository.read(userId, category)
}

module.exports = readCategories
