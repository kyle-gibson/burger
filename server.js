//Dependencies
const express= require("express");
const routes= require("./controllers/burgers_controllers.js");
const exphbs= require("express-handlebars");


const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.static("public"));
app.use(express.json);
app.use(express.urlencoded({ extended: true}));


app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(routes);


app.listen(PORT, function() {
    console.log("App is now listening at localhost:" + PORT);
});