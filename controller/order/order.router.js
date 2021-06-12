const express = require('express')
const router = express.Router()
const multer = require('multer')

const auth = require('../../middleware/auth')
const {createOrders,getAllOrders,getOrdersByID,updateOrders,deleteOrders} = require('./order.controller')

const upload = multer().none()

router.post('/', upload ,createOrders)

router.get('/', getAllOrders)

router.get('/:id',getOrdersByID)

router.patch('/:id',upload, updateOrders)

router.delete('/:id',deleteOrders)

module.exports = router