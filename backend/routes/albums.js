const router = require('express').Router()
const Album = require('../models/album.model')

router.route('/').get((req, res) => {
    Album.find()
    .then(albums => res.json(albums))
    .catch(err => res.status(400).json(`error: ${err}`))
})

router.route('/add').post((req, res) => {
    const title = req.body.title
    const artist = req.body.artist
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newAlbum = new Album({
        title, artist, description, duration, date
    })

    newAlbum.save()
    .then(albums => res.json('album added'))
    .catch(err => res.status(400).json(`error: ${err}`))
})

router.route('/:id').get((req, res) => {
    Album.findById(req.params.id)
    .then(album => res.json(album))
    .catch(err => res.status(400).json(`error: ${err}`))
})

router.route('/:id').delete((req, res) => {
    Album.findByIdAndDelete(req.params.id)
    .then(() => res.json('album deleted'))
    .catch(err => res.status(400).json(`error: ${err}`))
})

router.route('/update/:id').post((req, res) => {
    Album.findById(req.params.id)
    .then(album => {
        album.title = req.body.title
        album.artist = req.body.artist
        album.description = req.body.description
        album.duration = req.body.duration
        album.date = req.body.date
        
        album.save()
            .then(() => res.json('album updated'))
            .catch(err => res.status(400).json(`error: ${err}`))
    })
    .catch(err => res.status(400).json(`error: ${err}`))
})

module.exports = router