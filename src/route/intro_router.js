const intro_controller =  require("../controller/intro_controller")

//Home, about and contact page
module.exports = (app) => {
    app.get("/answer/api/v1/home", intro_controller.home_page )

    app.post("/answer/api/v1/home", intro_controller.add_new_question)

    app.get("/answer/api/v1/about", intro_controller.about_page )

    app.get("/answer/api/v1/contact",intro_controller.contact_page )

}