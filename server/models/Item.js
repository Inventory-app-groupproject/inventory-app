<<<<<<< HEAD
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
=======
const Sequelize = require("sequelize");
const { sequelize } = require("../db");

const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.NUMBER,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = { Item };
>>>>>>> 6fa2231b1475df6ec1c3f9862f8e27241fb8b9ea
