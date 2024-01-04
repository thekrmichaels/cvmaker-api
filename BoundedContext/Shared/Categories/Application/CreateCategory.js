const { Category, CategoryRepository } = require('../Domain')

function createCategory (repository = CategoryRepository, category = Category) {
  repository.create(category)
}

module.exports = createCategory
