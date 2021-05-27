const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
    res.render('crud', { title: 'BBRM EDIT', title: 'BBRM EDIT', banner: 'BBRM Inventory Edits' })
})


module.exports = router;