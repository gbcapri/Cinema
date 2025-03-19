import { DataTypes } from 'sequelize'; // Usando import ao invés de require
import sequelize from '../config/db.js';  // Usando import para sequelize

const Room = sequelize.define('Room', {
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false, // Ex: "IMAX", "3D", "normal"
  },
}, {
  timestamps: true, // Testar se precisa
});

export default Room;
