const express = require('express')
const router = express.Router()
const audit = require('../controllers/auditController')
const auditList = require('../controllers/auditController')

router.get('/', auditList)


module.exports = router