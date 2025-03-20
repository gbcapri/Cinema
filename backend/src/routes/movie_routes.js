import express from 'express';
import Movie from '../models/movie_model.js';
import authenticator from '../middlewares/authenticator.js';
import authorizer from '../middlewares/authorizer.js';

const router = express.Router();

// Novo filme (apenas admin)
router.post('/', authenticator, authorizer(['admin']), async (req, res) => {
  const { title, genre, duration, director, release } = req.body;

  try {
    const newMovie = await Movie.create({
      title,
      genre,
      duration,
      director,
      release,
    });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar filme' });
  }
});

// Todos os filmes (todos os usuários)
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
});

// Filme específico (todos os usuários)
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o filme' });
  }
});

// Atualizar filme (apenas admin)
router.put('/:id', authenticator, authorizer(['admin']), async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    await movie.update(req.body);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o filme' });
  }
});

// Deletar filme (apenas admin)
router.delete('/:id', authenticator, authorizer(['admin']), async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    await movie.destroy();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o filme' });
  }
});

export default router;