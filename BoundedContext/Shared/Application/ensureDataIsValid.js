async function ensureDataIsValid (data, schema) {
  try {
    await schema.validateAsync(data, { abortEarly: false })
  } catch (err) {
    const errors = err.details.map((detail) => detail.message)
    return errors
  }
}

module.exports = ensureDataIsValid
