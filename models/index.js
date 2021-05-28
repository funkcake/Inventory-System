const User = require('./User')
const Category = require('./Category')
const Products = require('./Products')

// create associations

// Products belongsTo Category
Products.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Products, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
})



module.exports = { User, Category, Products };