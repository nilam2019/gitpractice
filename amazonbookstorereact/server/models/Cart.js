//Cart Schema

var mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    cartitems: [{ type: Schema.Types.ObjectId, ref: 'Publisher' }]
    //price: Number,
    //quantity: Number


});
const Cart = mongoose.model('Cart',CartSchema);

module.exports = Cart;