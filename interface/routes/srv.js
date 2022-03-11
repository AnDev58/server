const express = require("express")
const bodyParser = require("body-parser")
const singup = require("../controllers/singup")

const urlencodedParser = bodyParser.urlencoded({extended: false})

const router = express.Router()
router.post("/singup", urlencodedParser, singup)
module.exports = router