const Background = require('./Background')

const BackgroundRepository = {
  create: (background = Background) => Promise.resolve(),
  read: (userId = Background.user_id, category = Background.category) => Promise.resolve([]),
  update: (id = Background.id, background = Background) => Promise.resolve(),
  delete: (id = Background.id) => Promise.resolve()
}

module.exports = BackgroundRepository
