exports.singup = function(request, response) {
    response.render("form.hbs", {
        "other_styles": ["form.nojs"],
        "use_awesome": true
    })
}