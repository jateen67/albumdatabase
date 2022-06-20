const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

const Album = mongoose.model('Album', albumSchema)
module.exports = Album