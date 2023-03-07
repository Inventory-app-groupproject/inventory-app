const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')
// const sauce = require('../routes/sauces')
const Item = sequelize.define('item', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.NUMBER,
    category: Sequelize.STRING,
    image: Sequelize.BLOB
})



module.exports = {Item}