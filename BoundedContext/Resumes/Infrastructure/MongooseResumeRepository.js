const { Resume, ResumeRepository } = require('../Domain')
const ResumeModel = require('../../../src/database/mongodb/models/resume')

const MongooseResumeRepository = Object.create(ResumeRepository)

MongooseResumeRepository.create = async (resume = Resume) => {
  const resource = new ResumeModel(resume)
  await resource.save()
}

MongooseResumeRepository.read = async (userId = Resume.user_id) => {
  const info = await ResumeModel.find({ user_id: userId }).select('-createdAt -updatedAt -__v')
    .populate([{ path: 'titleName', select: 'name _id' },
      { path: 'contacts', select: 'content name _id' },
      { path: 'descriptionContent', select: 'content _id' }])
    .populate({
      path: 'education',
      select: 'place title startDate endDate _id',
      populate: { path: 'title', select: 'name _id' }
    })
    .populate({
      path: 'experience',
      select: 'description place title startDate endDate _id',
      populate: { path: 'title', select: 'name _id' }
    })
  return info
}

MongooseResumeRepository.update = async (id = Resume.id, resume = Resume) => {
  await ResumeModel.findByIdAndUpdate(id, resume)
}

MongooseResumeRepository.delete = async (id = Resume.id) => {
  await ResumeModel.deleteOne({ _id: id })
}

module.exports = MongooseResumeRepository
