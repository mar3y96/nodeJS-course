const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_course', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
});

module.exports = sequelize;