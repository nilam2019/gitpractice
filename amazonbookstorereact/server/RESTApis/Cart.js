var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var CartSchema = require("./../models/Cart");
const Cart = mongoose.model("Cart", CartSchema);

// Define Route to get all Carts
router.get("/", function(req, res) {
    Cart.find().exec(function(err, carts) {
        if (err) {
            res.send(err);
        } else {
            res.send(carts);
        }
    });
});

//Define Route to get Cart by id
router.get("/:id", function(req, res) {
    var id = req.params.id;
    Cart.findById(id, function(err, cart) {
        if (err) {
            res.send(err);
        } else {
            res.send(cart);
        }
    });
});

//Define Route to create a new Cart
router.post("/", function(req, res) {
    var title = req.body.title;
    var price = req.body.price;
    var quantity = req.body.quantity;
    if (!title || !price || !quantity) {
        res.send({
            status: "error",
            msg: "Missing body parameter :title || price ||  quantity"
        });
        return;
    }
    var newCart = new Cart({
        title: title,
        price: price,
        quantity: quantity
    });
    newCart.save(function(err, task) {
        if (err) {
            res.send(err);
        } else {
            res.send(task);
        }
    });
});

//Delete no-id Route for error handling
router.delete("/", function(req, res) {
    res.send({
        status: "error",
        msg: "Missing url parameter : task id. e.g. /cart/:id"
    });
});

//Delete Route for deleting carts by id
router.delete("/:id", function(req, res) {
    var id = req.params.id;

    Cart.findByIdAndDelete(id, function(err, cart) {
        if (err) {
            res.send(err);
        } else {
            res.send(cart);
        }
    });
});

//Define Route to update cart
router.put("/", function(req, res) {
    var cartId = req.body.cartId;
    var title = req.body.title;
    var price = req.body.price;
    var quantity = req.body.quantity;

    if (!cartId) {
        res.send({
            status: "error",
            msg: "Missing body parameter : cartId"
        });
        return;
    }

    if (!title && !price && !quantity) {
        res.send({
            status: "error",
            msg: "Missing body parameter : title OR price OR quantity"
        });
        return;
    }

    var toUpdate = {};
    title && (toUpdate.title = title);
    price && (toUpdate.price = price);
    quantity && (toUpdate.quantity = quantity);

    Cart.findByIdAndUpdate(cartId, toUpdate, function(err, cart) {
        if (err) {
            res.send(err);
        } else {
            res.send(cart);
        }
    });
});

module.exports = router;