const router = require('express').Router()
let Artist = require('../models/artist.model')

router.route('/').get((req, res) => {
    Artist.find()
    .then(artists => res.json(artists))
    .catch(err => res.status(400).json(`error: ${err}`))
})

router.route('/:id').get((req, res) => {
    Artist.findById(req.params.id)
    .then(artist => res.json(artist))
    .catch(err => res.status(400).json(`error: ${err}`))
})

router.route('/:id').delete((req, res) => {
    Artist.findByIdAndDelete(req.params.id)
    .then(() => res.json('artist deleted'))
    .catch(err => res.status(400).json(`error: ${err}`))
})

router.route('/update/:id').post((req, res) => {
    Artist.findById(req.params.id)
    .then(artist => {
        artist.artist = req.body.artist
        
        artist.save()
            .then(() => res.json('album updated'))
            .catch(err => res.status(400).json(`error: ${err}`))
    })
    .catch(err => res.status(400).json(`error: ${err}`))
})

router.route('/add').post((req, res) => {
    const artist = req.body.artist
    const newArtist = new Artist({artist})
    newArtist.save()
    .then(() => res.json('artist added'))
    .catch(err => res.status(400).json(`error: ${err}`))
})

module.exports = router