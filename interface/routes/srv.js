const express = require("express")
const bodyParser = require("body-parser")
const singup = require("../../controllers/singup")
const login = require("../../controllers/login")

const urlencodedParser = bodyParser.urlencoded({extended: false})

const router = express.Router()
router.post("/singup", urlencodedParser, singup)
router.post("/login", urlencodedParser, login)
module.exports = router