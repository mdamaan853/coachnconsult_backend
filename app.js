const express = require('express');
const cors =require('cors')
const app = express()
const https = require("https")
const fs = require("fs")

app.use(cors());
app.use(express.json())

const PORT = 4000

const userRouter =require('./controller/user/users.router')
const courseRouter =require('./controller/course/course.router')
const orderRouter =require('./controller/order/order.router')

app.use('/ping',(req,res)=>{
    res.send('server on')
})
app.use('/user',userRouter)
app.use('/course',courseRouter)
app.use('/order',orderRouter)

app.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
});