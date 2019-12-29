var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var  Publisher= require("./../models/Publisher");


// to get all Publisher
router.get("/:publisherId", function(req, res)
 {
    Publisher.findById({_id: req.params.publisherId},(err, docs) =>
    {
        if (err) {
            res.send(err);
        } 
            res.send(docs);
        
    });
});

router.get("/", function(req, res)
 {
    Publisher.find({},(err, docs) =>
    {
        if (err) {
            res.send(err);
        } 
            res.send(docs);
        
    });
});



//Define Route to create a new Publisher
router.post("/", function(req, res) {
    var name = req.body.name;
    var address = req.body.address;

    if (!name || !address) {
        res.send({
            status: "error",
            msg: "Missing body parameter :name || address "
        });
        return;
    }
    var newPublisher = new Publisher({
        name: name,
        address: address
        
    });
    newPublisher.save(function(err, publisher) {
        if (err) {
            res.send(err);
        } else {
            res.send(publisher);
        }
    });
});



//Delete Route for deleting publisher by id
router.delete("/:id", function(req, res) {
    var id = req.params.id;

    Publisher.findByIdAndDelete(id, function(err, publisher) {
        if (err) {
            res.send(err);
        } else {
            res.send(publisher);
        }
    });
});
//Delete no-id Route for error handling
router.delete("/", function(req, res) {
    res.send({
        status: "error",
        msg: "Missing url parameter : task id. e.g. /publisher/:id"
    });
});

/*//Define Route to update seller
router.put("/", function(req, res) {
    var sellerId = req.body.sellerId;
    var name = req.body.name;
    var address = req.body.address;
    var quantity = req.body.quantity;

    if (!sellerId) {
        res.send({
            status: "error",
            msg: "Missing body parameter : sellerId"
        });
        return;
    }

    if (!name && !address && !quantity) {
        res.send({
            status: "error",
            msg: "Missing body parameter : name OR address OR quantity"
        });
        return;
    }

    var toUpdate = {};
    name && (toUpdate.name = name);
    address && (toUpdate.address = address);
    quantity && (toUpdate.quantity = quantity);

    Seller.findByIdAndUpdate(sellerId, toUpdate, function(err, seller) {
        if (err) {
            res.send(err);
        } else {
            res.send(seller);
        }
    });
}); */

module.exports = router;