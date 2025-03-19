import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
  },
  release: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
});

export default Movie;
