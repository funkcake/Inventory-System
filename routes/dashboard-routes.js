const router = require('express').Router();
const sequelize = require('../config/connection');
const { Products, Category } = require('../models')

router.get('/', (req, res) => {
    Products.findAll({
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name']
            }
        ]
    })
        .then(data => {
            res.render('dashboard', { products: data, title: 'BBRM DASH', banner: 'BBRM Inventory Dashboard' })
            console.log(data)
        })


})


module.exports = router;