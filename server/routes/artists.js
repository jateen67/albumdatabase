const router = require('express').Router()
const artist = require('../models/Artist')

router.get('/', (req, res) => {
    artist.findAll()
    .then(artists => {
        res.json(artists)
        res.sendStatus(200)
    })
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    artist.findOne({
        where: {
            artist_id: id
        }
    })
    .then(artist => {
        res.json(artist)
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const {artist_name} = req.body
    artist.create({
        artist_name
    })
    .then(() => {
        console.log('artist added')
    })
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {artist_name} = req.body
    artist.update({
        artist_name
    }, {
        where: {
            artist_id: id
        }
    })
    .then(() => console.log('artist updated'))
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    artist.destroy({
        where: {
            artist_id: id
        }
    })
    .then(() => console.log('artist deleted'))
    .catch(err => console.log(err))
})

module.exports = router