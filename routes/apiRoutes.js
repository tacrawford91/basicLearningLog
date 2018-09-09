(()=>{
    //require express & setup Router
    const router = require('express').Router();
    // Requiring models
    const db = require('../db/models');


   //get One
   router.get('/entry/:id', (req,res) => {
       db.Entry.findById(req.params.id)
       .then((data) => res.json(data));
   });

    //get all entries
    router.get('/getAll', (req,res) => {
        db.Entry.findAll({order:[['createdAt','DESC']]})
        .then((data) => {
            res.json(data);
        })
   });
   
    //Create New Entry
    router.post('/newEntry', (req,res) => {
        db.Entry.create(req.body).then((newEntry) => {res.send(newEntry)}).catch((err) => {if (err) throw err})
    });

   //Delete Entry
    router.delete('/entry/:id', (req,res) => {
    db.Entry.destroy(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => { console.log(e); res.send(e)});
    });


    module.exports = router;
})();