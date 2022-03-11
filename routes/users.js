const express = require("express")
const bodyParser = require("body-parser")
// const singup = require("../controllers/singup")

const jsonParser = bodyParser.json({extended: false})

const router = express.Router()
// router.post("/singup", jsonParser, singup)
module.exports = router