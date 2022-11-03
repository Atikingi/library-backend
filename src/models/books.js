const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        minLength: 2
    },
    author: {
        type: String,
        required: true,
        minLength: 2
    },
    release_year: {
        type: Number,
        required: true,
        minLength: 1
    },
    available: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('book', bookSchema);
