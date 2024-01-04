const Category = require('./Category')

const CategoryRepository = {
  create: (category = Category) => Promise.resolve(),
  read: (userId = Category.user_id, category = Category.category) => Promise.resolve([]),
  update: (id = Category.id, category = Category) => Promise.resolve(),
  delete: (id = Category.id) => Promise.resolve()
}

module.exports = CategoryRepository
