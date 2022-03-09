const express = require("express")
const controller = require("../controller/home")

const router = express.Router()
router.get("/", controller.index)
router.get("/about", controller.about)
router.get("/links", controller.links)

module.exports = router // Exporting