const Books = require('../controllers/booksControllers'),
    route = require('express').Router()


route.get('/books', Books.listBooks)
route.get('/book/:title', Books.listBooks)
route.post('/book/:_id', Books.updateBook)
route.post('/book', Books.saveBook)
route.delete('/book/:_id', Books.deleteBook)

module.exports = route