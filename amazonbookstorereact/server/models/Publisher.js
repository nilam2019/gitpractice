//Seller Schema

var mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema({
    name: String,
    address: String,
    books: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Book' }]

});
const Publisher= mongoose.model('Publisher',PublisherSchema);
module.exports = Publisher;
