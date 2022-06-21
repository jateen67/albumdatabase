const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongodb connection established successfully')
})

const albumsRouter = require('./routes/albums')
const artistsRouter = require('./routes/artists')

app.use('/albums', albumsRouter)
app.use('/artists', artistsRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})