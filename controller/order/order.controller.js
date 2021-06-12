const {getAllOrder,createOrder,getOrderByID,updateOrder,deleteOrder} = require('./Order.service')
const jwt = require('jsonwebtoken')
module.exports = ({
        createOrders: (req, res) => {
            createOrder(req,(err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg: "error while inserting " + err
                    })
                } else {
                    res.json({
                        success: 1,
                        msg: "Order added",
                        data:data
                    })
                }
    })
},
    getAllOrders: (req, res) => {
        getAllOrder((err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: 'error while fetching'
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no Order found"
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

    getOrdersByID: (req, res) => {
        getOrderByID(req, (err, data) => {
            if (err) {
                console.log(err)
                return res.json({
                    success: 0,
                    msg: 'error while fetching Order by id',
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
    updateOrders: (req, res) => {
        req.body.profilePicUrl = req.file.path
        updateOrder(req, (err, data) => {
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
    deleteOrders: (req, res) => {
        deleteOrder(req, (err, data) => {
            if (err) {
                console.log(err);
            }
            if (!data) {
                res.json({
                    success: 0,
                    message: "Order Not Found"
                });
            } else {
                return res.json({
                    success: 1,
                    message: "Order deleted successfully"
                });
            }
        });
    }
})