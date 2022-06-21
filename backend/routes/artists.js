const router = require('express').Router()
let Artist = require('../models/artist.model')

router.route('/').get((req, res) => {
    User.find()
    .then(artists => res.json(artists))
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