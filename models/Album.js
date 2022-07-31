const Sequelize = require('sequelize')
const db = require('../config/configdb')

const Album = db.define('album', {
    album_id: {
        type: Sequelize.NUMBER,
        autoIncrement: true,
        primaryKey: true,
    },
    album_title: {
        type: Sequelize.STRING  
    },
    album_artist: {
        type: Sequelize.STRING
    },
    album_description: {
        type: Sequelize.STRING
    },
    album_duration: {
        type: Sequelize.STRING
    },
    album_date: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Album
