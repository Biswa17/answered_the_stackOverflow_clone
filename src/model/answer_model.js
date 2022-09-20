const {executeQuery} = require("../service/sqlConnection")


function add_new_answer(data,callback){
    let sql = "insert into answers(answer,answer_to,created_by) values(?,?,?)";

    let values = [];
    values.push(data.new_answer)
    values.push(data.question_Id)
    values.push(data.user_Id)



    executeQuery(sql,values,function(err,result){
        if(err){
            return callback(err,null)
        }
        else{
            return callback(null,result)
        }
    })
}



module.exports={add_new_answer};