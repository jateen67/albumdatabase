const {Sequelize} = require('sequelize')

module.exports = new Sequelize('albumdb', 'postgres', 'hash', {
    host: 'localhost',
    dialect: 'postgres'
});