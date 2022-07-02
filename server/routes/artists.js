const router = require('express').Router()
const artistController = require('../controllers/artistcontroller')

router.get('/', artistController.getArtists)
router.get('/:id', artistController.getArtistById)
router.post('/', artistController.addArtist)
router.put('/:id', artistController.updateArtist)
router.delete('/:id', artistController.deleteArtist)

module.exports = router