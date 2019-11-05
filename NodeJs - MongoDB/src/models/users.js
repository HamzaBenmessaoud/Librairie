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
        default: 'https://pbs.twimg.com/profile_images/481525828044353536/c3runNqA.jpeg'
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
    }]
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