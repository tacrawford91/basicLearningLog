(()=>{
    //require express & setup Router
    const router = require("express").Router();
    // Requiring models
    const db = require("../db/models");

    //Create New Entry
    router.post("/newEntry", (req,res) => {
        console.log(req.body);
        db.Entry.create(req.body).then( (dbPost) => {
            console.log(dbPost);
            res.json(dbPost);
        });
    });

    //Get all Entries
    router.get("/allEntries", (req,res) => {
        db.Entry.findAll({}).then( (data)  => {
            console.log(data);
            res.json(data);
        });
    });


    module.exports = router;
})();