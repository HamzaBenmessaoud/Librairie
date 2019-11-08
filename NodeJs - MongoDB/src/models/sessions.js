const mongoose = require('mongoose')



let SessionsSchema = new mongoose.Schema({
        emailUser:{
            type:String,
            require: true,
            lowercase: true,
            trim: true,
        },
        token:{
            type:String,
            require: true,
            lowercase: true,
            trim: true,
        } 

})

module.exports = mongoose.model('Sessions', SessionsSchema)