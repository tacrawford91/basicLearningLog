(()=>{
    //require express & setup Router
    const router = require("express").Router();
    // Requiring models
    const db = require("../db/models");

    //Create New Entry
    router.post("/newEntry", (req,res) => {
        console.log(req.body);
        db.Entry.create(req.body).then((newEntry) => {res.send("new entry added")}).catch((err) => {if (err) throw err})
    });

    // //Get all Entries
    // router.get("/allEntries", (req,res) => {
    //     db.Entry.findAll({}).then( (data)  => {
    //         console.log(data);
    //         res.json(data);
    //     });
    // });


    module.exports = router;
})();