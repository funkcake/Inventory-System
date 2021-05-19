const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'PC',
  },
  {
    category_name: 'Monitor',
  },
  {
    category_name: 'Laptop',
  },
  {
    category_name: 'Server',
  },
  {
    category_name: 'Misc.',
  },
  {
    category_name: 'Switches',
  },
  {
    category_name: 'Tablets',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
