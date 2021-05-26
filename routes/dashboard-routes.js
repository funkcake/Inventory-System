const router = require('express').Router();
const { data } = require('browserslist');
const sequelize = require('../config/connection');
const Products = require('../models/Products')

router.get('/', (req, res) => {

    Products.findAll()
        .then(data => {
            res.render('dashboard', { products: data })
            // console.log(data)
        })


})


module.exports = router;