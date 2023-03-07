const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')
const User = sequelize.define('user', {
    name: Sequelize.STRING,
    ID: Sequelize.NUMBER
})

module.exports = {User}
