const mysql = require('../../modal')
module.exports = ({
      createCourse: (req, res) => {
        mysql.query(`INSERT INTO course (name,description,courseFile,type) VALUES (?,?,?,?);`, [req.body.name, req.body.description,req.body.courseFile,req.body.type], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    
    getAllCourse: (res) => {
        mysql.query(`SELECT * FROM course ;`, [], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },

    // get user by id 
    
    getCourseByID: (req, res) => {
        mysql.query("select * from `course` where `id`=?", [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },

    updateCourse: (req, res) => {
        mysql.query(`update course set ? where id = ?`, [
                req.body, req.params.id
            ],
            (error, data) => {
                if (error) {
                    return res(error);
                } else {
                    return res(null, data);
                }
            }
        );
    },
    deleteCourse: (req, res) => {
        mysql.query(
            `delete from course where id = ? `, [req.params.id],
            (error, data) => {
                if (error) {
                    return res(error);
                }
                return res(null, data);
            }
        );
    },
})