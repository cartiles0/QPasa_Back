const router = require('express').Router()

const {
  getAllTags
} = require('../controllers/tags.controller')

router
  .get('/', getAllTags)

module.exports = router
