module.exports = {
    index: index = function (request, response) { // Index page
        response.render("index.hbs", { // The sturcure of the params is
            other_styles: ["index"], // Styles except main we need (whithout path end extension)
            use_menu: true, // Will we use menu
        })
    },
    about: function (request, response) {
        response.render("aboutus.hbs", {
            "other_styles": ["about"],
            "use_menu": true,
        })
    },
    links: function (request, response) {
        response.render("links.hbs", {
            "use_menu": true,
        })
    }
}