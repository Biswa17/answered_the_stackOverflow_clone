const answer_controller = require("../controller/answer_controller")

module.exports = (app) => {
  // get the answer page
  app.get("/answer/api/v1/answer", )
  
  app.post("/answer/api/v1/answer", answer_controller.new_answer)
}