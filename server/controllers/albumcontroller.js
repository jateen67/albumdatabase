let Album = require('../models/Album')

const getAlbums = (req, res) => {
    Album.findAll()
    .then(albums => {
        res.json(albums)
    })
    .catch(err => console.log(err))
}

const getAlbumById = (req, res) => {
    const {id} = req.params
    Album.findOne({
        where: {
            album_id: id
        }
    })
    .then(album => {
        res.json(album)
    })
    .catch(err => console.log(err))
}

const addAlbum = (req, res) => {
    const {album_title, album_artist, album_description, album_duration, album_date} = req.body
    Album.create({
        album_title,
        album_artist,
        album_description,
        album_duration,
        album_date
    })
    .then(() => console.log('album added'))
    .catch(err => console.log(err))
}

const updateAlbum = (req, res) => {
    const {id} = req.params
    const {album_title, album_artist, album_description, album_duration, album_date} = req.body
    Album.update({
        album_title,
        album_artist,
        album_description,
        album_duration,
        album_date
    }, {
        where: {
            album_id: id
        }
    })
    .then(() => console.log('album updated'))
    .catch(err => console.log(err))
}

const deleteAlbum = (req, res) => {
    const {id} = req.params
    Album.destroy({
        where: {
            album_id: id
        }
    })
    .then(() => console.log('album deleted'))
    .catch(err => console.log(err))
}

module.exports = {
    getAlbums, getAlbumById, addAlbum, updateAlbum, deleteAlbum
}