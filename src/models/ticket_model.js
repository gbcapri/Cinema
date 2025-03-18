const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Session = require('./session_model');

const Ticket = sequelize.define('Ticket', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.STRING, // "credit_card", "debit_card", "cash"
  },
}, {
  timestamps: true,
});

Ticket.belongsTo(Session);

module.exports = Ticket;
