const {executeQuery} = require("../service/sqlConnection")


function add_new_question(data,callback){
    let sql = "insert into questions(question,created_by) values(?,?)";

    
    let values = [];
    values.push(data.new_question)
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

function find_question(data,callback){
    let sql = "select * from questions where question=?";

    let values = [];
    values.push(data.question)
   


    executeQuery(sql,values,function(err,result){
        if(err){
            return callback(err,null)
        }
        else{
            return callback(null,result)
        }
    })
}




module.exports={add_new_question,find_question};