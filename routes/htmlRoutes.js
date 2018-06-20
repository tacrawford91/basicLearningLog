(() => {
    //require express & setup Router
    const router = require('express').Router();
    // Requiring models
    const db = require("../db/models");


    router.get("/", (req,res) => {
        var hbsObject;
        db.Entry.findAll({order:[['createdAt','DESC']]})
        .then((allEntries) => {
            // console.log('all entries', allEntries.dataValues)
            hbsObject = {
                data: allEntries
            };
            console.log('handlebar object', hbsObject);
        }).then( () => {res.render("index", hbsObject)}).catch((err) => console.log(`rendering THE IS ERROR IS THE FOLLOWING: ${err}`));      
     }); 
    

    module.exports = router;
})();