function is_strong_password(req,res,next){
    //strong password is 1 uppercase 1 lowercase 1 numeric and length is minimum 8

    let pass = req.body.password
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    if(!(strongPassword.test(pass))){
        return res.status(500).send({
            message : "Not strong password",
            sucess : false,
            tip : "strong password is 1 uppercase 1 lowercase 1 numeric and length is minimum 8"
        })
    }
    next()
}

function is_valid_email(req,res,next){
    let valid_email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    let mail = req.body.email
    if(!(valid_email.test(mail))){
        return res.status(500).send({
            message : "Not valid email",
            sucess : false,
            tip : "enter a valid email"
        })
    }
    next()
}


module.exports = {is_strong_password, is_valid_email}
