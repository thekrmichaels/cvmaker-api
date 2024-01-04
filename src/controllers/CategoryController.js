const { createCategory, deleteCategory, readCategories, updateCategory } = require('../../BoundedContext/Shared/Categories/Application')
const MongooseCategoryRepository = require('../../BoundedContext/Shared/Categories/Infrastructure/MongooseCategoryRepository')
const GetCategoryIdFromRoute = require('../helpers/GetCategoryIdFromRoute')

const CategoryController = {
  create: async (req, res) => {
    try {
      req.body.category = GetCategoryIdFromRoute(req.path)
      const resourceData = req.body

      await createCategory(MongooseCategoryRepository, resourceData)

      res.status(201).json({ message: 'Resource created successfully' })
    } catch (err) {
      err.message === 'Resource ID already exist in the database. Change the _id and try again'
        ? res.status(409).json({ message: err.message })
        : res.status(500).json({ message: 'Error creating the resource' })
    }
  },

  read: async (req, res) => {
    try {
      const { userId } = req.params
      const categoryId = GetCategoryIdFromRoute(req.path)

      const info = await readCategories(MongooseCategoryRepository, userId, categoryId)

      res.json(info)
    } catch (err) {
      res.status(500).json({ message: 'Error getting the resource(s)' })
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params
      const updatedData = req.body

      await updateCategory(MongooseCategoryRepository, id, updatedData)

      res.json({ message: 'Resource updated successfully' })
    } catch (err) {
      res.status(500).json({ message: 'Error updating the resource' })
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params

      await deleteCategory(MongooseCategoryRepository, id)

      res.json({ message: 'Resource deleted successfully' })
    } catch (err) {
      res.status(500).json({ message: 'Error deleting the resource' })
    }
  }
}

module.exports = CategoryController
