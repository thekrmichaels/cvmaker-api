const { Category, CategoryRepository } = require('../Domain')

function updateCategory (repository = CategoryRepository, id = Category.id, category = Category) {
  repository.update(id, category)
}

module.exports = updateCategory
