const express = require("express");
const routes = express.Router();
const db = require("../config/db_config.js");

routes.get('/', (req, res) => {
    res.render('login');
})

module.exports = routes;