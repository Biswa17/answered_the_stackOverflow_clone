const intro_model = require("../model/intro_model")





const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

function home_page(req, res) {
    let posts = ['What is the deadlist snake']
    let log_status= "login"
    let user_name = "SignUp"
    if(req.cookies.user_name != undefined){
        user_name = req.cookies.user_name
        log_status = "logout"
    }
    //calling model
    intro_model.get_all_question([],function(err,result){
        if(err){
            return res.status(500).send({
                message : "couldnt login",
                success : false,
                error : err.message
            })
        }
        else{
            let success_object = {
                message : "added new user sucessfully",
                success : true,
                result : result
            }

            success_object.result.forEach(value => {
                posts.push(value.question)    
            });
            res.render("home", { log_status:log_status,user_name:user_name,home_content: homeStartingContent, posts: posts })
        }
    })
    
    
}



function add_new_question(req, res) {
    let log_status= "login"
    let user_name = "SignUp"
    if(req.cookies.user_name != undefined){
        user_name = req.cookies.user_name
        log_status = "logout"
    }


    let post = { log_status:log_status,user_name:user_name, title: req.body.new_title, post: req.body.new_post }
    posts.push(post)
    res.redirect("/answer/api/v1/home")
}


function about_page(req, res) {
    let log_status= "login"
    let user_name = "SignUp"
    if(req.cookies.user_name != undefined){
        user_name = req.cookies.user_name
        log_status = "logout"
    }
    res.render("about", { log_status:log_status,user_name:user_name, about_content: aboutContent })
}

function contact_page(req, res) {
    let log_status= "login"
    let user_name = "SignUp"
    if(req.cookies.user_name != undefined){
        user_name = req.cookies.user_name
        log_status = "logout"
    }
    res.render("contact", {log_status:log_status,user_name:user_name, contact_content: contactContent })
}

module.exports = { home_page, add_new_question, about_page, contact_page}