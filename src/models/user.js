const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa a conexão com o banco de dados

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',//usuario normal definido como user
  },
});

module.exports = User;
