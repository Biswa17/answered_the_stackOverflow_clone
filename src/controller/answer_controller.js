const answer_model = require("../model/answer_model")

// register new question
function new_answer(req,res){
    let data = req.body
    data.user_Id = req.cookies.user_Id
    

    
    //calling model
    answer_model.add_new_answer(data,function(err,result){
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
                message : "added new question sucessfully",
                success : true
            })
        }
    })
}

module.exports = {new_answer}