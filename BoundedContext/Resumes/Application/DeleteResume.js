const { Resume, ResumeRepository } = require('../Domain')

function deleteResume (repository = ResumeRepository, id = Resume.id) {
  repository.delete(id)
}

module.exports = deleteResume
