const router = require('express').Router();
const { Category, Products } = require('../../models');

// GET /api/category
router.get('/', (req, res) => {
    Category.findAll({
        include: {
            model: Products,
            attributes: ['id', 'product_name', 'description', 'price', 'stock', 'category_id']
        }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(e => {
            console.log(e);
            res.status(500).json(e);
        });
});

// GET /api/category/1
router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Category.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Products,
            attributes: ['id', 'product_name', 'description', 'price', 'stock', 'category_id']
        }

    })
        .then(categoryData => {
            if (!categoryData) {
                res.status(404).json({ message: 'Category Missing at this ID' })
                return
            }
            res.json(categoryData)
        })
        .catch(e => {

            res.status(500).json(e)
        })
});

// POST /api/category
router.post('/', (req, res) => {
    // create a new category
    Category.create({
        category_name: req.body.category_name
    })
        .then(categoryData => res.json(categoryData))
        .catch(e => {

            res.status(500).json(e)
        })
});

// PUT /api/category/1
router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(categoryData => {
            if (!categoryData) {
                res.status(404).json({ message: 'Category Missing at this ID' })
                return

            }
            res.json(categoryData)
        })
        .catch(e => {

            res.status(500).json(e)
        })
});

// DELETE /api/category/1
router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(categoryData => {
            if (!categoryData) {
                res.status(404).json({ message: 'Category Missing at this ID' })
                return
            }
            res.json(categoryData)
        })
        .catch(e => {

            res.status(500).json(e)
        })
});

module.exports = router;