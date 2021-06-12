const express = require('express')
const router = express.Router()
const multer = require('multer')

const auth = require('../../middleware/auth')
const { createUsers,signupUsers,loginUsers, getAllUsers, getUsersByID, updateUsers, deleteUsers } = require('./users.controller')
const { checkEmail,checkMobile } = require('../../middleware/users/unique')

const upload = multer().none()

router.post('/login', upload ,loginUsers)

router.post('/signup', upload,checkMobile,checkEmail,signupUsers)

router.get('/', getAllUsers)

router.get('/:id',getUsersByID)

router.patch('/:id',upload, updateUsers)

router.delete('/:id',deleteUsers)

module.exports = router