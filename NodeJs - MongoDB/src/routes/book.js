const Books = require('../controllers/booksControllers'),
    route = require('express').Router()


route.get('/books', Books.listBooks)
route.get('/book/:title', Books.listBooks)
route.post('/book/:id', Books.updateBook)
route.post('/book', Books.saveBook)

module.exports = route