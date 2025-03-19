import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Session from './session_model.js';

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

export default Ticket;
