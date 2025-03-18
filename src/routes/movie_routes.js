import express from 'express';
import Movie from '../models/movie_model.js';
import authenticator from '../middlewares/authenticator.js';
import authorizer from '../middlewares/authorizer.js';

const router = express.Router();

// Todos os filmes(todos os usuários)
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// Novo filme(apenas admin)
router.post('/', authenticator, authorizer(['admin']), async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
});

// Filme específico(todos os usuários)
router.get('/:id', async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).send('Filme não encontrado');
      }
      res.json(movie);
    } catch (error) {
      res.status(400).send('Erro ao buscar o filme');
    }
  });
// Atualizar(apenas admin)
router.put('/:id', authenticator, authorizer(['admin']), async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
});

// Deletar(apenas admin)
router.delete('/:id', authenticator, authorizer(['admin']), async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;