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
 /////A COMPLETER ET A MODIFIER//////
 /////UPDATE//////
exports.updateBook = (req, res) => {
    const query = (req.params._id !== undefined) ? 
        req.params._id
    : "5dc018e67cefb630b40b5a90"
    console.log('/////////////'+query)


        Books.findOneAndUpdate(query,{title:"nom bien changé HIHIHIHIH"}).then((doc)=>{
            (doc != null)?res.send("done"):res.send("not found") 
            })
}
/////DELETE////
  exports.deleteBook = (req, res) => {
    const query = (req.params._id !== undefined) ?  req.params._id
     : "5dc196d704e2355470fc5735" 
    Books.findByIdAndDelete(query).then((doc)=>{
        (doc != null)?res.send("done"):res.send("not found") 
    })
  

}

//// RATING /////




exports.createRating = (req, res) => {
    const query = req.body
    console.log(query)
    const data = {
        rate: req.body.rate,
        comment:  req.body.comment,
        userId: "A RECUPERER",
        publishDate: new Date()
    }

    Books.findOneAndUpdate(req.body._id,{"$push" : {rating : data}}).then((doc)=>{
        (doc != null)?res.send("done"):res.send("not found") 
        })

}






//// Link /////


