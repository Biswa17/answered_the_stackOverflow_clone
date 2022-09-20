//login logic
const auth_model = require("../model/auth_model")




// register new user
function login(req,res){
    let data = req.body
    console.log(req.cookies)
    //calling model
    auth_model.find_if_in_db(data,function(err,result){
        if(err){
            return res.status(500).send({
                message : "couldnt login",
                success : false,
                error : err.message
            })
        }
        else{
            if(result.length == 0)
            {
                return res.status(401).send({
                    message : "user does not exist",
                    success : false
                })
            }
            auth_model.login(data,result[0],function(err1,result1){
                if(err1){
                    return res.status(401).send({
                        message : err1,
                        success : false
                    })
                }
                else{
                    const success_object = {
                        user_Id :result1.user_Id,
                        user_name : result1.user_name,
                        email : result1.email ,
                        message : "successfully login",
                        token : result1.token,
                        success : true
                    }
                    res.cookie('auth', success_object.token);
                    res.cookie('user_name', success_object.user_name);
                    res.cookie('user_Id', success_object.user_Id);
                    res.redirect("/answer/api/v1/home")

                }
            })
        }
    })

}

module.exports = {login}