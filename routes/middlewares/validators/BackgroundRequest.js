const { Education, Experience } = require('../../../BoundedContext/Backgrounds/Domain')
const validateRequest = require('./validateRequest')

const BackgroundRequest = {
  educations: [
    validateRequest(Education)
  ],
  experiences: [
    validateRequest(Experience)
  ]
}

module.exports = BackgroundRequest
