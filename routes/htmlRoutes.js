(() => {
    //require express & setup Router
    const router = require('express').Router();
    // Requiring models
    const db = require("../db/models");

    // router.get('/', (req,res)=> {
    //     res.render('index');
    // })


    router.get("/", (req,res) => {
        var hbsObject;
        db.Entry.find({})
        .then((allEntries) => {
            hbsObject = {
                data: allEntries
            };
        }).then( () => {res.render("index", hbsObject)}).catch((err) => console.log(`rendering THE IS ERROR IS THE FOLLOWING: ${err}`));      
     }); 
    

    module.exports = router;
})();