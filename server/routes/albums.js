const router = require('express').Router()
const albumController = require('../controllers/albumcontroller')

router.get('/', albumController.getAlbums)
router.get('/:id', albumController.getAlbumById)
router.post('/', albumController.addAlbum)
router.put('/:id', albumController.updateAlbum)
router.delete('/:id', albumController.deleteAlbum)

module.exports = router