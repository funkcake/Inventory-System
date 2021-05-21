const router = require('express').Router();
const { Products } = require('../../models');

// GET /api/products
router.get('/', (req, res) => {
    Products.findAll({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/products/1
router.get('/:id', (req, res) => { });

// POST /api/products
router.post('/', (req, res) => { });

// PUT /api/products/1
router.put('/:id', (req, res) => { });

// DELETE /api/products/1
router.delete('/:id', (req, res) => { });

module.exports = router;