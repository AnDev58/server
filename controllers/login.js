const User = require("../models/user")
const dbo = require("../db/conn")
const {stack} = require("../interface/models/online")
const express = require("express")

module.exports = function(req, res) {
    if(!req.body) return res.sendStatus(400)
    if(!req.body.email || !req.body.passwd) return res.sendStatus(400)
    console.log("Ok")
    const db_client = dbo.getDb();
    db_client.collection("users").findOne({email:req.body.email}, function(err, usr){
        if(err) {
            res.sendStatus(500)
            return console.log(err)
        } else {
            if(usr !== null) { // Checking for null(username wasn't alredy taken)
                console.log("Ok")
                const user = new User(usr.name, usr.email, req.body.passwd)
                if(user.password === usr.password) {
                    console.log("Ok")
                    if(req.body.js) {
                        stack.new(usr._id.toString())
                        res.redirect("/nojs/users?id="+usr._id)
                    }
                    express.json(usr)
                } else res.sendStatus(400)
            } else res.sendStatus(400)
        }
    })
}