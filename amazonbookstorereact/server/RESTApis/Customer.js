var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var CustomerSchema = require("./../models/Customer");
const Customer = mongoose.model("Customer", CustomerSchema);

// Define Route to get all customers
router.get("/", function (req, res) {
    Customer.find().exec(function (err, customers) {
        if (err) {
            res.send(err);
        } else {
            res.send(customers);
        }
    });
});

//Define Route to get customer by id
router.get("/:id", function (req, res) {
    var id = req.params.id;
    Customer.findById(id, function (err, customer) {
        if (err) {
            res.send(err);
        } else {
            res.send(customer);
        }
    });
});

//Define Route to create a new customer
router.post("/", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var contact = req.body.contact;
    var address = req.body.address;

    if (!email || !password || !name || !address || !contact) {
        res.send({
            status: "error",
            msg: "Missing body parameter :email || password || name || address || contact"
        });
        return
    }
    var newCustomer = new Customer({
        email: email,
        password: password,
        name: name,
        contact: contact,
        address: address
    });
    newCustomer.save(function (err, task) {
        if (err) {
            res.send(err);
        } else {
            res.send(task);
        }
    });
});

//Delete no-id Route for error handling
router.delete("/", function (req, res) {
    res.send({
        status: "error",
        msg: "Missing url parameter : task id. e.g. /customer/:id"
    });
});

//Delete Route for deleting members by id
router.delete("/:id", function (req, res) {
    var id = req.params.id;

    Customer.findByIdAndDelete(id, function (err, customer) {
        if (err) {
            res.send(err);
        } else {
            res.send(customer);
        }
    });
});

//Define Route to update member
router.put("/", function (req, res) {
    var customerId = req.body.customerId;
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var contact = req.body.contact;
    var address = req.body.address;

    if (!customerId) {
        res.send({
            status: "error",
            msg: "Missing body parameter : CustomerId"
        });
        return;
    }

    if (!email && !password && !name && !contact && !address) {
        res.send({
            status: "error",
            msg: "Missing body parameter : email OR password OR name OR contact OR address"
        });
        return;
    }

    var toUpdate = {};
    email && (toUpdate.email = email);
    password && (toUpdate.password = password);
    name && (toUpdate.name = name);
    contact && (toUpdate.contact = contact);
    address && (toUpdate.address = address);

    Customer.findByIdAndUpdate(customerId, toUpdate, function (err, customer) {
        if (err) {
            res.send(err);
        } else {
            res.send(customer);
        }
    });
});

module.exports = router;