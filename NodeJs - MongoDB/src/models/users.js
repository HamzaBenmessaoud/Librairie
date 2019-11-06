const mongoose = require('mongoose'),
    bcrypt = require('mongoose-bcrypt'),
    stringQuery = require('mongoose-string-query')


let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        trim: true,
        bcrypt: true,
    },
    name: {
        type: String,
        trim: true,
        require: true,
    },
    avatar: {
        type: String,
        trim: true,
        require: true,
        default: 'https://picsum.photos/id/'+ Math.floor(Math.random()*1000)+'/200/300'
    },
    tokens: [{
        token: {
            type: String,
            require: true,
        },
        type: {
            type: String,
            require: true,
            default: 'auth'
        }
    }],
    admin:{
        type: Boolean,
        default: false
    },
    actif:{
        type:Boolean,
        default: true
    }
})

UserSchema.pre('save', (next) => {
    if (!this.isNew)
        next()
    else
        console.log('send Mail') // promise
    next()
})

UserSchema.plugin(bcrypt).plugin(stringQuery)

module.exports = mongoose.model('Users', UserSchema)