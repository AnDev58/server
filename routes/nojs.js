const express = require("express")

const router = express.Router()
router.use("/", require("../interface/routes/home"));
router.use("/users", require("../interface/routes/user"))
router.use("/srv", require("../interface/routes/srv"))

module.exports = router