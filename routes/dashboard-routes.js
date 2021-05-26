const router = require('express').Router();
const sequelize = require('../config/connection');
const { Products, Category } = require('../models')

router.get('/', (req, res) => {
    Products.findAll({
        include: [
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
        .then(data => {
            res.render('dashboard', { products: data })
            // console.log(data)
        })


})


module.exports = router;