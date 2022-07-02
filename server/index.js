const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/configdb')
app.use(cors())
app.use(express.json())

db.authenticate()
.then(() => console.log('db connected pog'))
.catch(err => console.log(err))

app.use('/artists', require('./routes/artists'))
app.use('/albums', require('./routes/albums'))

app.listen(5000, console.log('server started'))