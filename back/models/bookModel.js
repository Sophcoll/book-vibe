const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
     author: {
        type: String,
        required: true
    },
      color: {
        type: String,
    },
       description: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema)

//  rating: {
//         type: Number,
//     },