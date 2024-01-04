const express = require('express')
const router = express.Router()
const BackgroundController = require('../src/controllers/BackgroundController')
const BackgroundRequest = require('./middlewares/validators/BackgroundRequest')

const resources = ['educations', 'experiences']

resources.forEach((resource) => {
  router
    .post(`/${resource}`, BackgroundRequest[resource], BackgroundController.create)
    .get(`/${resource}/:userId`, BackgroundController.read)
    .patch(`/${resource}/:id`, BackgroundRequest[resource], BackgroundController.update)
    .delete(`/${resource}/:id`, BackgroundController.destroy)
})

module.exports = router
