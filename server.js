(()=>{
        const express = require("express");
        const bodyParser = require("body-parser");
        const exphbs  = require("express-handlebars");
        const env = require("dotenv").load();
        const app = express();
        const PORT = process.env.PORT || 3000;
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        const db = require("./db/models");


        app.use(express.static("public"));
        app.engine("handlebars", exphbs({defaultLayout: "main"}));
        app.set("view engine", "handlebars");

        const routes = require('./routes');
        // Use routes
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
            app.use(routes);
        });
       



        db.sequelize.sync({force:false}).then(function() {
            app.listen(PORT, function() {
                console.log("App listening on PORT " + PORT);
            });
        
        });
})();




