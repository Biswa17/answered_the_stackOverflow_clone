const auth_controller = require("../controller/auth_controller")
const auth_middleware = require("../middleware/auth_middleware")


//login get token
module.exports = (app) =>{
    app.post("/answer/api/v1/auth/login", auth_controller.login)

}