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

exports.modifyRating = (req, res) => {
    var tab=[]
    Books.findById(req.body._id).then((doc)=>
    {   
        tab=doc['rating']
        for (let i = 0; i < tab.length; i++) {
            if (req.body.idrat==tab[i]['_id']) {
                tab[i]['rate'] = (req.body.rate !== undefined )?req.body.rate : tab[i]['rate'];
                tab[i]['comment'] = (req.body.comment !== undefined )?req.body.comment : tab[i]['comment'];
                tab[i]['userId'] = (req.body.userId !== undefined )?req.body.userId : tab[i]['userId'];
                tab[i]['publishDate'] = (req.body.publishDate !== undefined )?req.body.publishDate : tab[i]['publishDate'];   
            }
        }
        Books.findOneAndUpdate(req.body._id,{"$set" : {rating : tab}}).then((d)=>
        {
            (d != null)?res.send(d):res.send(d) 
        });  
    });
}
exports.deleteRating = (req, res) => {

    var tab=[]
    Books.findById(req.body._id).then((doc)=>
    {   
        doc['rating'].forEach(i=> {
            if (req.body.idrat!=i['_id']) {
                tab.push(i)
            }
        });
 
        Books.findOneAndUpdate(req.body._id,{"$set" : {rating : tab}}).then((d)=>
        {
            (d != null)?res.send(d):res.send(d) 
        });  
    });
}




//// Link /////
exports.addLink = (req, res) => { 
    var b= true;
    data = {
        name: (req.body.name !== undefined )?req.body.name : "Amazon",
        link: (req.body.link !== undefined )?req.body.link : "www.amazon.com",
    };
    Books.findById(req.body._id).select("links").then((doc)=>
        {   
        doc['links'].forEach(i => {
            b= (data.name==i.name&&data.link==i.link)? false: b;
        });

           b==false ? res.send("////LIEN EXISTANT/////"): Books.findOneAndUpdate(req.body._id,
                {"$push" : {links : data}}).then((doc)=>{(doc != null)?res.send("done"):res.send("not found") 
        });  
    });
    
}
exports.modifyLink = (req, res) => {
    var tab=[]
    Books.findById(req.body._id).then((doc)=>
    {   
        tab=doc['links']

        for (let i = 0; i < tab.length; i++) {
  
            if (req.body.idLink==tab[i]['_id']) {
                tab[i]['name'] = (req.body.name !== undefined )?req.body.name : tab[i]['name'];
                tab[i]['link'] = (req.body.link !== undefined )?req.body.link : tab[i]['link'];
            
            }
        }

          
                
  
        Books.findOneAndUpdate(req.body._id,{"$set" : {links : tab}}).then((d)=>
        {
            (d != null)?res.send(d):res.send(d) 
        });  
    });
}


exports.deleteLink = (req, res) => {
    var tab=[]
    Books.findById(req.body._id).then((doc)=>
    {   
        

        doc['links'].forEach(i => {
            if (req.body.idLink!=i['_id']) {
                tab.push(i)
            }
        });
   
        Books.findOneAndUpdate(req.body._id,{"$set" : {links : tab}}).then((d)=>
        {
            (d != null)?res.send(d):res.send(d) 
        });  
    });
}




