const { Background, BackgroundRepository } = require('../Domain')

function updateBackground (repository = BackgroundRepository, id = Background.id, background = Background) {
  repository.update(id, background)
}

module.exports = updateBackground
