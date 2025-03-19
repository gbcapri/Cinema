import Ticket from '../models/ticket_model.js';

export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ingressos' });
  }
};

export const createTicket = async (req, res) => {
  try {
    const { sessionId, userId, price } = req.body;
    const ticket = await Ticket.create({ sessionId, userId, price });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar ingresso' });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ingresso não encontrado' });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ingresso' });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { sessionId, userId, price } = req.body;
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ingresso não encontrado' });
    }
    await ticket.update({ sessionId, userId, price });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar ingresso' });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ingresso não encontrado' });
    }
    await ticket.destroy();
    res.json({ message: 'Ingresso deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar ingresso' });
  }
};
