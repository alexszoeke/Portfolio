var Sequelize = require('sequelize');
var DataTypes = Sequelize;

module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    return Contact;
};