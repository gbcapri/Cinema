const express = require('express');
const { getAllSessions, createSession, getSessionById, updateSession, deleteSession } = require('../controllers/session_controller');

const router = express.Router();

router.get('/', getAllSessions);

router.post('/', createSession);

router.get('/:id', getSessionById);

router.put('/:id', updateSession);

router.delete('/:id', deleteSession);

module.exports = router;
