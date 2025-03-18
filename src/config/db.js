const { Sequelize } = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize('Cinema', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
