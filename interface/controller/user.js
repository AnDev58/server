const {stack} = require("../models/online")

exports.singup = function(request, response) {
    response.render("form.hbs", {
        "other_styles": ["form.nojs"],
        "use_awesome": true
    })
}
exports.dashboard = function(request, response){
    console.log(request.query)
    console.log(stack.get())
    console.log(request.session)
    if(request.query && request.query.id && stack.id(request.query.id) !== -1) {
        stack.remove(stack.id(request.query.id))
        request.session.uid = request.query.id
    }
    if(!request.session.uid) return response.sendStatus(401)
    response.send(`Hello, user with id equals ${request.session.uid}!`)
}