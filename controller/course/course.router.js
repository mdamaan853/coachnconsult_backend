const express = require('express')
const router = express.Router()
const multer = require('multer')

const auth = require('../../middleware/auth')
const {createCourses,getAllCourses,getCoursesByID,updateCourses,deleteCourses} = require('./course.controller')

const storage = multer.diskStorage({
    destination: './upload/course_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage
}).single('courseFile')

router.post('/', upload ,createCourses)

router.get('/', getAllCourses)

router.get('/:id',getCoursesByID)

router.patch('/:id',upload, updateCourses)

router.delete('/:id',deleteCourses)

module.exports = router