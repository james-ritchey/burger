var db = require("../models/");
module.exports = function(app) {
    // Create all our routes and set up logic within those routes where required.
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            var data = [];
            dbBurger.forEach(function(e) {
                data.push(e.dataValues);
            });
            console.log(dbBurger);
            var burgerObject = { burgers: data };
            console.log(data);
            res.render("index", burgerObject);
        });
    });
}