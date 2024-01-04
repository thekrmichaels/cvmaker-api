const ensureDataIsValid = require('../../../BoundedContext/Shared/Application/ensureDataIsValid')

function validateRequest (schema) {
  return async (req, res, next) => {
    const errors = await ensureDataIsValid(req.body, schema)

    if (errors) {
      return res.status(400).json({
        success: false,
        errors
      })
    }

    next()
  }
}

module.exports = validateRequest
