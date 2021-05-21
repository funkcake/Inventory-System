const router = require('express').Router()

const userRoutes = require('./user-routes.js')
const productRoutes = require('./product-routes.js')
const categoryRoutes = require('./category-routes.js')

router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use('/category', categoryRoutes)


module.exports = router;