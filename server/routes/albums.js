const router = require('express').Router()
const album = require('../models/Album')

router.get('/', (req, res) => {
    album.findAll()
    .then(albums => {
        res.json(albums)
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    album.findOne({
        where: {
            album_id: id
        }
    })
    .then(album => {
        res.json(album)
    })
    .catch(err => console.log(err))
})

router.post('/', async (req, res) => {
    const {album_title, album_artist, album_description, album_duration, album_date} = req.body
    album.create({
        album_title,
        album_artist,
        album_description,
        album_duration,
        album_date
    })
    .then(() => console.log('album added'))
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {album_title, album_artist, album_description, album_duration, album_date} = req.body
    album.update({
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
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    album.destroy({
        where: {
            album_id: id
        }
    })
    .then(() => console.log('album deleted'))
    .catch(err => console.log(err))
})

module.exports = router