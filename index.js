const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/configdb')
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
}

db.authenticate()
.then(() => console.log('db connected pog'))
.catch(err => console.log(err))

app.use('/artists', require('./routes/artists'))
app.use('/albums', require('./routes/albums'))

app.listen(PORT, console.log('server started'))