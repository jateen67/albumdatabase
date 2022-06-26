const router = require('express').Router()
const Album = require('../models/album.model')
const albumController = require('../controllers/albumcontroller')

router.route('/').get(albumController.getAlbums)

router.route('/add').post(albumController.addAlbum)

router.route('/:id').get(albumController.getAlbumById)

router.route('/:id').delete(albumController.deleteAlbum)

router.route('/update/:id').post(albumController.updateAlbum)

module.exports = router