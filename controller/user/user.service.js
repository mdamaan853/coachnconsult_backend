const mysql = require('../../modal')
module.exports = ({
      signupUser: (req, res) => {
        mysql.query(`INSERT INTO users (fullname,email,password,mobile) VALUES (?,?,?,?);`, [ req.body.fullname,req.body.email,req.body.password,req.body.mobile], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },

    loginUser: (req, res) => {
        mysql.query(`select * from users where email=?;`, [req.body.email], (err, data) => {
            if (err) {
                return res(err);
            }
            return res(null, data[0])
        })
    },
    getAllUser: (res) => {
        mysql.query(`SELECT * FROM users ;`, [], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },

    // get user by id 
    
    getUserByID: (req, res) => {
        mysql.query("select * from `users` where `id`=?", [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },

    updateUser: (req, res) => {
        mysql.query(`update users set ? where id = ?`, [
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
    deleteUser: (req, res) => {
        mysql.query(
            `delete from users where id = ? `, [req.params.id],
            (error, data) => {
                if (error) {
                    return res(error);
                }
                return res(null, data);
            }
        );
    },
})