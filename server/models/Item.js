// const {Sequelize} = require('sequelize')
const {sequelize, DataTypes} = require('../db')
// const sauce = require('../routes/sauces')
const Item = sequelize.define('item', {
<<<<<<< HEAD
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.NUMBER,
    category: Sequelize.STRING,
    image: Sequelize.STRING
=======
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMBER,
    category: DataTypes.STRING,
    image: DataTypes.STRING
>>>>>>> c2f6989d0a9906cb44a24e281890c8be1e01c13b
})



module.exports = {Item}