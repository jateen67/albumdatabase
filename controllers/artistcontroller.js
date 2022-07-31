let Artist = require('../models/Artist')

const getArtists = (req, res) => {
    Artist.findAll()
    .then(artists => {
        res.json(artists)
    })
    .catch(err => console.log(err))
}

const getArtistById = (req, res) => {
    const {id} = req.params
    Artist.findOne({
        where: {
            artist_id: id
        }
    })
    .then(artist => {
        res.json(artist)
    })
    .catch(err => console.log(err))
}

const addArtist = (req, res) => {
    const {artist_name} = req.body
    Artist.create({
        artist_name
    })
    .then(() => {
        console.log('artist added')
    })
    .catch(err => console.log(err))
}

const updateArtist = (req, res) => {
    const {id} = req.params
    const {artist_name} = req.body
    Artist.update({
        artist_name
    }, {
        where: {
            artist_id: id
        }
    })
    .then(() => console.log('artist updated'))
    .catch(err => console.log(err))
}

const deleteArtist = (req, res) => {
    const {id} = req.params
    Artist.destroy({
        where: {
            artist_id: id
        }
    })
    .then(() => console.log('artist deleted'))
    .catch(err => console.log(err))
}

module.exports = {
    getArtists, getArtistById, addArtist, updateArtist, deleteArtist
}