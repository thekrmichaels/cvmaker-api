const { Background, BackgroundRepository } = require('../Domain')
const BackgroundModel = require('../../../../src/database/mongodb/models/background')

const MongooseBackgroundRepository = Object.create(BackgroundRepository)

MongooseBackgroundRepository.create = async (background = Background) => {
  const resource = new BackgroundModel(background)
  const existingResourceId = await BackgroundModel.findOne({ _id: resource.id })

  if (!existingResourceId) {
    await resource.save()
  } else {
    throw new Error('Background ID already exist in the database. Change the id and try again')
  }
}

MongooseBackgroundRepository.read = async (userId = Background.user_id, category = Background.category) => {
  const info = await BackgroundModel.find({ user_id: userId, category })
    .select('-createdAt -updatedAt -__v')
    .populate({ path: 'name', select: 'name _id' })
  return info
}

MongooseBackgroundRepository.update = async (id = Background.id, background = Background) => {
  await BackgroundModel.findByIdAndUpdate(id, background)
}

MongooseBackgroundRepository.delete = async (id = Background.id) => {
  await BackgroundModel.deleteOne({ _id: id })
}

module.exports = MongooseBackgroundRepository
