const {executeQuery} = require("../service/sqlConnection")
const brypt = require("bcrypt")


function add_new_user(data,callback){
    let sql = "insert into users(user_name,password,email) values(?,?,?)";

    
    let values = [];
    values.push(data.user_name)
    let pass = brypt.hashSync(data.password,8)
    values.push(pass)
    values.push(data.email)



    executeQuery(sql,values,function(err,result){
        if(err){
            return callback(err,null)
        }
        else{
            return callback(null,result)
        }
    })
}



module.exports={add_new_user};