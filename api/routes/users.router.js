const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getOwnProfile,
  getUserProfile,
  editOwnProfile,
  editOwnPhoto,
  deleteUserAccount
} = require('../controllers/users.controller')

router
  .get('/me', authUser, getOwnProfile)
  .get('/:id', getUserProfile)
  .put('/me', authUser, editOwnProfile)
  .put('/me/photo', authUser, editOwnPhoto)
  .delete('/me', authUser, deleteUserAccount)

module.exports = router
