const Resume = require('./Resume')

const ResumeRepository = {
  create: (resume = Resume) => Promise.resolve(),
  read: (userId = Resume.user_id) => Promise.resolve([]),
  update: (id = Resume.id, resume = Resume) => Promise.resolve(),
  delete: (id = Resume.id) => Promise.resolve()
}

module.exports = ResumeRepository
