var db = require("../models");

module.exports = function (app) {

    app.post("/api/submit/", function (req, res) {
        db.Contact.create({
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
            }).then(function (dbContact) {
                console.log("success");
                res.json(dbContact);
            })
            .catch(function (err) {
                console.log(err);
              });
    });

};