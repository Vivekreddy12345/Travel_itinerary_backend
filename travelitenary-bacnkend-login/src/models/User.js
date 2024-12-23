module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        permission: DataTypes.STRING
    })