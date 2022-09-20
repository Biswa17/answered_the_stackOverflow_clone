var mysql = require('mysql2');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'answered'
});

function executeQuery(query,data,callback){
    pool.getConnection(function(error,connection){
        if(error){
            return callback(error,null)
        }
        else{
            connection.query(query,data,function(err,result){
                if(err){
                    connection.release();
                    return callback(err,null)
                }
                else{
                    //connection.release();
                    return callback(null,result)
                }
            })
        }
    })
    
}
module.exports = {executeQuery}
