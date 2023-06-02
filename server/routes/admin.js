const express = require("express")
const router = express.Router()
const admin = require('../controllers/adminController')
const errorHandler = require("../middleware/errorHandler")

router.get('/current', admin.currentAdmin)
router.get('/admins', admin.listOfAdmins)
router.get('/admin/:id', admin.admin)

router.post("/login", admin.login)
router.post("/register", admin.register)

router.put('/admin/:id', admin.update)

router.delete("/admin/:id", admin.remove)
router.delete("/logout", admin.logout)

router.use(errorHandler)

module.exports = router
