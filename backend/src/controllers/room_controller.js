import Room from '../models/room_model.js';  // Alterar para import

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar salas' });
  }
};

export const createRoom = async (req, res) => {
  try {
    const { number, capacity } = req.body;
    const room = await Room.create({ number, capacity });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar sala' });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Sala não encontrada' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar sala' });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const { number, capacity } = req.body;
    const room = await Room.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Sala não encontrada' });
    }
    await room.update({ number, capacity });
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar sala' });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Sala não encontrada' });
    }
    await room.destroy();
    res.json({ message: 'Sala deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar sala' });
  }
};
