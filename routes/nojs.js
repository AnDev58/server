const express = require("express")

const router = express.Router()
router.use("/", require("../interface/routes/home"));
router.use("/users", require("../interface/routes/user"))

module.exports = router