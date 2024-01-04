const express = require('express')
const router = express.Router()
const CategoryController = require('../src/controllers/CategoryController')
const CategoryRequest = require('./middlewares/validators/CategoryRequest')

const resources = ['contacts', 'descriptions', 'titles']

resources.forEach((resource) => {
  router
    .post(`/${resource}`, CategoryRequest[resource], CategoryController.create)
    .get(`/${resource}/:userId`, CategoryController.read)
    .patch(`/${resource}/:id`, CategoryRequest[resource], CategoryController.update)
    .delete(`/${resource}/:id`, CategoryController.destroy)
})

module.exports = router
