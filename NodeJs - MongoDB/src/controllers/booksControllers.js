const Books = require('../models/books')

exports.saveBook = (req, res) => {
    let book = new Books() // New instance de book
    book.title = (req.body.title !== undefined) ? req.body.title : "Mike le roi!"
    book.author = "MoHammed EL Korchi"
    book.publishDate = new Date()
    book.save(function(err) { // Save book
        console.log(err)
        res.status(201).json(req.body)
    })
}

exports.listBooks = (req, res) => {
    const data = (req.params.title !== undefined) ? {
        title: req.params.title
    } : {}

    Books.find(data, function(err, books) {
        res.status(200).json(books)
    })
}