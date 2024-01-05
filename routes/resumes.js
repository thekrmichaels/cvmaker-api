const express = require('express')
const router = express.Router()
const ResumeController = require('../src/controllers/ResumeController')

router
  .post('/resumes', ResumeController.create)
  .get('/resumes/:userId', ResumeController.read)
  .patch('/resumes/:id', ResumeController.update)
  .delete('/resumes/:id', ResumeController.destroy)

module.exports = router
