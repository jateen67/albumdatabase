const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    artist: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        minlength: 1
    },
    duration: {
        type: String,
        required: true
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