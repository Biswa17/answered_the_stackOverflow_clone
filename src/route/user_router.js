// redirection app from server
const user_controller = require("../controller/user_controller")
const user_middleware = require("../middleware/user_middleware")

//signin register
module.exports = (app) =>{
    app.post("/answer/api/v1/user/register",user_controller.new_user )
}