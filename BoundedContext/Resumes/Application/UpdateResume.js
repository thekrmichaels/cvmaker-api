const { Resume, ResumeRepository } = require('../Domain')

function updateResume (repository = ResumeRepository, id = Resume.id, resume = Resume) {
  repository.update(id, resume)
}

module.exports = updateResume
