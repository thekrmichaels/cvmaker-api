const { Category, CategoryRepository } = require('../Domain')
const CategoryModel = require('../../../../src/database/mongodb/models/category')

const MongooseCategoryRepository = Object.create(CategoryRepository)

MongooseCategoryRepository.create = async (category = Category) => {
  const resource = new CategoryModel(category)
  const existingResourceId = await CategoryModel.findOne({ _id: resource.id })

  if (!existingResourceId) {
    await resource.save()
  } else {
    throw new Error('Resource ID already exist in the database. Change the id and try again')
  }
}

MongooseCategoryRepository.read = async (userId = Category.user_id, category = Category.category) => {
  const info = await CategoryModel.find({ user_id: userId, category }).select('-createdAt -updatedAt -__v')
  return info
}

MongooseCategoryRepository.update = async (id = Category.id, category = Category) => {
  await CategoryModel.findByIdAndUpdate(id, category)
}

MongooseCategoryRepository.delete = async (id = Category.id) => {
  await CategoryModel.deleteOne({ _id: id })
}

module.exports = MongooseCategoryRepository
