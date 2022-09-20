const {executeQuery} = require("../service/sqlConnection")


function get_all_question(data,callback){
    let sql = "select * from questions";

    let values = [];
   
    executeQuery(sql,values,function(err,result){
        if(err){
            return callback(err,null)
        }
        else{
            return callback(null,result)
        }
    })
}



module.exports={get_all_question};