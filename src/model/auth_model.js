const {executeQuery} = require("../service/sqlConnection")
const brypt = require("bcrypt")
const jwt =require("jsonwebtoken")

//username is passed in request body
function find_if_in_db(data,callback){
    let sql = "select * from users where user_name=?";

    
    let values = [];
    values.push(data.user_name)
    
    executeQuery(sql,values,function(err,result){
        if(err){
            return callback(err,null)
        }
        else{
            return callback(null,result)
        }
    })
}

function login(data,result,callback){
    if(brypt.compareSync(data.password, result.password)){
        //user_Id primary key is obtained and used as data

        
        const token = jwt.sign({
            user_Id : result.user_Id,    
        },'secret key',{expiresIn : 600})
        result.token = token
        return callback(null,result)
    }
    else{
        return callback("password didnt match",null)
    }
}




module.exports={find_if_in_db, login};