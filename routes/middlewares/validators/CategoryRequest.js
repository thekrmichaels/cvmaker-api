const { Contact, Description, Title } = require('../../../BoundedContext/Categories/Domain')
const validateRequest = require('./validateRequest')

const CategoryRequest = {
  contacts: [
    validateRequest(Contact)
  ],
  descriptions: [
    validateRequest(Description)
  ],
  titles: [
    validateRequest(Title)
  ]
}

module.exports = CategoryRequest
