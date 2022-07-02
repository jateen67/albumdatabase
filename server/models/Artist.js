const Sequelize = require('sequelize')
const db = require('../config/configdb')

const Artist = db.define('artist', {
    artist_id: {
        type: Sequelize.NUMBER,
        autoIncrement: true,
        primaryKey: true,
    },
    artist_name: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Artist
