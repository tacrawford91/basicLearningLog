(()=>{
    const path = require('path');
    const router = require('express').Router();
    const htmlRoutes = require('./htmlRoutes');
    const apiRoutes = require('./apiRoutes');
    const db = require('../db/models');


    router.use('/api', apiRoutes);
    router.use('/', htmlRoutes);

    module.exports = router;
})();