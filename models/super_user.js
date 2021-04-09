const Sequelize = require('sequelize');
const db = require('../config/db_config');



const superUser = db.define('superUser', {

    name: {
        type: Sequelize.STRING(30),
        field: 'name'
    },

    email: {
        type: Sequelize.STRING(1024),
        field: 'email'
    },

    password: {
        type: Sequelize.STRING(64),
        filed: 'password'
    },

    idSuper: {
        type: Sequelize.STRING(16),
        filed: 'idSuper'
    }

});


module.exports = superUser;