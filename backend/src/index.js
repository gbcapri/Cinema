import dotenv from 'dotenv';
import express from 'express';
import movieRoutes from './routes/movie_routes.js';
import roomRoutes from './routes/room_routes.js';
import sessionRoutes from './routes/session_routes.js';
import ticketRoutes from './routes/ticket_routes.js';
import authRoutes from './routes/auth_routes.js';
import authenticator from './middlewares/authenticator.js';
import authorizer from './middlewares/authorizer.js';
import syncDatabase from './utils/syncronyze_database.js';
import cors from 'cors';

dotenv.config();

console.log('DB Connection URL:', dbUrl);

// testando
console.log('DB_USER:', process.env.DB_USER); 
console.log('DB_PASSWORD:', process.env.DB_PASSWORD); 
console.log('DB_HOST:', process.env.DB_HOST); 
console.log('DB_PORT:', process.env.DB_PORT); 
console.log('DB_NAME:', process.env.DB_NAME); 

// Inicializar o app aqui
const app = express();

// Usar o middleware CORS após a inicialização do app
app.use(cors());
app.use(express.json());

// Rotas públicas
app.use('/auth', authRoutes); // Adicionando rota de autenticação (login/signup)

// Rotas protegidas
app.use('/movies', authenticator, authorizer(['admin']), movieRoutes); // Apenas admin pode acessar
app.use('/rooms', authenticator, authorizer(['admin']), roomRoutes);   // Apenas admin pode acessar
app.use('/sessions', authenticator, authorizer(['admin', 'user']), sessionRoutes); // Admin ou user pode acessar
app.use('/tickets', authenticator, authorizer(['admin', 'user']), ticketRoutes); // Admin ou user pode acessar

syncDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
