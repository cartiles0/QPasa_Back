const router = require('express').Router()

const {
  getOwnProfile,
  getUserProfile,
  editOwnProfile,
  editOwnPhoto,
  deleteUserAccount
} = require('../controllers/users.controller')

router
  .get('/me', getOwnProfile)
  .get('/:id', getUserProfile)
  .put('/me', editOwnProfile)
  .put('/me/photo', editOwnPhoto)
  .delete('/me', deleteUserAccount)

module.exports = router
