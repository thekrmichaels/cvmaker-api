const mongoose = require('mongoose')
const { Schema } = mongoose
require('./background')
require('./category')

const resumeSchema = new Schema(
  {
    user_id: String,
    titleName: { type: Schema.Types.ObjectId, ref: 'Category' },
    contacts: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    descriptionContent: { type: Schema.Types.ObjectId, ref: 'Category' },
    experience: [{ type: Schema.Types.ObjectId, ref: 'Background' }],
    education: [{ type: Schema.Types.ObjectId, ref: 'Background' }]
  },
  { timestamps: true }
)

resumeSchema.alias('_id', 'id')

const Resume = mongoose.model('Resume', resumeSchema)

module.exports = Resume
