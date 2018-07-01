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

app.get("/marketing", function(req, res) {
    res.render("marketing");
});

app.get("/resume", function(req, res) {
    res.render("resume");
})

};