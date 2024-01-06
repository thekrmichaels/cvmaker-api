const express = require('express')
const router = express.Router()
const CategoryController = require('../src/controllers/CategoryController')
const CategoryRequest = require('./middlewares/validators/CategoryRequest')

const resources = ['contacts', 'descriptions', 'titles']

/**
 * Routes for resource management (contacts, descriptions, titles).
 *
 * @module CategoryRoutes
 */

/**
 * @typedef {Object} Request
 * @property {object} params - Request params
 * @property {object} body - Request body
 */
resources.forEach((resource) => {
  /**
   * Create a new resource.
   *
   * @name POST /resources/{resource}
   * @function
   * @memberof module:CategoryRoutes
   * @param {Request} req - HTTP request
   * @param {object} req.body - Request body
   * @returns {number} - Status code 201 with JSON response.
   * @throws {number} - Status code 500 with JSON response.
  */

  /**
   * Get resources for a specific user.
   *
   * @name GET /resources/{resource}/{userId}
   * @function
   * @memberof module:CategoryRoutes
   * @param {Request} req - HTTP request
   * @param {string} req.params.userId - User ID
   * @returns {object} - Status code 200 with JSON response.
   * @throws {number} - Status code 500 with JSON response.
  */

  /**
   * Update an existing resource.
   *
   * @name PATCH /resources/{resource}/{id}
   * @function
   * @memberof module:CategoryRoutes
   * @param {Request} req - HTTP request
   * @param {string} req.params.id - Resource ID
   * @param {object} req.body - Request body
   * @returns {object} - Status code 200 with JSON response.
   * @throws {number} - Status code 500 with JSON response.
  */

  /**
   * Delete an existing resource.
   *
   * @name DELETE /resources/{resource}/{id}
   * @function
   * @memberof module:CategoryRoutes
   * @param {Request} req - HTTP request
   * @param {string} req.params.id - Resource ID
   * @returns {object} - Status code 200 with JSON response.
   * @throws {object} - Status code 500 with JSON response.
   */
  router
    .post(`/${resource}`, CategoryRequest[resource], CategoryController.create)
    .get(`/${resource}/:userId`, CategoryController.read)
    .patch(`/${resource}/:id`, CategoryRequest[resource], CategoryController.update)
    .delete(`/${resource}/:id`, CategoryController.destroy)
})

module.exports = router
