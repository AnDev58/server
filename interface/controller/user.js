const {stack} = require("../models/online")
const db_client = require("../../db/conn")
const { ObjectId } = require("mongodb")

exports.singup = function(request, response) {
    response.render("form.hbs", {
        "other_styles": ["form.nojs"],
        "use_awesome": true
    })
}
exports.dashboard = function(request, response){
    if(request.query && request.query.id && stack.id(request.query.id) !== -1) {
        request.session.uid = request.query.id
    }
    if(!request.session.uid) return response.sendStatus(401)
    db_client.getDb().collection("users").findOne({_id: new ObjectId(request.session.uid)}, function(err, user){
        if(err) {
            console.log(err)
            return response.sendStatus(500)
        }
        response.render("dashboard.hbs", {
            "name": user.name[0].toUpperCase() + user.name.slice(1),
            "id": user._id.toString(),
            "info": "<p>Error 1000-7</p>"
        })
    }
    )}