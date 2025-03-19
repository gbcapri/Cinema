import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Importa a conexão com o banco de dados

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user', // Usuário normal definido como user
  },
});

export default User;
