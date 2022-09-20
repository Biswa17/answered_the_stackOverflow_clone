//token is passed in header under auth
const auth_model = require("../model/auth_model")
const jwt = require("jsonwebtoken")

function verify_token(req,res,next){

    const token = req.cookies.auth
    if(!token){
        return res.status(403).send({
            message : "No token provided"
        })
    }

    jwt.verify(token,"secret key",(err, decoded) =>{
        if(err){
            return res.status(401).send({
                message : "Token not valid"
            });
        }
        //if no error
        req.body.user_Id =  decoded.user_Id
        
        next();
    })
}



module.exports = {verify_token}