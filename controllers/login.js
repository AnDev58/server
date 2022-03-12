const User = require("../models/user")
const dbo = require("../db/conn")
const express = require("express")

module.exports = function(req, res) {
    console.log(req.body)
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
                const user = new User(usr.name, usr.email, req.body.passwd)
                if(user.password === usr.password) {
                    console.log("Ok")
                    if(req.body.js) res.send("Success")
                    express.json(usr)
                }
            } else res.sendStatus(400)
        }
    })
}