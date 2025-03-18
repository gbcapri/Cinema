const Session = require('../models/session_model');

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.findAll();
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar sessões' });
  }
};

exports.createSession = async (req, res) => {
  try {
    const { movieId, roomId, date, time, ticketsAvailable } = req.body;
    const session = await Session.create({ movieId, roomId, date, time, ticketsAvailable });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar sessão' });
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Sessão não encontrada' });
    }
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar sessão' });
  }
};

exports.updateSession = async (req, res) => {
  try {
    const { movieId, roomId, date, time, ticketsAvailable } = req.body;
    const session = await Session.findByPk(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Sessão não encontrada' });
    }
    await session.update({ movieId, roomId, date, time, ticketsAvailable });
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar sessão' });
  }
};

exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (!session) {
      return res.status(404).json({ error: 'Sessão não encontrada' });
    }
    await session.destroy();
    res.json({ message: 'Sessão deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar sessão' });
  }
};
