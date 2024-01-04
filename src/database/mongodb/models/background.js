const mongoose = require('mongoose')
const { Schema } = mongoose

const backgroundSchema = new Schema(
  {
    _id: String,
    user_id: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    name: String,
    place: {
      name: String,
      location: String
    },
    startDate: Date,
    endDate: Date,
    description: String
  },
  { timestamps: true }
)

const Background = mongoose.model('Background', backgroundSchema)

module.exports = Background
