const express = require('express')
const router = express.Router()
const {send_mail_queue_controller}  = require('../controller/send_mail_queue_controller')




router.post('/', send_mail_queue_controller)



module.exports = {router}