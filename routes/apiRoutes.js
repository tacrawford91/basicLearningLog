(()=>{
    //require express & setup Router
    const router = require("express").Router();
    // Requiring models
    const db = require("../db/models");

    //Create New Entry
    router.post("/newEntry", (req,res) => {
        console.log(req.body);
        db.Entry.create(req.body).then((newEntry) => {res.send(newEntry)}).catch((err) => {if (err) throw err})
    });



    module.exports = router;
})();