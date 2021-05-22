const router = require('express').Router();
const { Products, Category } = require('../../models');

// GET /api/products
router.get('/', (req, res) => {
    Products.findAll({
        attributes: ['id', 'product_name', 'description', 'price', 'stock', 'category_id'],
        include: [
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
        .then(productData => res.json(productData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/products/1
router.get('/:id', (req, res) => {
    // find a single product by its `id`
    Products.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'product_name', 'description', 'price', 'stock', 'category_id'],
        include: [
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
        .then(productData => {
            if (!productData) {
                res.status(404).json({ message: 'Product missing at this ID' })
                return
            }
            res.json(productData)
        })
        .catch(e => {
            res.status(500).json(e)
        })
});

// POST /api/products
router.post('/', (req, res) => {
    // Products.create({
    //     product_name: req.body.product_name,
    //     description: req.body.description,
    //     price: req.body.price,
    //     stock: req.body.stock,
    //     category_id: req.body.category_id
    // })

});

// PUT /api/products/1
router.put('/:id', (req, res) => { });

// DELETE /api/products/1
router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
    Products.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(productData => {
            if (!productData) {
                res.status(404).json({ message: 'Product missing at this ID' })
                return
            }
            res.json(productData)
        })
        .catch(e => {
            res.status(500).json(e)
        })
});

module.exports = router;