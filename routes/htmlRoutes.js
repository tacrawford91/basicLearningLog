(() => {
    //require express & setup Router
    const router = require('express').Router();
    // Requiring models
    const db = require("../db/models");
    //moment
    const moment = require('moment')


    router.get("/", (req,res) => {
        var hbsObject;
        db.Entry.findAll({order:[['createdAt','DESC']]})
        .then((data) => {
            let newData = [];
            data.forEach( data => {
                let htmlData = {
                    id: data.id,
                    day: moment(data.day).format("dddd, MMMM Do YYYY"),
                    skill: data.skill, 
                    summary: data.summary,
                    description: data.description,
                    imageURL: data.imageURL,
                    language: data.language,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt
                }
                newData.push(htmlData);
            })
            hbsObject = {
                data: newData
            };
        }).then( () => {res.render("index", hbsObject)}).catch((err) => console.log(`rendering THE IS ERROR IS THE FOLLOWING: ${err}`));      
     }); 
    

    module.exports = router;
})();