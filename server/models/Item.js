const {Sequelize} = require('sequelize')
const {sequelize, DataTypes} = require('../db')
// const {Sequelize} = require('sequelize')
// const sauce = require('../routes/sauces')
const Item = sequelize.define('item', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.NUMBER,
    category: Sequelize.STRING,
    image: Sequelize.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMBER,
    category: DataTypes.STRING,
    image: DataTypes.STRING
})



module.exports = {Item}
