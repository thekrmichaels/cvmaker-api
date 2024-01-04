const mongoose = require('mongoose')
require('dotenv').config()
const Category = require('./models/category')

const documentsToInsert = [
  { _id: '5ed62728363dde394e56354a', name: 'Contacts' },
  { _id: '5e8c82c020b7cf79d28e846a', name: 'Descriptions' },
  { _id: '5f4a0d8e94d1ca3a1257b279', name: 'Educations' },
  { _id: '60b2c0896546a8102401b23f', name: 'Experiences' },
  { _id: '65522d1678ac8070930f2c27', name: 'Titles' }
]

main().catch(err => console.log(err))

async function main () {
  await mongoose.connect(process.env.MONGODB_URI)

  const existingCategories = await Category.find({ _id: { $in: documentsToInsert.map(doc => doc._id) } })

  if (existingCategories.length === 0) {
    await Category.insertMany(documentsToInsert)

    console.log('Category/ies inserted successfully')
  } else {
    const existingIds = existingCategories.map(category => category._id)
    const notInsertedDocuments = documentsToInsert.filter(doc => !existingIds.includes(doc._id))

    console.log('Some document(s) already exist in the database. Change the _id(s) and try again')
    console.log(notInsertedDocuments)
  }
}

module.exports = main
