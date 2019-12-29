var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Book = require("./../models/Book");
var Publisher = require("./../models/Publisher");

//  to get all books by id
router.get("/:book", function(req, res)
 {
Book.findById({id: req.params.book},(err,docs) =>
{
        if (err) {
            res.send(err);
        } 
            res.send(docs);
        });
});

// to get all book
router.get("/", function(req, res)
 {
    Book.find({},(err, docs) =>
    {
        if (err) {
            res.send(err);
        } 
            res.send(docs);
        
    });
});






//Define Route to create a new book
router.post("/", function(req, res) {
    var author = req.body.author;
    var title = req.body.title;
    var price = req.body.price;
    var version = req.body.version;
    var publisherId = req.body.publisherId;

    if (!author || !title || !price || !version || !publisherId) {
        res.send({
            status: "error",
            msg: "Missing body parameter :author || title || price || version || publisherId"
        });
        return;
    }

    Publisher.findById(publisherId,(err,publisher) => {
        if (err) {
            res.send({
                status: "error",
                msg: "No publisher found"
            });
        }
        return publisher;
    }).then(publisher => {
        var newBook = new Book({
            author: author,
            title: title,
            price: price,
            version: version,
            publisher: publisher
        });

        newBook.save(function(err, savedBook) {
            if (err) {
                res.send(err);
            } else {
                res.send(savedBook);
            }
        });
    });
});

//Delete no-id Route for error handling
router.delete("/", function(req, res) {
    res.send({
        status: "error",
        msg: "Missing url parameter : task id. e.g. /book/:id"
    });
});

//Delete Route for deleting book by id
router.delete("/:id", function(req, res) {
    var id = req.params.id;

    Book.findByIdAndDelete(id, function(err, book) {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    });
});

//Define Route to update book
router.put("/", function(req, res) {
    var bookId = req.body.bookId;
    var author = req.body.author;
    var title = req.body.title;
    var price = req.body.price;
    var version = req.body.version;
    var publisherId = req.body.publisherId;

    if (!bookId) {
        res.send({
            status: "error",
            msg: "Missing body parameter : bookId"
        });
        return;
    }

    if (!author && !title && !price && !version && !publisherId) {
        res.send({
            status: "error",
            msg: "Missing body parameter : author OR title OR price OR version OR publisherId"
        });
        return;
    }

    if (publisherId) {
        Publisher.findById(publisherId,(err,publisher) => {
            if (err) {
                res.send({
                    status: "error",
                    msg: "No publisher found"
                });
            }
            return publisher;
        }).then(publisher => {
            var toUpdate = {};
            author && (toUpdate.author = author);
            title && (toUpdate.title = title);
            price && (toUpdate.price = price);
            version && (toUpdate.version = version);
            publisher && (toUpdate.publisher = publisher);
    
            Book.findByIdAndUpdate(bookId, toUpdate, function(err, book) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(book);
                }
            });
        });
    } else {
        var toUpdate = {};
        author && (toUpdate.author = author);
        title && (toUpdate.title = title);
        price && (toUpdate.price = price);
        version && (toUpdate.version = version);

        Book.findByIdAndUpdate(bookId, toUpdate, function(err, book) {
            if (err) {
                res.send(err);
            } else {
                res.send(book);
            }
        });
    }
});

module.exports = router;