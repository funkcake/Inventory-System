const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Products extends Model { }

Products.init({
    // define columns for prodcuts
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,

    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    }
},
    {
        sequelize,
        timestamps: false,
        initialAutoIncrement: 500,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    })

module.exports = Products