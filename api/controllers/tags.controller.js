const TagModel = require('../models/tags.model')

function getAllTags (req, res) {
  TagModel
  .find(req.query)
  .then(tags => { res.json(tags) })
  .catch(err => res.json(err))
}

module.exports = {
  getAllTags
}
