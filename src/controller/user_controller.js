const user_model = require("../model/user_model")

// register new user
function new_user(req,res){
    let data = req.body
   
    //calling model
    user_model.add_new_user(data,function(err,result){
        if(err){
            let return_obj = {
                message : "could not insert",
                success : false,
                error : err.message
            }
            res.render("error",{error_code:500, error_message:return_obj.error})
        }
        else{
            res.status(200)
            return res.send({
                message : "added new user sucessfully",
                success : true
            })
        }
    })




}

module.exports = {new_user}