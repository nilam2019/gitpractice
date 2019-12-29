//Book Schema

var mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    author: String,
    title: String,
    price: Number,
    version: Number
});
const Book = mongoose.model('Book',BookSchema);
module.exports = Book;