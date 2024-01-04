const { Category, CategoryRepository } = require('../Domain')

function deleteCategory (repository = CategoryRepository, id = Category.id) {
  repository.delete(id)
}

module.exports = deleteCategory
