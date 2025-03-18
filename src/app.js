import express from 'express';
import movieRoutes from './routes/movie_routes.js';
import roomRoutes from './routes/room_routes.js';
import sessionRoutes from './routes/session_routes.js';
import ticketRoutes from './routes/ticket_routes.js';
import authRoutes from './routes/auth_routes.js'; // Importando rotas de autenticação
import authenticator from './middlewares/authenticator.js'; // Middleware de autenticação
import authorizer from './middlewares/authorizer.js'; // Middleware de autorização
import syncDatabase from './utils/syncronyze_database.js';

const app = express();
app.use(express.json());

// Rotas públicas
app.use('/auth', authRoutes); // Adicionando rota de autenticação (login/signup)

// Rotas protegidas
app.use('/movies', authenticator, authorizer(['admin']), movieRoutes); // Apenas admin pode acessar
app.use('/rooms', authenticator, authorizer(['admin']), roomRoutes);   // Apenas admin pode acessar
app.use('/sessions', authenticator, authorizer(['admin', 'user']), sessionRoutes); // Admin ou user pode acessar
app.use('/tickets', authenticator, authorizer(['admin', 'user']), ticketRoutes); // Admin ou user pode acessar

sequelize.sync({ force: false }).then(() => {
    console.log('Banco de dados sincronizado');
}).catch((error) => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});

syncDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
