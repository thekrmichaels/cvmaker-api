const { createBackground, deleteBackground, readBackgrounds, updateBackground } = require('../../BoundedContext/Shared/Backgrounds/Application')
const MongooseBackgroundRepository = require('../../BoundedContext/Shared/Backgrounds/Infrastructure/MongooseBackgroundRepository')
const GetCategoryIdFromRoute = require('../helpers/GetCategoryIdFromRoute')

const BackgroundController = {
  create: async (req, res) => {
    try {
      req.body.category = GetCategoryIdFromRoute(req.path)
      const backgroundData = req.body

      await createBackground(MongooseBackgroundRepository, backgroundData)

      res.status(201).json({ message: 'Background created successfully' })
    } catch (err) {
      err.message === 'Background ID already exist in the database. Change the _id and try again'
        ? res.status(409).json({ message: err.message })
        : res.status(500).json({ message: 'Error creating the background' })
    }
  },

  read: async (req, res) => {
    try {
      const { userId } = req.params
      const categoryId = GetCategoryIdFromRoute(req.path)

      const info = await readBackgrounds(MongooseBackgroundRepository, userId, categoryId)

      res.json(info)
    } catch (err) {
      res.status(500).json({ message: 'Error getting the background(s)' })
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params
      const updatedData = req.body

      await updateBackground(MongooseBackgroundRepository, id, updatedData)

      res.json({ message: 'Background updated successfully' })
    } catch (err) {
      res.status(500).json({ message: 'Error updating the background' })
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params

      await deleteBackground(MongooseBackgroundRepository, id)

      res.json({ message: 'Background deleted successfully' })
    } catch (err) {
      res.status(500).json({ message: 'Error deleting the background' })
    }
  }
}

module.exports = BackgroundController
