const router = require('express').Router();
const sequelize = require('../config/connection');
const { Products, Category } = require('../models')

router.get('/', (req, res) => {


    // Category.findAll({
    //     include: {
    //         model: Products,
    //         attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    //     }
    // })
    //     .then(categoryData => {
    //         console.log(categoryData)
    //         res.render('dashboard', { category: categoryData })


    //     })
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
            console.log(data)
        })


})


module.exports = router;