const express = require('express')

const app = express()

const SERVER_PORT = 4001

app.use(express.json())

app.listen(SERVER_PORT, () => console.log('HELLO!'))