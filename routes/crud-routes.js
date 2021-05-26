const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
    res.render('crud', { title: 'BBRM EDIT' })
})


module.exports = router;