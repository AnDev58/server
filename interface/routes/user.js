const express = require("express"); //Express router class
const controller = require("../controller/user"); //controller
const bodyParser = require("body-parser")

const router = express.Router() //Initialising router
const urlencodedParser = bodyParser.urlencoded({extended: false})

//URLs
router.get("/singup", controller.singup)
router.get("/", urlencodedParser, controller.dashboard)

module.exports = router // Exporting