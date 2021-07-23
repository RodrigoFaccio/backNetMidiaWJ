const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/UserModel');











const connection = new Sequelize(dbConfig);
//passar a conecção para do model

User.init(connection);







module.exports = connection;