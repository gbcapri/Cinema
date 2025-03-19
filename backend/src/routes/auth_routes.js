import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  const user = new User({ username, password: passwordHash });
  await user.save();

  res.status(201).send('User created');
});

// Rota de login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    const userId = 1;  // Exemplo de ID de usuário
    const role = 'admin';  // Exemplo de role de usuário

    // Gere o token
    const token = generateToken(userId, role);
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Credenciais inválidas' });
});

export default router;
