"use strict";

const Sequelize = require('sequelize');
const $ = require('jquery');



module.exports = new Sequelize('grest_db', 'user', 'user@2021', {
    host: 'localhost',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
});

const superUser = require('../models/super_user.js');

Memo.sync({ force: false })