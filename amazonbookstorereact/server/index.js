const express = require("express");
var mongoose = require("mongoose");
var customerApi = require("./RESTApis/Customer");
var bookApi = require("./RESTApis/Book");
var publisherApi = require("./RESTApis/Publisher");
//var cartApi = require("./RESTApis/Cart");

const app = express();
app.use(express.json());
const port = 3001;

mongoose.connect("mongodb://localhost/amazonbookstore", { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    // we're connected!
    console.log(" port connected!");
});


app.use("/book", bookApi);
app.use("/customer", customerApi);
app.use("/publisher",publisherApi);
//app.use("/cart", cartApi);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));