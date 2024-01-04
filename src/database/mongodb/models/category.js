const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = new Schema(
  {
    _id: String,
    user_id: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    name: String,
    content: String
  },
  { timestamps: true }
)

categorySchema.alias('_id', 'id')

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
