const Movie = require('../models/movie_model');

// Todos os filmes
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
};

// Novo filme
exports.createMovie = async (req, res) => {
  try {
    const { title, duration, genre, director, release } = req.body;
    const movie = await Movie.create({ title, duration, genre, director, release });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar filme' });
  }
};

// Filme específico
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filme' });
  }
};

// Atualizar 
exports.updateMovie = async (req, res) => {
  try {
    const { title, duration, genre, director, release } = req.body;
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    await movie.update({ title, duration, genre, director, release });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar filme' });
  }
};

// Deletar
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    await movie.destroy();
    res.json({ message: 'Filme deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar filme' });
  }
};
