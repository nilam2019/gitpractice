//Customer Schema

var mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    contact: Number,
    address: String
});

module.exports = CustomerSchema;