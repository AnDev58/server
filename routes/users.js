const express = require("express")
const User = require("../models/user")
const dbo = require("../db/conn")

const router = express.Router()
router.route("/singup").post(function(req, res) {
    console.log(req.params)
    if(!req.body) return res.sendStatus(400)
    if(!req.body.name || !req.body.email || !req.body.passwd) return res.sendStatus(400)
    // if(!(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(req.body.email))) return res.sendStatus(400)
    if(!req.body.passwd.length !== undefined && req.body.passwd.length < 8) return res.sendStatus(400)
    console.log("Ok")
    const user = new User(req.body.name, req.body.email, req.body.passwd)
    const db_client = dbo.getDb();
    db_client.collections("users").findOne({email:user.email}, function(err, usr){
        if(err) {
            res.sendStatus(500)
            return console.log(err)
        } else {
            if(usr === null) { // Checking for null(username wasn't alredy taken)
                db_client.collections("users").insertOne(user, function(err, res){
                    if(err) throw err
                    console.log("Ok")
                    express.json(res)
                })
            } else res.sendStatus(400)
        }
    })
})
module.exports = router