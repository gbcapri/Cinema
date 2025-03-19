import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Movie from './movie_model.js';
import Room from './room_model.js';

const Session = sequelize.define('Session', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  ticket_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  available_seats: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: true,
});

Session.belongsTo(Movie);
Session.belongsTo(Room);

export default Session;
