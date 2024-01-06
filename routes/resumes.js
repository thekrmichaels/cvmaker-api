const express = require('express')
const router = express.Router()
const ResumeController = require('../src/controllers/ResumeController')

/**
 * Routes for resume management.
 *
 * @module ResumeRoutes
 */

/**
 * @typedef {Object} Request
 * @property {object} params - Request params
 * @property {object} body - Request body
 */

/**
   * Create a new resume.
   *
   * @name POST /resumes
   * @function
   * @memberof module:ResumeRoutes
   * @param {Request} req - HTTP request
   * @param {object} req.body - Request body
   * @returns {number} - Status code 201 with JSON response.
   * @throws {number} - Status code 500 with JSON response.
  */

/**
 * Get resumes for a specific user.
 *
 * @name GET /resumes/{userId}
 * @function
 * @memberof module:ResumeRoutes
 * @param {Request} req - HTTP request
 * @param {string} req.params.userId - User ID
 * @returns {object} - Status code 200 with JSON response.
 * @throws {number} - Status code 500 with JSON response.
*/

/**
 * Update an existing resume.
 *
 * @name PATCH /resumes/{id}
 * @function
 * @memberof module:ResumeRoutes
 * @param {Request} req - HTTP request
 * @param {string} req.params.id - resume ID
 * @param {object} req.body - Request body
 * @returns {object} - Status code 200 with JSON response.
 * @throws {number} - Status code 500 with JSON response.
*/

/**
 * Delete an existing resume.
 *
 * @name DELETE /resumes/{id}
 * @function
 * @memberof module:ResumeRoutes
 * @param {Request} req - HTTP request
 * @param {string} req.params.id - resume ID
 * @returns {object} - Status code 200 with JSON response.
 * @throws {object} - Status code 500 with JSON response.
 */
router
  .post('/resumes', ResumeController.create)
  .get('/resumes/:userId', ResumeController.read)
  .patch('/resumes/:id', ResumeController.update)
  .delete('/resumes/:id', ResumeController.destroy)

module.exports = router
