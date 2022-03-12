const express = require("express")
const bodyParser = require("body-parser")
const singup = require("../controllers/singup")
const login = require("../controllers/login")

const jsonParser = bodyParser.json({extended: false})

const router = express.Router()
router.post("/singup", jsonParser, singup)
router.post("/login", jsonParser, login)
module.exports = router