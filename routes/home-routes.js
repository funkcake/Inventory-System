const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
    res.render('login', { title: 'BBRM LOGIN', banner: 'BBRM Inventory Login' })
})


module.exports = router;