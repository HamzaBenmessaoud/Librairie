const Users = require('../models/users'),
    env = require('../environnement'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    Sessions = require('../models/sessions')

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
    const a = Users.findOne(data.email).then((doc)=>{
        (doc != null)?true:false 
        })
    if(a){
        Users.create(data).then(user =>
            res.status(201).json(user)
        ).catch(
            err => res.status(500).json(err)
        )
    } else {
        res.send("email already use")
    }
}

exports.deleteUser = (req, res) => {
    const query = req.body
    Users.findOneAndUpdate(query,{actif:false}).then((doc)=>{
        (doc != null)?res.send("done"):res.send("user not found") 
    })
}


exports.updateUserEmail = (req, res) => {
    const query = req.body._id       
    Users.findByIdAndUpdate(query,{email:req.body.email}).then((doc)=>{
        (doc != null)?res.send("done"):res.send("user not found") 
    })
}

exports.updateUserPassword = (req, res) => {
    const query = req.body._id       
    Users.findByIdAndUpdate(query,{password:_password}).then((doc)=>{
        (doc != null)?res.send("done"):res.send("user not found") 
    })
}

exports.updateUserName = (req, res) => {
    const query = req.body._id       
    Users.findByIdAndUpdate(query,{name:req.body.name}).then((doc)=>{
        (doc != null)?res.send("done"):res.send("user not found") 
    })
}

exports.updateUserAvatar = (req, res) => {
    const query = req.body._id       
    Users.findByIdAndUpdate(query,{avatar:req.body.avatar}).then((doc)=>{
        (doc != null)?res.send("done"):res.send("user not found") 
        })
}

exports.updateUserAdmin = (req, res) => {
    const query = req.body._id       
    Users.findByIdAndUpdate(query,{admin:req.body.admin}).then((doc)=>{
        (doc != null)?res.send("done"):res.send("user not found") 
    })
}


exports.loginUser = (req, res) => {

	Users.findOne({
		email: req.body.email
	}).then(function (user) {

        if (bcrypt.compare(req.body.password,user.password)==false) {
            
            res.send("invalid password")
        }
        const token = jwt.sign({email: user.email},env.jwt, { expiresIn: '1h' });
        res.header('Authorization', token);
        Sessions.create({
			emailUser: user.email,
			token: token,
        });
        res.send('OK')
	})
};
