const { signupUser, loginUser, getAllUser, getUserByID, updateUser, deleteUser } = require('./user.service')
const { hashSync, compareSync } = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = ({
        signupUsers: (req, res) => {
        console.log(req.body)
        if (req.body.password == req.body.cpassword) {
            req.body.password = hashSync(req.body.password, 10)
            signupUser(req,(err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg: "error while inserting " + err
                    })
                } else {
                  var token = jwt.sign({
                        email: data.email,
                        mobile: data.mobile
                    }, 'mySecretKey', {
                        expiresIn: '24h'
                    })
                    res.json({
                        success: 1,
                        msg: "you are regestred",
                        token: token,
                        data:data
                    })
                }
            })
        } else {
            res.json({
                success: 0,
                msg: "password did't match"
            })
        }
    },
    loginUsers: (req, res) => {
        loginUser(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while login " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "you have not regestred yet"
                })
            } else {
                var result = compareSync(req.body.password, data.password)
                if (result) {
                    var token = jwt.sign({
                        email: data.email,
                        mobile: data.mobile
                    }, 'mySecretKey', {
                        expiresIn: '24h'
                    })
                    res.json({
                        success: 1,
                        msg: "you are loggedin",
                        token: token,
                        data:data
                    })
                } else {
                    res.json({
                        success: 0,
                        msg: 'invalid credentials'
                    })
                }
            }
        })
    },
    getAllUsers: (req, res) => {
        getAllUser((err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: 'error while fetching'
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no result found"
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

    getUsersByID: (req, res) => {
        getUserByID(req, (err, data) => {
            if (err) {
                console.log(err)
                return res.json({
                    success: 0,
                    msg: 'error while fetching user by id',
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
    updateUsers: (req, res) => {
        req.body.profilePicUrl = req.file.path
        updateUser(req, (err, data) => {
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
    deleteUsers: (req, res) => {
        deleteUser(req, (err, data) => {
            if (err) {
                console.log(err);
            }
            if (!data) {
                res.json({
                    success: 0,
                    message: "Record Not Found"
                });
            } else {
                return res.json({
                    success: 1,
                    message: "user deleted successfully"
                });
            }
        });
    }
})