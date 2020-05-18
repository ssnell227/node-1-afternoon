const express = require('express')

const {getProducts, getOneProduct} = require('./getProducts')

const app = express()

const SERVER_PORT = 4001

app.use(express.json())

app.get('/api/products', getProducts)

app.get('/api/products/:id', getOneProduct)

app.listen(SERVER_PORT, () => console.log('HELLO!'))