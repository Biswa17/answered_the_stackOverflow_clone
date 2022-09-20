//login
function login(req,res){
    let log_status= "login"
    let user_name = "SignUp"
    if(req.cookies.user_name != undefined){
        user_name = req.cookies.user_name
        log_status = "logout"
    }
    res.render("login",{ log_status:log_status,user_name:user_name})
}

//register
function register(req,res){
    let log_status= "login"
    let user_name = "SignUp"
    if(req.cookies.user_name != undefined){
        user_name = req.cookies.user_name
        log_status = "logout"
    }
    res.render("register",{ log_status:log_status,user_name:user_name})
}


module.exports = {login,register}