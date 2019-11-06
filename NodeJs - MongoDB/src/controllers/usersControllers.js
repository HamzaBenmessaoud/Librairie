const Users = require('../models/users'),
    env = require('../environnement'),
    jwt = require('jsonwebtoken')

exports.listUser = (req, res) => {
    const query = req.query

    Users.apiQuery(query).select("name email avatar").then(user =>
        res.status(201).json(user)
    ).catch(
        err =>
        res.status(500).json(user)
    )
}

exports.createUser = (req, res) => {
    const data = (req.body.email === undefined) ? {
        email: 'zoubida@zoubida.' + Math.floor(Math.random() * 1000),
        password: 'zoubida',
        name: 'azerty'
    } : req.body

    data.tokens = [{
        token: jwt.sign({
            email: data.email
        }, env.jwt, {
            expiresIn: '72h'
        })
    }]

    Users.create(data).then(user =>
        res.status(201).json(user)
    ).catch(
        err =>
        res.status(500).json(err)
    )
}

// exports.deleteUser = (req, res) => {
//     const query = req.query

//     const data = (req.body.email === undefined) ? 
//         err => res.status(400).json(err)
//      : 
//         Users.apiQuery(query).remove(req).then( user =>
//             res.status(201).json(user)
//         )
     
// }
// /////
exports.deleteUser = (req, res) => {
    const query = req.body
    console.log(query)
Users.findOneAndUpdate(query,{actif:false}).then((doc)=>{
    (doc != null)?res.send("done"):res.send("not found") 
    })


    // res.send(Users.findOne({},{email: 'zoubida@zoubida.39'}).email)
    // Users.apiQuery(query).select("_id").then(user =>
    //     Users.findByIdAndDelete(user,(err,res)=>{
    //         console.log(err)
            
    //     })
   
    // ).catch(
    //     err =>
    //     res.status(500).json(user)
    // )7
}