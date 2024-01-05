const { Resume, ResumeRepository } = require('../Domain')

function readResumes (repository = ResumeRepository, userId = Resume.user_id) {
  repository.read(userId)
}

module.exports = readResumes
