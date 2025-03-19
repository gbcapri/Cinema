import express from 'express';
import { getAllTickets, createTicket, getTicketById, updateTicket, deleteTicket } from '../controllers/ticket_controller.js';

const router = express.Router();

router.get('/', getAllTickets);
router.post('/', createTicket);
router.get('/:id', getTicketById);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

export default router;
