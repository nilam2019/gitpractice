//Customer Schema

var mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
    quantity: Number,
    book:{ type: Schema.Types.ObjectId, ref: 'Book' },
    cart:{ type: Schema.Types.ObjectId, ref: 'Cart' }
});
const CartItem = mongoose.model('CartItem',CartItemSchema);

module.exports = CartItem;