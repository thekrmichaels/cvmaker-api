const { Background, BackgroundRepository } = require('../Domain')

function createBackground (repository = BackgroundRepository, background = Background) {
  repository.create(background)
}

module.exports = createBackground
