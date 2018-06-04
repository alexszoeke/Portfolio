var express = require("express");
var router = express.Router();

var path = require("path");


module.exports = function(app) {
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/portfolio", function(req, res) {
    res.render("portfolio");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.get("/about", function(req, res) {
    res.render("about-me");
});

};