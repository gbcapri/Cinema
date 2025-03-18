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

// login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ _id: user._id, role: user.role }, 'SECRET_KEY');
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

export default router;
