"use strict";

const Sequelize = require('sequelize');


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

superUser.sync({ force: false });