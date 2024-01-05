const { Resume, ResumeRepository } = require('../Domain')

function createResume (repository = ResumeRepository, resume = Resume) {
  repository.create(resume)
}

module.exports = createResume
