const express = require('express'), // Import express
    app = express(), //instance express
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Books = require('./controllers/booksControllers')

mongoose.connect('mongodb://localhost/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(bodyParser.urlencoded({
    extended: false
}))

/**
 * Route / - GET
 * list all books
 */
app.get('/books', Books.listBooks)

/**
 * Route /book/titre - GET
 * fiche du books
 */
app.get('/book/:title', Books.listBooks)

/**
 * Route /book - POST
 * add book
 */
app.post('/book', Books.saveBook)

app.listen(3000, function() {
        console.log("Run serve")
    }) // Run serve