const express = require('express');
const { getAllTickets, createTicket, getTicketById, updateTicket, deleteTicket } = require('../controllers/ticket_controller');

const router = express.Router();

router.get('/', getAllTickets);

router.post('/', createTicket);

router.get('/:id', getTicketById);

router.put('/:id', updateTicket);

router.delete('/:id', deleteTicket);

module.exports = router;
