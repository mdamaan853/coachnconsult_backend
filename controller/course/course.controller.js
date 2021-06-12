const {getAllCourse,createCourse,getCourseByID,updateCourse,deleteCourse} = require('./course.service')
const jwt = require('jsonwebtoken')
module.exports = ({
        createCourses: (req, res) => {
            if(req.file){
                console.log(req.file.path)
                req.body.courseFile=req.file.path
            }
            createCourse(req,(err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg: "error while inserting " + err
                    })
                } else {
                    res.json({
                        success: 1,
                        msg: "Course added",
                        data:data
                    })
                }
    })
},
    getAllCourses: (req, res) => {
        getAllCourse((err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: 'error while fetching'
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no Course found"
                })
            } else {
                return res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    // get user by id 

    getCoursesByID: (req, res) => {
        getCourseByID(req, (err, data) => {
            if (err) {
                console.log(err)
                return res.json({
                    success: 0,
                    msg: 'error while fetching course by id',
                    err: err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: 'no records found'
                })
            } else {
                res.json({
                    success: 1,
                    results: data
                })
            }
        })
    },
    updateCourses: (req, res) => {
        if(req.file){
            console.log(req.file.path)
            req.body.courseFile=req.file.path
        }
        updateCourse(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "err while update " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no result found"
                })
            } else {
                res.json({
                    success: 1,
                    message: "updated successfully",
                    result: data
                });
            }
        })
    },
    deleteCourses: (req, res) => {
        deleteCourse(req, (err, data) => {
            if (err) {
                console.log(err);
            }
            if (!data) {
                res.json({
                    success: 0,
                    message: "Course Not Found"
                });
            } else {
                return res.json({
                    success: 1,
                    message: "Course deleted successfully"
                });
            }
        });
    }
})