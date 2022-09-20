//pathS page
const _ = require('lodash');
let posts = ['Duniya gol kyu hae']


module.exports = (app) => {
    app.get("/answer/api/v1/post/:title",function(req,res){
      let log_status= "login"
      let user_name = "SignUp"
      if(req.cookies.user_name != undefined){
          user_name = req.cookies.user_name
          log_status = "logout"
      }

      
        let title = _.lowerCase(req.params.title)
        console.log(title)
      
        posts.forEach(function(post){
          let stored_title = _.lowerCase(post.title)
          console.log(stored_title)
          if(stored_title == title){    
            res.render("post", {log_status:log_status,user_name:user_name,post:post})
          }
        })
        
    })
    
}