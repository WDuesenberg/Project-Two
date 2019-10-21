// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/myapi/", function (req, res){
        axios.get("https://api.coinbase.com/v2/prices/:USD_BTC/buy").then(function(data){
        res.json(data)
        })
    })
};