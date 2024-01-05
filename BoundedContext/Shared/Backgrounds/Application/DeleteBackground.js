const { Background, BackgroundRepository } = require('../Domain')

function deleteBackground (repository = BackgroundRepository, id = Background.id) {
  repository.delete(id)
}

module.exports = deleteBackground
