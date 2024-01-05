const { Background, BackgroundRepository } = require('../Domain')

function readBackgrounds (repository = BackgroundRepository, userId = Background.user_id, category = Background.category) {
  return repository.read(userId, category)
}

module.exports = readBackgrounds
