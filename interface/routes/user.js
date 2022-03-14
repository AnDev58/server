const express = require("express"); //Express router class
const controller = require("../controller/user"); //controller
const bodyParser = require("body-parser")

const router = express.Router() //Initialising router
const urlencodedParser = bodyParser.urlencoded({extended: false})

//URLs
router.get("/singup", controller.singup)
router.get("/", urlencodedParser, controller.dashboard)
router.get("/logout", function(req, res){
    req.session.destroy(err => {
        if (err) {
            return res.send('Logout error')
        }
        res.clearCookie('main', {path: '/'})
        return res.send("Success!")
    })
})

module.exports = router // Exporting