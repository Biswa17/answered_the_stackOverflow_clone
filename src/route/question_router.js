const question_controller = require("../controller/question_controller")

//Compose question
module.exports = (app) => {
  app.get("/answer/api/v1/question", function (req, res) {
    let log_status = "login"
    let user_name = "SignUp"
    if (req.cookies.user_name != undefined) {
      user_name = req.cookies.user_name
      log_status = "logout"
      res.render("compose", { log_status: log_status, user_name: user_name })
    }
    else{
      res.redirect("/answer/api/v1/home")
    }
  })


  app.post("/answer/api/v1/question", question_controller.new_question)
}