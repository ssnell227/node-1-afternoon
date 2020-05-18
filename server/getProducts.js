const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price) {
        let moreExpensive = products.filter(item => item.price > +req.query.price)
        res.send(moreExpensive)
    } else {
        res.send(products)
    }
}

const getOneProduct = (req, res) => {
    let item = products.find(item => item.id === +req.params.id)
    if (item) {
        res.status(200).send(item)
    } else {
        res.status(500).send('Item not in list')
    }
}

module.exports = {
    getProducts,
    getOneProduct
}