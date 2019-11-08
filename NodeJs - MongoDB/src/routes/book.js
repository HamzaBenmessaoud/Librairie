const Books = require('../controllers/booksControllers'),
    route = require('express').Router()


route.get('/books', Books.listBooks)
route.get('/book/:title', Books.listBooks)


route.post('/book/:_id', Books.updateBook)
route.post('/book', Books.saveBook)
route.post('/books/link/modify', Books.modifyLink)
route.post('/books/rate', Books.createRating)
route.post('/books/link/add', Books.addLink)
route.post('/books/rate/modify', Books.modifyRating)

route.delete('/book/:_id', Books.deleteBook)
route.delete('/books/link/delete', Books.deleteLink)
route.delete('/books/rate/delete', Books.deleteRating)


module.exports = route