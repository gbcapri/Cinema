import { DataTypes } from 'sequelize'; 
import sequelize from '../config/db.js';

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
    allowNull: false, 
  },
}, {
  timestamps: true,
});

export default Room;
