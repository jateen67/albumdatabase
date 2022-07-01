const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'hash',
    host: 'localhost',
    port: '5432',
    database: 'albumdb'
})

module.exports = pool