import dotenv from 'dotenv'; 

dotenv.config();

const dbUrl = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

console.log(dbUrl); 

import { Sequelize } from 'sequelize';

// Configurando a conexão com o PostgreSQL
const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: false,  // Desabilita o log das queries
});

// Testando a conexão
async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados: ', error.message);
    console.error('Detalhes do erro:', error);
  }
}

authenticate();

export default sequelize;
