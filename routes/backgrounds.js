const express = require('express')
const router = express.Router()
const BackgroundController = require('../src/controllers/BackgroundController')
const BackgroundRequest = require('./middlewares/validators/BackgroundRequest')

const resources = ['educations', 'experiences']

/**
 * Routes for resource management (educations, experiences).
 *
 * @module BackgroundRoutes
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
   * @memberof module:BackgroundRoutes
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
   * @memberof module:BackgroundRoutes
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
   * @memberof module:BackgroundRoutes
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
   * @memberof module:BackgroundRoutes
   * @param {Request} req - HTTP request
   * @param {string} req.params.id - Resource ID
   * @returns {object} - Status code 200 with JSON response.
   * @throws {object} - Status code 500 with JSON response.
   */
  router
    .post(`/${resource}`, BackgroundRequest[resource], BackgroundController.create)
    .get(`/${resource}/:userId`, BackgroundController.read)
    .patch(`/${resource}/:id`, BackgroundRequest[resource], BackgroundController.update)
    .delete(`/${resource}/:id`, BackgroundController.destroy)
})

module.exports = router
