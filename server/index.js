const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./configdb')

app.use(cors())
app.use(express.json())


//get all artists
app.get('/artists', async (req, res) => {
    try {
        const allArtists = await pool.query('SELECT * FROM artist')
        res.json(allArtists.rows)
    } catch (error) {
        console.log(error)
    }
})

//get artist by id
app.get('/artists/:id', async (req, res) => {
    try {
        const {id} = req.params
        const artist = await pool.query('SELECT * FROM artist WHERE artist_id=$1', [id])
        res.json(artist.rows[0])
    } catch (error) {
        console.log(error)
    }
})


//add artist
app.post('/artists', async (req, res) => {
    try {
        const {artist_name} = req.body
        const newArtist = await pool.query("INSERT INTO artist (artist_name) VALUES($1) RETURNING *", [artist_name])
        res.json(newArtist.rows[0])
    } catch (error) {
        console.log(error)
    }
})

//update artist
app.put('/artists/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {artist_name} = req.body
        const updateArtist = await pool.query('UPDATE artist SET artist_name=$1 WHERE artist_id=$2', [artist_name, id])
    } catch (error) {
        console.log(error)
    }
})

//delete artist
app.delete('/artists/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteArtist = pool.query('DELETE FROM artist WHERE artist_id=$1', [id])
        res.json('artist deleted')
    } catch (error) {
        console.log(error)
    }
})

//get all albums
app.get('/albums', async (req, res) => {
    try {
        const allAlbums = await pool.query('SELECT * FROM album')
        res.json(allAlbums.rows)
    } catch (error) {
        console.log(error)
    }
})

//add album
app.post('/albums', async (req, res) => {
    try {
        const {album_title, album_artist, album_description, album_duration, album_date} = req.body
        const newAlbum = await pool.query('INSERT INTO album (album_title, album_artist, album_description, album_duration, album_date) VALUES($1, $2, $3, $4, $5) RETURNING *', [album_title, album_artist, album_description, album_duration, album_date])
        res.json(newAlbum.rows[0])
    } catch (error) {
        console.log(error)
    }
})

//get album by id
app.get('/albums/:id', async (req, res) => {
    try {
        const {id} = req.params
        const album = await pool.query('SELECT * FROM album WHERE album_id=$1', [id])
        res.json(album.rows[0])
    } catch (error) {
        console.log(error)
    }
})

//update album
app.put('/albums/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {album_title, album_artist, album_description, album_duration, album_date} = req.body
        const updateAlbum = await pool.query('UPDATE album SET album_title=$1, album_artist=$2, album_description=$3, album_duration=$4, album_date=$5 WHERE album_id=$6', [album_title, album_artist, album_description, album_duration, album_date, id])
    } catch (error) {
        console.log(error)
    }
})

//delete album
app.delete('/albums/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteAlbum = pool.query('DELETE FROM album WHERE album_id=$1', [id])
        res.json('album deleted')
    } catch (error) {
        console.log(error)
    }
})

app.listen(5000, () => {
    console.log('pog')
})