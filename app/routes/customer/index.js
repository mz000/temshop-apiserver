const express = require('express')
const router = express.Router()
const v1 = require('./v1')
// use auth middlewares here...


router.use('/v1', v1)

module.exports = router