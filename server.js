let express = require("express");

let PORT = process.env.PORT || 8000;
let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller.js")

app.use(routes);

app.listen(PORT, function(){
    console.log("Listening on port: ", PORT)
})