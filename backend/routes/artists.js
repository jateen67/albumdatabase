const router = require('express').Router()
const artistController = require('../controllers/artistcontroller')

router.route('/').get(artistController.getArtists)

router.route('/:id').get(artistController.getArtistsById)

router.route('/:id').delete(artistController.deleteArtist)

router.route('/update/:id').post(artistController.updateArtist)

router.route('/add').post(artistController.addArtist)

module.exports = router