const sequelize = require('../config/db.js');
const Movie = require('../models/movie_model.js'); // Usando require
const Room = require('../models/room_model.js');
const Session = require('../models/session_model.js');
const Ticket = require('../models/ticket_model.js');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
};

module.exports = syncDatabase;
