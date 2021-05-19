const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'mellis',
        email: 'mellis.eriecon@gmail.com',
        password: 'passwordme'
    },
    {
        username: 'bmunoz',
        email: 'brianemunoz@outlook.com',
        password: 'passwordbm'
    },
    {
        username: 'bcasto',
        email: 'castobrianj@gmail.com',
        password: 'passwordbc'
    },
    {
        username: 'rpena',
        email: 'ryanspena@gmail.com',
        password: 'passwordrp'
    }

]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true })

module.exports = seedUsers