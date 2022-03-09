const express = require("express"); //Express router class
const controller = require("../controller/user"); //controller

const router = express.Router() //Initialising router

//URLs
router.get("/singup", controller.singup)

module.exports = router // Exporting