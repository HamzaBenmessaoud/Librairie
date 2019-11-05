const mongoose = require('mongoose')

let BookSchema = new mongoose.Schema({
    title: {
        trim: true,
        index: true,
        type: String,
        lowercase: true,
        required: true,
    },
    author: {
        trim: true,
        type: String,
        lowercase: true,
        required: true,
    },
    publishDate: {
        type: Date,
        required: true,
    },
    rating: [{
        rate: {
            type: Number,
            required: true,
        },
        comment: {
            trim: true,
            type: String,
            required: false,
        },
        userId: {
            type: String,
            required: true,
        },
        publishDate: {
            type: Date,
            required: true,
        },
    }],
    links: [{
        name: {
            type: String,
            required: true,
            default: 'Amazon',
        },
        link: {
            type: String,
            required: true,
        },
    }],
    visite:{
        nb:Number,
        liste:[{
            email:String,
            time: Date
        }]
    }
})

BookSchema.pre('save', function(next) {
    next()
})

module.exports = mongoose.model('Books', BookSchema)