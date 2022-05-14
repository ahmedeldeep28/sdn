const router = require("express").Router()
const auth_controller = require("../controller/auth.controller")
const guardAuth = require("./guards/guard.auth")

router.get("/login", guardAuth.notAdmin,auth_controller.getLogin)
router.post("/login", auth_controller.postLogin)

router.all("/logout", auth_controller.logout)

module.exports = router