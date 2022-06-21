const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    artist: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
})

const Artist = mongoose.model('Artist', artistSchema)
module.exports = Artist