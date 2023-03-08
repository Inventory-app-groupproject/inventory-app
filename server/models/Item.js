// const {Sequelize} = require('sequelize')
const {sequelize, DataTypes} = require('../db')
// const sauce = require('../routes/sauces')
const Item = sequelize.define('item', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMBER,
    category: DataTypes.STRING,
    image: DataTypes.STRING
})



module.exports = {Item}