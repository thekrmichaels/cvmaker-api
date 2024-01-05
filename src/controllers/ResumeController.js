const { createResume, deleteResume, readResumes, updateResume } = require('../../BoundedContext/Resumes/Application')
const MongooseResumeRepository = require('../../BoundedContext/Resumes/Infrastructure/MongooseResumeRepository')

const ResumeController = {
  create: (req, res) => {
    try {
      const resumeData = req.body

      createResume(MongooseResumeRepository, resumeData)

      res.status(201).json({ message: 'Resume created successfully' })
    } catch (err) {
      res.status(500).json({ message: 'Error creating the resume' })
    }
  },

  read: (req, res) => {
    try {
      const { userId } = req.params

      const info = readResumes(MongooseResumeRepository, userId)

      res.json(info)
    } catch (err) {
      res.status(500).json({ message: 'Error getting the resume(s)' })
    }
  },

  update: (req, res) => {
    try {
      const { id } = req.params
      const updatedData = req.body

      updateResume(MongooseResumeRepository, id, updatedData)

      res.json({ message: 'Resume updated successfully' })
    } catch (err) {
      res.status(500).json({ message: 'Error updating the resume' })
    }
  },

  destroy: (req, res) => {
    try {
      const { id } = req.params

      deleteResume(MongooseResumeRepository, id)

      res.json({ message: 'Resume deleted successfully' })
    } catch (err) {
      res.status(500).json({ message: 'Error deleting the resume' })
    }
  }
}

module.exports = ResumeController
