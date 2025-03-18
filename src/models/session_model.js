const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Movie = require('./movie_model');
const Room = require('./room_model');

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

module.exports = Session;
