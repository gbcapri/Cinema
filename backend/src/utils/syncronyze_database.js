import sequelize from '../config/db.js';
import Movie from '../models/movie_model.js';
import Room from '../models/room_model.js';
import Session from '../models/session_model.js';
import Ticket from '../models/ticket_model.js';

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
};

export default syncDatabase;
