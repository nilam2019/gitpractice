var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var CategoriesSchema = require("./../models/Categories");
const Categories = mongoose.model("Categories", CategoriesSchema);

// Define Route to get all Categoriess
router.get("/", function(req, res) {
    Categories.find().exec(function(err, categories) {
        if (err) {
            res.send(err);
        } else {
            res.send(categories);
        }
    });
});

//Define Route to get Categories by id
router.get("/:id", function(req, res) {
    var id = req.params.id;
    Categories.findById(id, function(err, category) {
        if (err) {
            res.send(err);
        } else {
            res.send(category);
        }
    });
});

//Define Route to create a new Categories
router.post("/", function(req, res) {
    var name = req.body.name;

    if (!name) {
        res.send({
            status: "error",
            msg: "Missing body parameter :name"
        });
        return;
    }
    var newCategory = new Categories({
        name: name
    });
    newCategory.save(function(err, task) {
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
        msg: "Missing url parameter : task id. e.g. /categories/:id"
    });
});

//Delete Route for deleting categories by id
router.delete("/:id", function(req, res) {
    var id = req.params.id;

    Categories.findByIdAndDelete(id, function(err, category) {
        if (err) {
            res.send(err);
        } else {
            res.send(category);
        }
    });
});

//Define Route to update category
router.put("/", function(req, res) {
    var categoriesId = req.body.categoriesId;
    var name = req.body.name;

    if (!categoriesId) {
        res.send({
            status: "error",
            msg: "Missing body parameter : categoriesId"
        });
        return;
    }

    if (!name) {
        res.send({
            status: "error",
            msg: "Missing body parameter : name "
        });
        return;
    }

    var toUpdate = {};
    name && (toUpdate.name = name);

    Categories.findByIdAndUpdate(categoriesId, toUpdate, function(err, category) {
        if (err) {
            res.send(err);
        } else {
            res.send(category);
        }
    });
});

module.exports = router;