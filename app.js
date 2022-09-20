const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const cookieParser = require('cookie-parser')
const port_number = 3000




const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())










require("./src/route/auth_router")(app)
require("./src/route/intro_router")(app)
require("./src/route/question_router")(app)
require("./src/route/path_router")(app)
require("./src/route/login_router")(app)
require("./src/route/user_router")(app)
require("./src/route/answer_route")(app)




app.listen(port_number, function () {
  console.log("Server started on port " + port_number);
});
