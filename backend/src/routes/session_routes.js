import express from 'express';
import { getAllSessions, createSession, getSessionById, updateSession, deleteSession } from '../controllers/session_controller.js';

const router = express.Router();

router.get('/', getAllSessions);

router.post('/', createSession);

router.get('/:id', getSessionById);

router.put('/:id', updateSession);

router.delete('/:id', deleteSession);

export default router;
