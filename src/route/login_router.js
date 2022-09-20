const login_controller = require("../controller/login_controller")


// login and resistration pages
module.exports = (app) =>{

    app.get("/answer/api/v1/login", login_controller.login)
    app.get("/answer/api/v1/logout", function(req,res){
        res.clearCookie('auth');
        res.clearCookie('user_name');
        res.clearCookie('user_Id');
        res.redirect("/answer/api/v1/home");
    })
    
    app.get("/answer/api/v1/register",login_controller.register)

}