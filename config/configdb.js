const {Sequelize} = require('sequelize')
const Pool = require('pg').Pool
require('dotenv').config()


const devConfig = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres'
})

const productionConfig = {
    connectionString: process.env.DATABASE_URL
}

process.env.NODE_ENV === 'production' ? module.exports = new Pool(productionConfig) : module.exports = devConfig