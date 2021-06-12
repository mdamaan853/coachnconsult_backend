const mysql = require('../../modal')
module.exports = ({
      createOrder: (req, res) => {
        mysql.query(`INSERT INTO order (userId,courseId,tranctionNo) VALUES (?,?,?,?);`, [req.body.name, req.body.desc,req.body.filePath,req.body.type], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    
    getAllOrder: (res) => {
        mysql.query(`SELECT * FROM Order ;`, [], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },

    // get user by id 
    
    getOrderByID: (req, res) => {
        mysql.query("select * from `order` where `id`=?", [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },

    updateOrder: (req, res) => {
        mysql.query(`update order set ? where id = ?`, [
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
    deleteOrder: (req, res) => {
        mysql.query(
            `delete from order where id = ? `, [req.params.id],
            (error, data) => {
                if (error) {
                    return res(error);
                }
                return res(null, data);
            }
        );
    },
})