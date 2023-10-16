const express = require('express')
const postMessages = require('../controllers/messageController')

const router = express.Router()


router.post('/', postMessages)

module.exports = router
