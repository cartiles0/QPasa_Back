const router = require('express').Router()

const {
  getOwnProfile,
  getUserProfile,
  createProfile,
  editOwnProfile,
  editOwnPhoto,
  deleteUserAccount
} = require('../controllers/users.controller')

router
  .get('/me', getOwnProfile)
  .get('/:id', getUserProfile)
  .post('/me', createProfile)
  .put('/:id', editOwnProfile)
  .put('/me/photo', editOwnPhoto)
  .delete('/:id', deleteUserAccount)

module.exports = router
